import { basename, dirname, resolve } from 'path';
import { execSync } from 'child_process';
import { FoundCall, FoundCallArgument, ProjectAnalysis } from './types';
import {
  CallExpression,
  Identifier,
  Node,
  Project,
  SyntaxKind,
  ts,
  Type,
  TypeFormatFlags,
} from 'ts-morph';

export function getStorageCalls(tsConfigFilePath: string): ProjectAnalysis {
  const absolutePath = resolve(tsConfigFilePath);
  const workingDirectory = dirname(absolutePath);
  const revision = execSync('git rev-parse HEAD', { cwd: workingDirectory })
    .toString().trim();

  const projectName = basename(workingDirectory);

  // Don't output this in the stdout, so that we can do `brackets-storage-calls > file`.
  process.stderr.write(`Analyzing ${projectName}...\n`);

  const project = new Project({
    tsConfigFilePath,
  });

  const typeDefinitions = project.getSourceFile('types.ts');
  if (!typeDefinitions) {
    throw Error('Type definition file not found.');
  }

  const interfaces = typeDefinitions.getInterfaces()
  const [crudInterface, storageInterface] = interfaces.filter(iface => ['CrudInterface', 'Storage'].includes(iface.getName()))

  if (!crudInterface) {
    throw Error('`CrudInterface` interface not found.');
  }

  if (!storageInterface) {
    throw Error('`Storage` interface not found.');
  }

  // Sadly, `getMethods()` does not return inherited methods.
  const crudMethods = [...crudInterface.getMethods(), ...storageInterface.getMethods()];
  const results: FoundCall[] = [];

  for (const method of crudMethods) {
    const params = method.getParameters().map(parameter => parameter.getName());
    const references = method.findReferencesAsNodes()
      .filter(node => node.getSourceFile().getBaseName() !== 'types.ts');

    for (const reference of references) {
      const originalDefinitionBody = method.getFullText();
      const definitionBodyFromReference = (reference as Identifier).getDefinitionNodes()[0].getFullText();
      if (originalDefinitionBody !== definitionBodyFromReference) {
        continue; // Verify that this reference is a reference of the current `method` overload.
      }

      const callExpression = reference.getFirstAncestorByKind(
        SyntaxKind.CallExpression
      );

      if (!callExpression) continue;

      const methodName = method.getName();
      const table = getMethodTable(callExpression);
      const returnType = serializeType(
        callExpression,
        callExpression.getReturnType()
      );

      const lineNumber = callExpression.getStartLineNumber();

      const args: FoundCallArgument[] = callExpression
        .getArguments()
        .map((arg, i) => ({
          name: params[i],
          type: serializeType(arg, arg.getType()),
          text: arg.getText(),
        }));

      results.push({
        methodName,
        table,
        returnType,
        arguments: args,
        sourceFile: {
          baseName: callExpression.getSourceFile().getBaseName(),
          fullPath: callExpression.getSourceFile().getFilePath(),
        },
        lineNumber,
      });
    }
  }

  return {
    name: projectName,
    commitId: revision,
    calls: results,
  };
}

function getMethodTable(
  callExpression: CallExpression<ts.CallExpression>
): string | undefined {
  const table = callExpression.getFirstDescendantByKind(
    SyntaxKind.StringLiteral
  );

  return table?.getText().replace(/'/g, '');
}

function serializeType(enclosingNode: Node<ts.Node>, type: Type) {
  return type
    .getText(enclosingNode, TypeFormatFlags.MultilineObjectLiterals | TypeFormatFlags.NoTruncation)
    .replace(/import\([^)]+\)\./g, '');
}
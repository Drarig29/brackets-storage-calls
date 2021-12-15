import { writeFileSync } from 'fs';
import { exportToMarkdown } from './markdown';
import { FoundCall, FoundCallArgument } from './types';
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

function getStorageCalls(tsConfigFilePath: string): FoundCall[] {
  const project = new Project({
    tsConfigFilePath,
  });

  const typeDefinitions = project.getSourceFile('types.ts');
  if (!typeDefinitions) {
    throw Error('Type definition file not found.');
  }

  const crudInterface = typeDefinitions
    .getInterfaces()
    .find((iface) => iface.getName() === 'CrudInterface');

  if (!crudInterface) {
    throw Error('CrudInterface not found.');
  }

  const crudMethods = crudInterface.getMethods();
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

  return results;
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

const calls = getStorageCalls(process.argv[2]);
// import calls from './calls.json';

const markdownOutput = exportToMarkdown(calls);

writeFileSync('calls.json', JSON.stringify(calls, null, 2));
writeFileSync('output.md', markdownOutput);

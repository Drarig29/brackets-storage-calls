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
    const references = method.findReferencesAsNodes();

    for (const reference of references) {
      const callExpression = reference.getFirstAncestorByKind(
        SyntaxKind.CallExpression
      );

      if (!callExpression) continue;

      const methodName = getMethodIndentifier(callExpression).getText();
      const returnType = serializeType(
        callExpression,
        callExpression.getReturnType()
      );
      const lineNumber = callExpression.getStartLineNumber();

      const args: FoundCallArgument[] = callExpression
        .getArguments()
        .map((arg) => ({
          text: arg.getText(),
          type: serializeType(arg, arg.getType()),
        }));

      results.push({
        methodName,
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

function getMethodIndentifier(
  callExpression: CallExpression<ts.CallExpression>
): Identifier {
  const propertyAccess = callExpression.getFirstChildByKindOrThrow(
    SyntaxKind.PropertyAccessExpression
  );
  const identifier = propertyAccess.getFirstChildByKindOrThrow(
    SyntaxKind.Identifier
  );
  return identifier;
}

function serializeType(enclosingNode: Node<ts.Node>, type: Type) {
  return type
    .getText(enclosingNode, TypeFormatFlags.MultilineObjectLiterals)
    .replace(/import\([^)]+\)\./g, '');
}

const calls = getStorageCalls(process.argv[2]);
const markdownOutput = exportToMarkdown(calls);

writeFileSync('calls.json', JSON.stringify(calls, null, 2));
writeFileSync('output.md', markdownOutput);

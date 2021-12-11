import { writeFileSync } from 'fs';
import { exportToMarkdown } from './markdown';
import {
  CallExpression,
  Identifier,
  Project,
  SyntaxKind,
  ts,
  Type,
} from 'ts-morph';
import { FoundCall, FoundCallArgument } from './types';

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
      const returnType = serializeType(callExpression.getReturnType());
      const sourceFile = callExpression.getSourceFile().getBaseName();
      const lineNumber = callExpression.getStartLineNumber();

      const args: FoundCallArgument[] = callExpression
        .getArguments()
        .map((arg) => ({
          text: arg.getText(),
          type: serializeType(arg.getType()),
        }));

      results.push({
        methodName,
        returnType,
        arguments: args,
        sourceFile,
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

function serializeType(type: Type) {
  return type.getText().replace(/import\([^)]+\)\./g, '');
}

const calls = getStorageCalls(process.argv[2]);
const markdownOutput = exportToMarkdown(calls);

writeFileSync('calls.json', JSON.stringify(calls, null, 2));
writeFileSync('output.md', markdownOutput);

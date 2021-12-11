import { writeFileSync } from 'fs';
import { CallExpression, Identifier, Project, SyntaxKind, ts } from 'ts-morph';

interface FoundCallArgument {
  text: string;
  type: string;
}

interface FoundCall {
  methodName: string;
  arguments: FoundCallArgument[];
  returnType: string;
  sourceFile: string;
  lineNumber: number;
}

function getStorageCalls(tsConfigFilePath: string): void {
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
      const returnType = callExpression.getReturnType().getText();
      const sourceFile = callExpression.getSourceFile().getBaseName();
      const lineNumber = callExpression.getStartLineNumber();

      const args: FoundCallArgument[] = callExpression
        .getArguments()
        .map((arg) => ({
          text: arg.getText(),
          type: arg.getType().getText(),
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

  writeFileSync('calls.json', JSON.stringify(results, null, 2));
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

getStorageCalls(process.argv[2]);

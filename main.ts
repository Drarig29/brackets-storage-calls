import { Project, SyntaxKind } from 'ts-morph';

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

  for (const method of crudMethods) {
    const references = method.findReferencesAsNodes();

    for (const reference of references) {
      const callExpression = reference.getFirstAncestorByKind(
        SyntaxKind.CallExpression
      );

      if (!callExpression) continue;

      console.log(callExpression.getArguments());
    }
  }
}

getStorageCalls(process.argv[2]);

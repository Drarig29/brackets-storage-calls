# brackets-storage-calls

Creates a list of all `storage` calls with their signature and parameters, so that one can
know everything he has to implement in his own `CrudInterface` implementation.

[![npm](https://img.shields.io/npm/v/brackets-storage-calls.svg)](https://www.npmjs.com/package/brackets-storage-calls)

> Don't forget to check [brackets-storage](https://github.com/Drarig29/brackets-storage) to find out if an implementation already exists for the storage you'd like to work with.

You can see the output here: https://drarig29.github.io/brackets-docs/user-guide/storage/

It uses [`ts-morph`](https://ts-morph.com/) to navigate the TypeScript AST (_Abstract Syntax Tree_).
const { writeFileSync } = require('fs');
const { getStorageCalls } = require('../bin/main');
const { exportToMarkdown } = require('../bin/markdown');

const givenArg = process.argv[2];
const tsConfigFilePath = givenArg ? givenArg : './tsconfig.json';

const calls = getStorageCalls(tsConfigFilePath);
const markdownOutput = exportToMarkdown(calls);

writeFileSync('test/calls.json', JSON.stringify(calls, null, 2));
writeFileSync('test/output.md', markdownOutput);
#!/usr/bin/env node

import { getStorageCalls } from './main';
import { exportToMarkdown } from './markdown';

const givenArg = process.argv[2];
const tsConfigFilePath = givenArg ? givenArg : './tsconfig.json';

const calls = getStorageCalls(tsConfigFilePath);
const markdownOutput = exportToMarkdown(calls);

process.stdout.write(markdownOutput);
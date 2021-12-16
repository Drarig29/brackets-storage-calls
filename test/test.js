const calls = getStorageCalls(process.argv[2]);
const markdownOutput = exportToMarkdown(calls);

writeFileSync('calls.json', JSON.stringify(calls, null, 2));
writeFileSync('output.md', markdownOutput);
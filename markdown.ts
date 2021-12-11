import { FoundCall } from "./types";

export function exportToMarkdown(calls: FoundCall[]): string {
  let output = '';

  for (const call of calls) {
    output += `- \`${call.methodName}(${call.arguments[0].text}): ${call.returnType}\` [${call.sourceFile}:${call.lineNumber}]\n`;
  }

  return output;
}

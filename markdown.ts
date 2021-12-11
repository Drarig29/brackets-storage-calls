import { FoundCall } from './types';

export function exportToMarkdown(calls: FoundCall[]): string {
  let output = '';

  for (const call of calls) {
    output += `\`${call.methodName}(${call.arguments[0].text}): ${call.returnType}\` [${call.sourceFile.baseName}:${call.lineNumber}]\n\n`;

    if (call.arguments[1]) {
      output += '- Types\n\n';
      output += `${formatTsCode(call.arguments[1].type)}\n\n`;

      output += '- Usage\n\n';
      output += `${formatJsCode(call.arguments[1].text)}\n\n`;
    }

    output += '---\n\n';
  }

  return output;
}

function surroundWithCodeBlock(code: string, language: string): string {
  return `\`\`\`${language}\n${code}\n\`\`\``;
}

function formatJsCode(code: string): string {
  const formatted = code
    .replace(/(\s{4})+\s/g, '\n    ') // Remove the redundant indentations
    .replace(/(\s{4})\}$/g, '}'); // Remove the closing indentation
  return surroundWithCodeBlock(formatted, 'js');
}

function formatTsCode(code: string): string {
  const formatted = code
    .replace(/\s{4}(?!\s{4})/g, '\n    ') // Add newlines
    .replace(/;}$/g, ';\n}'); // Add a newline for the closing tag
  return surroundWithCodeBlock(formatted, 'ts');
}

import { FoundCall, Priority } from './types';

export function exportToMarkdown(calls: FoundCall[]): string {
  const sorted = calls.sort((a, b) => {
    const up = prioritizer(a, b);
    let r: Priority;

    if (a.table === b.table) {
      r = up('methodName', 'insert'); if (r.returned) return r.result; // C
      r = up('methodName', 'select'); if (r.returned) return r.result; // R
      r = up('methodName', 'update'); if (r.returned) return r.result; // U
      r = up('methodName', 'delete'); if (r.returned) return r.result; // D
      return a.methodName.localeCompare(b.methodName);
    }

    r = up('table', 'stage'); if (r.returned) return r.result;
    r = up('table', 'group'); if (r.returned) return r.result;
    r = up('table', 'round'); if (r.returned) return r.result;
    r = up('table', 'match'); if (r.returned) return r.result;
    r = up('table', 'match_game'); if (r.returned) return r.result;

    // Participant will be forced to be here.

    // Force table as variable to be at the end.
    if (a.table && !b.table) return -1;
    if (!a.table && b.table) return 1;
    if (!a.table && !b.table) return 0;
    return a.table!.localeCompare(b.table!);
  });

  const found = new Set();

  const filtered = sorted.filter(call => {
    const key = (call.methodName + call.returnType + call.arguments.reduce((acc, current) => acc + current.type, '')).replace(/\s/g, '');
    if (found.has(key)) return false;
    found.add(key);
    return true;
  });

  let output = '';

  for (const call of filtered) {
    output += `\`${call.methodName}(${call.arguments[0].text}): ${call.returnType}\` [${call.sourceFile.baseName}:${call.lineNumber}]\n\n`;

    for (let i = 1; i < call.arguments.length; i++) {
      output += `### Argument ${i}\n\n`;

      output += '- Types\n\n';
      output += `${formatTsCode(call.arguments[i].type)}\n\n`;

      output += '- Usage\n\n';
      output += `${formatJsCode(call.arguments[i].text)}\n\n`;
    }

    output += '---\n\n';
  }

  return output;
}

function prioritizer(a: FoundCall, b: FoundCall) {
  return (key: keyof FoundCall, value: unknown): Priority => {
    if (a[key] === value) {
      return { returned: true, result: -1 }; // a is greater than b
    }
    if (b[key] === value) {
      return { returned: true, result: 1 }; // b is greater than a
    }
    return { returned: false }
  }
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

import { FoundCall, Priority, ProjectAnalysis } from './types';

export function exportToMarkdown(result: ProjectAnalysis): string {
  const sorted = result.calls.sort((a, b) => {
    const up = prioritizer(a, b);
    let r: Priority;

    if (a.table === b.table) {
      r = up('methodName', 'delete'); if (r.returned) return r.result; // D
      r = up('methodName', 'update'); if (r.returned) return r.result; // U
      r = up('methodName', 'select'); if (r.returned) return r.result; // R
      r = up('methodName', 'insert'); if (r.returned) return r.result; // C
      return a.methodName.localeCompare(b.methodName);
    }

    r = up('table', 'participant'); if (r.returned) return r.result;
    r = up('table', 'match_game'); if (r.returned) return r.result;
    r = up('table', 'match'); if (r.returned) return r.result;
    r = up('table', 'round'); if (r.returned) return r.result;
    r = up('table', 'group'); if (r.returned) return r.result;
    r = up('table', 'stage'); if (r.returned) return r.result;

    // Force table as variable to be at the end.
    if (a.table && !b.table) return -1;
    if (!a.table && b.table) return 1;
    if (!a.table && !b.table) return 0;
    return a.table!.localeCompare(b.table!);
  }).reverse();

  const found = new Set();

  const filtered = sorted.filter(call => {
    const key = (call.methodName + call.returnType + call.arguments.reduce((acc, current) => acc + current.type, '')).replace(/\s/g, '');
    if (found.has(key)) return false;
    found.add(key);
    return true;
  });

  let output = '';
  let currentHeader = '';
  let currentMethod = '';

  for (const call of filtered) {
    const currentTable = formatTable(call.table);

    if (currentTable !== currentHeader) {
      currentHeader = currentTable;
      output += `## ${currentHeader}\n\n`;
    }

    if (call.methodName !== currentMethod) {
      currentMethod = call.methodName;
      output += `### \`${currentMethod}()\`\n\n`;
    }

    // TODO: Use current commit id to make a permalink

    output += `<a target="_blank" href="https://github.com/Drarig29/brackets-manager.js/blob/master/src/${call.sourceFile.baseName}#L${call.lineNumber}">Source</a> :material-chevron-down:\n\n`;
    output += '```ts\n';
    output += call.methodName;
    output += '(';

    output += [
      call.arguments[0].text,
      ...call.arguments.slice(1).map(arg => `${arg.name}: ${formatTsCode(arg.type)}`)
    ].join(', ');

    output += '): ';
    output += call.returnType;
    output += '\n```\n\n';

    // output += '---\n\n';

    // output += `\`${call.methodName}(${call.arguments[0].text}): ${call.returnType}\` [${call.sourceFile.baseName}:${call.lineNumber}]\n\n`;

    // for (let i = 1; i < call.arguments.length; i++) {
    //   output += `### Argument ${i}\n\n`;

    //   output += '- Name\n\n';
    //   output += `${call.arguments[i].name}\n\n`;

    //   output += '- Type\n\n';
    //   output += `${formatTsCode(call.arguments[i].type)}\n\n`;

    //   output += '- Usage\n\n';
    //   output += `${formatJsCode(call.arguments[i].text)}\n\n`;
    // }

    // output += '---\n\n';
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

function formatTable(table?: string): string {
  table = table || 'Dynamic table';
  table = (table[0].toUpperCase() + table.substring(1)).replace('_', ' ');
  return table;
}

function surroundWithCodeBlock(code: string, language: string): string {
  return `\`\`\`${language}\n${code}\n\`\`\``;
}

function formatJsCode(code: string): string {
  const formatted = code
    .replace(/(\s{4})+\s/g, '\n    ') // Remove the redundant indentations
    .replace(/(\s{4})\}$/g, '}'); // Remove the closing indentation
  return formatted;
}

function formatTsCode(code: string): string {
  const formatted = code
    .replace(/\s{4}(?!\s{4})/g, '\n    ') // Add newlines
    .replace(/;}$/g, ';\n}'); // Add a newline for the closing tag
  return formatted;
}

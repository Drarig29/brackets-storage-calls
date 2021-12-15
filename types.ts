export interface FoundCallArgument {
  text: string;
  type: string;
}

export interface FoundCall {
  methodName: string;
  table?: string; // Table could be a variable and not available at compile-time
  returnType: string;
  arguments: FoundCallArgument[];
  sourceFile: {
    fullPath: string;
    baseName: string;
  };
  lineNumber: number;
}

export type Priority = {
  returned: true, result: number
} | {
  returned: false
}
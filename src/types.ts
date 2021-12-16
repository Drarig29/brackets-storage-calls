export interface FoundCallArgument {
  name: string;
  type: string;
  text: string;
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

export interface ProjectAnalysis {
  name: string;
  commitId: string;
  calls: FoundCall[];
}

export type Priority = {
  returned: true, result: number
} | {
  returned: false
}
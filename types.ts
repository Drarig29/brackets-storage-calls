export interface FoundCallArgument {
  text: string;
  type: string;
}

export interface FoundCall {
  methodName: string;
  arguments: FoundCallArgument[];
  returnType: string;
  sourceFile: string;
  lineNumber: number;
}

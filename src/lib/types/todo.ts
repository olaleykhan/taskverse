// /path/to/types.ts
export interface Todo {
    id: string;
    content: string;
    isDone: boolean;
    createdBy: string;
    markedBy?: string;
  createdAt?: string;
  }
  
  export interface DraftTodo {
    content: string;
    isDone: boolean;
    createdBy: string;
  }
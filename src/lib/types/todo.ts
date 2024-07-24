// /path/to/types.ts
export interface Todo {
    id: string;
    content: string;
    isDone: boolean;
    createdBy: string;
    markedBy?: string;
  }
  
  export interface CreateTodo {
    content: string;
    isDone: boolean;
    createdBy: string;
  }
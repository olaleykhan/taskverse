// src/lib/store/todos.ts
import { Todo } from "@/lib/types/todo";
import { TODOS } from "../constants/todo";

let todos: Todo[] = TODOS

export const getTodos = (): Todo[] => todos;

export const addTodo = (todo: Todo): void => {
  todos.push(todo);
};

export const updateTodo = (id: string, updatedFields: Partial<Todo>): void => {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, ...updatedFields } : todo));
};

export const deleteTodo = (id: string): void => {
  todos = todos.filter((todo) => todo.id !== id);
};

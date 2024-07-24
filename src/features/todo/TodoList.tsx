"use client";
import React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { useTodoList } from "./hooks";

type Props = {
  userId: string;
};

const TodoList: React.FC<Props> = ({ userId }) => {
  const { todos, addTodo, toggleTodoDone, deleteTodo } = useTodoList(userId);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-700 dark:text-gray-100 mb-4">
          To-Do List
        </h1>
        <TodoInput onAdd={addTodo} />
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodoDone}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
import React from "react";
import { Todo } from "@/lib/types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex items-center justify-between p-2 border rounded-lg ${
        todo.isDone ? "bg-slate-200" : "bg-slate-50"
      } transition`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.isDone}
          onChange={() => onToggle(todo.id)}
        />
        <span className={`text-slate-700 ${todo.isDone ? "line-through" : ""}`}>
          {todo.content}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

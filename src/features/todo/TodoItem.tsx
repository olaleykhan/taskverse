import React from "react";
import { Todo } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex flex-col p-4 border rounded-lg shadow-md transition ${
        todo.isDone
          ? "bg-gray-200 dark:bg-gray-700"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={todo.isDone}
            onChange={() => onToggle(todo.id)}
          />
          <span
            className={`text-lg ${
              todo.isDone ? "line-through" : ""
            } text-gray-900 dark:text-gray-100`}
          >
            {todo.content}
          </span>
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          Delete
        </button>
      </div>
      <div className="text-sm mt-2 text-gray-700 dark:text-gray-300">
        <p>
          Created by: <span className="font-semibold">{todo.createdBy}</span>
        </p>
        {todo.createdAt ? (
          <p>
            Created at:{" "}
            <span className="font-semibold">
              {formatDistanceToNow(new Date(todo.createdAt))} ago
            </span>
          </p>
        ) : (
          "Filler for created by"
        )}
        {todo.isDone && todo.markedBy && (
          <p>
            Marked done by:{" "}
            <span className="font-semibold">{todo.markedBy}</span>
          </p>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
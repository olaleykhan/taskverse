"use client";
import React, { useState } from "react";
import { Todo } from "@/lib/types";
import { generateTemporaryId } from "@/lib/utils/id";
import { TODOS } from "@/lib/constants/todo";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [inputValue, setInputValue] = useState("");

  function handleAddTodo() {
    if (!inputValue.trim()) {
      alert("text input cannot be empty");
      return;
    }
    const newTask: Todo = {
      id: generateTemporaryId(),
      content: inputValue,
      isDone: false,
      createdBy: "Alaf",
      markedBy: "",
    };
    setTodos((prev) => [...prev, newTask]);
    setInputValue("");
  }

  function handleToggleTodoDone(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: !todo.isDone, markedBy: "Alaf" }
          : todo
      )
    );
  }

  function handleDeleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-700 mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border border-slate-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            onClick={handleAddTodo}
            className="bg-slate-700 text-white p-2 rounded-r-lg hover:bg-slate-800 transition"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-2 border rounded-lg ${
                todo.isDone ? "bg-slate-200" : "bg-slate-50"
              } transition`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={todo.isDone}
                  onChange={() => handleToggleTodoDone(todo.id)}
                />
                <span
                  className={`text-slate-700 ${
                    todo.isDone ? "line-through" : ""
                  }`}
                >
                  {todo.content}
                </span>
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

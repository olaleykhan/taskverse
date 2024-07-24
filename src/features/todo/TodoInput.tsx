import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (content: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="flex-1 p-2 border border-slate-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        onClick={handleAdd}
        className="bg-slate-700 dark:bg-gray-600 text-white p-2 rounded-r-lg hover:bg-slate-800 dark:hover:bg-gray-700 transition"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
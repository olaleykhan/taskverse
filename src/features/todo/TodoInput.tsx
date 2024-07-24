import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (content: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (!inputValue.trim()) {
      alert("Text input cannot be empty");
      return;
    }
    onAdd(inputValue);
    setInputValue("");
  };

  return (
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
  );
};

export default TodoInput;

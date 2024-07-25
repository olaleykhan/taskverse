"use client";

import { useState } from "react";
import TodoList from "@/features/todo/TodoList";
import Auth from "@/features/auth/Auth";
import Logout from "@/features/auth/Logout"; // Adjust the path based on your project structure

const Home = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);

  const handleLogout = () => {
    setUserId(undefined); // Clear userId state
    localStorage.removeItem("userId"); // Clear userId from localStorage
  };

  if (!userId) {
    return <Auth setUserId={setUserId} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-md p-4">
        <h1 className="text-xl font-bold text-slate-700 dark:text-gray-100">
          Task-Verse
        </h1>
        <Logout onLogout={handleLogout} />
      </header>
      <main className="p-4">
        <TodoList userId={userId} />
      </main>
    </div>
  );
};

export default Home;

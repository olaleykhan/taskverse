"use client";
import React, { useState } from "react";

const users = [
  "lekan_dev",
  "user1",
  "user2",
  "user3",
  "user4",
  "user5",
  "user6",
  "user7",
  "user8",
  "user9",
  "user10",
  "peace",
  "random",
];

interface AuthProps {
  setUserId: (userId: string) => void;
}

const Auth: React.FC<AuthProps> = ({ setUserId }) => {
  const [selectedUser, setSelectedUser] = useState<string>(users[0]);

  const handleSignIn = () => {
    if (selectedUser === "random") {
      setUserId("john_doe");
    } else {
      setUserId(selectedUser);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-slate-700 dark:text-gray-100 mb-4">
          Welcome to Task-Verse. Your make shift real time collab To-Do list.
        </h1>
        <p className="text-slate-500 dark:text-gray-300 mb-4">
          Please sign in by selecting a user from the drop down.
        </p>

        <div className="flex flex-col items-center">
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="mb-4 p-2 border border-slate-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button
            onClick={handleSignIn}
            className="bg-slate-700 dark:bg-gray-600 text-white p-2 rounded-lg hover:bg-slate-800 dark:hover:bg-gray-700 transition"
          >
            Sign In
          </button>
        </div>
        <p className="text-slate-500 dark:text-gray-300 my-10 text-xs">
          {" "}
          NB: selecting random assigns you a john doe tag rather than user not
          found
        </p>
      </div>
    </div>
  );
};

export default Auth;
"use client";
import React, { useState } from "react";

const users = [
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
  "random", // Assigns John Doe
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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-slate-700 mb-4">
          Welcome to Converdo
        </h1>
        <p className="text-slate-500 mb-4">Please sign in with a username:</p>
        <div className="flex flex-col items-center">
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="mb-4 p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button
            onClick={handleSignIn}
            className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-800 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

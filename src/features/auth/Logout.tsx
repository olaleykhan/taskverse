// Logout.tsx

import React from "react";

interface LogoutProps {
  onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout(); // Call the onLogout function passed as prop
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 text-slate-500 dark:text-gray-300 hover:underline focus:outline-none"
    >
      Logout
    </button>
  );
};

export default Logout;

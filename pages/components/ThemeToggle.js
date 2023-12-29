import React from "react";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      className="block py-1 px-3 rounded bg-green-500 text-white dark:bg-green-700 dark:text-white"
      onClick={toggleTheme}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;

"use client";
// components/ThemeToggle.js
import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa"; // Import icons
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage to set initial theme
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
      document.documentElement.classList.toggle("dark", savedMode === "dark");
    } else {
      // Default to light mode if no preference is set
      document.documentElement.classList.toggle("dark", false);
    }
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const newMode = !isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-white dark:text-gray-200 p-2 rounded-md bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600"
    >
      {isDarkMode ? <MdOutlineWbSunny /> : <BsFillMoonStarsFill />}{" "}
      {/* Render icons */}
    </button>
  );
};

export default ThemeToggle;

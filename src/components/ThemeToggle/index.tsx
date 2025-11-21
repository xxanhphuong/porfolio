import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-[1rem] py-[0.5rem] border-primary border rounded-4 text-14 text-primary hover:opacity-80 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <i className="fas fa-sun text-primary"></i>
      ) : (
        <i className="fas fa-moon text-primary"></i>
      )}
    </button>
  );
};

export default ThemeToggle;


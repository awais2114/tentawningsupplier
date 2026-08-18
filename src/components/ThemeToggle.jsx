import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-gray-200 text-gray-800 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
    </button>
  );
};

export default ThemeToggle;
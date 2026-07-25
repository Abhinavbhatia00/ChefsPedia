import { ChevronLeft, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-amber-50 px-4 py-8 text-gray-900 dark:bg-gray-950 dark:text-white sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1 font-semibold text-orange-500 hover:text-black dark:hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          Home
        </Link>

        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-lg dark:border-white/10 dark:bg-gray-900 sm:p-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">
            Settings
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Choose how ChefsPedia looks.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Theme</h2>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                theme === "light"
                  ? "border-orange-400 bg-orange-50"
                  : "border-black/10 hover:border-orange-400 dark:border-white/10"
              }`}
            >
              <Sun className="h-6 w-6 text-orange-500" />
              <div>
                <p className="font-semibold">Light</p>
                <p className="text-sm text-gray-500">Bright appearance</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                theme === "dark"
                  ? "border-orange-400 bg-gray-800"
                  : "border-black/10 hover:border-orange-400 dark:border-white/10"
              }`}
            >
              <Moon className="h-6 w-6 text-orange-500" />
              <div>
                <p className="font-semibold">Dark</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dark appearance
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;

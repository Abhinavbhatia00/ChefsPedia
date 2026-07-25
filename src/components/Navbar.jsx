import { useState } from "react";
import { Bolt, ChefHat, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <nav className="sticky top-0 z-100 border-b border-black/10 bg-white dark:border-white/10 dark:bg-gray-950">
      <div className="mx-auto flex min-h-15 max-w-screen-2xl items-center gap-3 px-3 py-2 sm:px-4">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex shrink-0 items-center font-sans text-xl font-medium text-black hover:text-orange-400 dark:text-white sm:text-2xl"
        >
          <ChefHat className="mr-1 h-8 w-8 rounded-full bg-black p-1 text-white group-hover:bg-orange-400 dark:bg-orange-400" />
          <span className="hidden sm:inline">ChefsPedia</span>
        </Link>

        <form onSubmit={handleSearch} className="min-w-0 flex-1">
          <div className="relative ml-auto w-full max-w-2xl">
            <Search
              strokeWidth={1.5}
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600 dark:text-gray-300"
            />
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
              placeholder="Find recipes..."
              className="w-full rounded-lg border border-gray-400 bg-white py-2 pl-10 pr-3 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400 dark:border-white/20 dark:bg-gray-900 dark:text-white sm:text-base"
            />
          </div>
        </form>

        <Link
          to="/settings"
          aria-label="Open settings"
          className="shrink-0 rounded-lg p-2 text-black hover:bg-orange-100 hover:text-orange-500 dark:text-white dark:hover:bg-gray-800"
        >
          <Bolt strokeWidth={1.3} className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

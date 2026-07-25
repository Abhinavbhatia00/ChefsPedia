import { Link, useLocation } from "react-router-dom";

const Global = () => {
  const location = useLocation();
  const isAllRecipesPage = location.pathname === "/recipes";

  const featuredAreas = [
    "American",
    "British",
    "Canadian",
    "Indian",
    "Chinese",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];

  return (
    <div className="sticky top-15 z-50 flex h-15 items-center gap-3 overflow-x-auto border-b border-black/5 bg-white px-3 dark:border-white/10 dark:bg-gray-950 sm:px-4">
      <Link
        to={isAllRecipesPage ? "/" : "/recipes"}
        className="flex h-10 min-w-35 shrink-0 items-center justify-center rounded-xl border border-orange-400 bg-orange-400 px-4 text-white transition hover:bg-white hover:text-orange-400 dark:hover:bg-gray-900"
      >
        {isAllRecipesPage ? "Home Page" : "All Recipes"}
      </Link>

      {featuredAreas.map((area) => (
        <Link
          key={area}
          to={`/search?area=${encodeURIComponent(area)}`}
          className="flex h-10 min-w-27 shrink-0 items-center justify-center rounded-xl border border-orange-400/80 px-4 text-orange-400 transition hover:bg-orange-400 hover:text-white"
        >
          {area}
        </Link>
      ))}
    </div>
  );
};

export default Global;

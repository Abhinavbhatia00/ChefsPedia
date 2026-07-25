import { ChevronLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import Footer from "./Footer";
import RecipeCard from "./RecipeCard";
import { API_URL, useFetch } from "./useFetch";

const Searchview = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const area = searchParams.get("area")?.trim() || "";

  let fetchUrl = null;

  if (query) {
    fetchUrl = `${API_URL}search.php?s=${encodeURIComponent(query)}`;
  } else if (area) {
    fetchUrl = `${API_URL}filter.php?a=${encodeURIComponent(area)}`;
  }

  const { data, error, loading } = useFetch(fetchUrl);
  const meals = data?.meals ?? [];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-amber-50 dark:bg-gray-950">
        <p className="text-gray-500 dark:text-gray-300">Loading recipes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-amber-50 dark:bg-gray-950">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const heading = area ? `${area} Recipes` : `Results for “${query}”`;

  return (
    <>
      <main className="min-h-screen bg-amber-50 px-4 py-8 text-black dark:bg-gray-950 dark:text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-1 font-semibold text-orange-500 hover:text-black dark:hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            Home
          </Link>

          <h1 className="font-serif text-3xl font-bold sm:text-4xl">
            {heading}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {meals.length} recipe{meals.length === 1 ? "" : "s"} found
          </p>

          {meals.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {meals.map((meal) => (
                <RecipeCard key={meal.idMeal} meal={meal} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-gray-500">
              No recipes found.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Searchview;
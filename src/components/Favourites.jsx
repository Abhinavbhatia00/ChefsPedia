import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import RecipeCard from "./RecipeCard";
import { useFavorites } from "../context/FavoritesContext";

const Favourites = () => {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-[calc(100vh-60px)] bg-amber-50 px-4 py-8 text-black dark:bg-gray-950 dark:text-white sm:px-8">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-8 flex items-center gap-3">
          <Heart className="h-8 w-8 fill-orange-400 text-orange-400" />
          <div>
            <h1 className="font-serif text-3xl font-bold sm:text-4xl">
              My Favourites
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {favorites.length}{" "}
              {favorites.length === 1 ? "recipe saved" : "recipes saved"}
            </p>
          </div>
        </div>

        {favorites.length === 0 ? (
          <div className="rounded-2xl border border-orange-200 bg-white px-5 py-16 text-center shadow-sm dark:border-white/10 dark:bg-gray-900">
            <Heart
              strokeWidth={1.4}
              className="mx-auto h-14 w-14 text-orange-400"
            />
            <h2 className="mt-4 text-2xl font-semibold">
              No favourite recipes yet
            </h2>
            <p className="mx-auto mt-2 max-w-md text-gray-600 dark:text-gray-400">
              Press the heart on any recipe card and it will appear here.
            </p>
            <Link
              to="/recipes"
              className="mt-6 inline-flex rounded-xl bg-orange-400 px-5 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              Explore recipes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Favourites;

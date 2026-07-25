import { Link, useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChefHat,
  CirclePlay,
  MapPin,
  Tag,
  UtensilsCrossed,
} from "lucide-react";

import { API_URL, useFetch } from "./useFetch";

const RecipeDetailedView = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch(
    `${API_URL}lookup.php?i=${id}`
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-amber-50 dark:bg-gray-950">
        <p className="text-lg font-semibold text-gray-500">
          Loading recipe details...
        </p>
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

  const meal = data?.meals?.[0];

  if (!meal) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-amber-50 text-black dark:bg-gray-950 dark:text-white">
        <p className="text-xl font-semibold">Recipe not found.</p>
      </div>
    );
  }

 
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient?.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || "As required",
      });
    }
  }

  return (
    <main className="min-h-screen bg-amber-50 text-black dark:bg-gray-950 dark:text-white">
   
      <div className="mx-auto max-w-7xl px-5 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-orange-500 transition hover:text-black dark:hover:text-white"
        >
          <ChevronLeft
            strokeWidth={1.5}
            className="h-5 w-5"
          />

          <span className="text-lg font-semibold">Home</span>
        </Link>
      </div>


      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-5">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-gray-900">
          <div className="flex flex-col lg:flex-row">
   
            <div className="relative min-h-70 w-full overflow-hidden sm:min-h-87.5 lg:w-1/2">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                {meal.strCategory && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black backdrop-blur">
                    <Tag className="h-4 w-4 text-orange-500" />
                    {meal.strCategory}
                  </span>
                )}

                {meal.strArea && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black backdrop-blur">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    {meal.strArea}
                  </span>
                )}
              </div>
            </div>

    
            <div className="flex w-full flex-col justify-center p-5 sm:p-7 lg:w-1/2 lg:p-12">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 text-white">
                <ChefHat className="h-7 w-7" />
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                ChefsPedia Recipe
              </p>

              <h1 className="font-serif text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                {meal.strMeal}
              </h1>

              <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                A delicious {meal.strArea || "international"} recipe with
                simple ingredients and clear cooking instructions.
              </p>

              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-orange-400 px-5 py-3 font-semibold text-white transition hover:bg-black dark:hover:bg-orange-500 sm:px-6"
                >
                  <CirclePlay className="h-5 w-5" />
                  Watch video recipe
                </a>
              )}
            </div>
          </div>
        </div>


        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
   
          <section className="w-full rounded-3xl border border-black/10 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.07)] dark:border-white/10 dark:bg-gray-900 sm:p-7 lg:w-2/5">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-400 text-white">
                <UtensilsCrossed className="h-6 w-6" />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                  Ingredients
                </h2>

                <p className="text-sm text-gray-500">
                  {ingredients.length} items required
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {ingredients.map((item, index) => (
                <div
                  key={`${item.ingredient}-${index}`}
                  className="flex items-center justify-between gap-3 rounded-xl bg-amber-50 px-3 py-3 dark:bg-gray-800 sm:gap-4 sm:px-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-400 text-xs font-bold text-white">
                      {index + 1}
                    </span>

                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {item.ingredient}
                    </span>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-orange-500">
                    {item.measure}
                  </span>
                </div>
              ))}
            </div>
          </section>


          <section className="w-full rounded-3xl border border-black/10 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.07)] dark:border-white/10 dark:bg-gray-900 sm:p-7 lg:w-3/5">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                <ChefHat className="h-6 w-6" />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                  Instructions
                </h2>

                <p className="text-sm text-gray-500">
                  Follow these steps to prepare the recipe
                </p>
              </div>
            </div>

            <p className="whitespace-pre-line leading-8 text-gray-700 dark:text-gray-300">
              {meal.strInstructions}
            </p>
          </section>
        </div>

        {meal.strSource && (
          <div className="mt-8 text-center">
            <a
              href={meal.strSource}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-orange-400 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-400 hover:text-white"
            >
              View original recipe
            </a>
          </div>
        )}
      </section>
    </main>
  );
};

export default RecipeDetailedView;

import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { API_URL } from "./useFetch";

const AllRecipes = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        setLoading(true);
        setError(null);

        
        const letters = "abcdefghijklmnopqrstuvwxyz".split("");

        
        const responses = await Promise.all(
          letters.map((letter) =>
            axios.get(`${API_URL}search.php?f=${letter}`)
          )
        );

        
        const combinedMeals = responses.flatMap(
          (response) => response.data.meals ?? []
        );

        
        const uniqueMeals = Array.from(
          new Map(
            combinedMeals.map((meal) => [meal.idMeal, meal])
          ).values()
        );

        setMeals(uniqueMeals);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMeals();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Loading all recipes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-100 items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 text-black dark:bg-gray-950 dark:text-white sm:px-6">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold sm:text-4xl">All Recipes</h1>

        <p className="mt-2 text-gray-500">
          Showing {meals.length} recipes
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </main>
  );
};

export default AllRecipes;

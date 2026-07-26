import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const RecipeCard = ({ meal }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(meal.idMeal);

  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-black/10 bg-white text-black shadow transition hover:-translate-y-1 hover:shadow-[0_7px_14px_rgba(0,0,0,0.20)] dark:border-white/10 dark:bg-gray-800 dark:text-white">
      <Link to={`/recipes/${meal.idMeal}`} className="block">
        <div className="overflow-hidden">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="h-40 w-full object-cover transition group-hover:scale-[1.03] sm:h-44"
          />
        </div>

        <h3 className="truncate p-4 pr-14 font-semibold">{meal.strMeal}</h3>
      </Link>

      <button
        type="button"
        onClick={() => toggleFavorite(meal)}
        aria-label={saved ? "Remove from favourites" : "Add to favourites"}
        className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/95 text-orange-400 shadow-md transition hover:scale-110 dark:bg-gray-900"
      >
        <Heart
          strokeWidth={1.8}
          className={`h-5 w-5 ${saved ? "fill-orange-400" : ""}`}
        />
      </button>
    </div>
  );
};

export default RecipeCard;

import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link
      to={`/recipes/${meal.idMeal}`}
      className="group block w-full overflow-hidden rounded-xl border border-black/10 bg-white text-black shadow transition hover:-translate-y-1 hover:shadow-[0_7px_14px_rgba(0,0,0,0.20)] dark:border-white/10 dark:bg-gray-800 dark:text-white"
    >
      <div className="overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="h-40 w-full object-cover transition group-hover:scale-[1.03] sm:h-44"
        />
      </div>

      <h3 className="truncate p-4 font-semibold">{meal.strMeal}</h3>
    </Link>
  );
};

export default RecipeCard;

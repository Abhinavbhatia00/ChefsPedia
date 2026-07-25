import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderImport from "react-slick";

import RecipeCard from "./RecipeCard";
import { useFetch } from "./useFetch";

const Slider = SliderImport.default || SliderImport;

const Arrow = ({ onClick, direction }) => {
  const isNext = direction === "next";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isNext ? "Next recipes" : "Previous recipes"}
      className={`absolute top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-orange-400 text-white shadow-lg hover:bg-orange-500 ${
        isNext ? "-right-2" : "-left-2"
      }`}
    >
      {isNext ? (
        <ChevronRight className="h-5 w-5" />
      ) : (
        <ChevronLeft className="h-5 w-5" />
      )}
    </button>
  );
};

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, error, loading } = useFetch(fetchUrl);

  if (loading) {
    return (
      <p className="py-10 text-center text-gray-500">Loading recipes...</p>
    );
  }

  if (error) {
    return <p className="p-8 text-center text-red-500">Error: {error}</p>;
  }

  const meals = data?.meals ?? [];

  const settings = {
    infinite: meals.length > 4,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="previous" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full bg-white px-3 py-6 text-black dark:bg-gray-950 dark:text-white sm:px-6">
      <h2 className="mb-4 font-serif text-2xl font-bold sm:text-3xl">
        {title}
      </h2>

      <div className="px-2">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 py-3">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;

import SliderImport from "react-slick";
import { Link } from "react-router-dom";

import { useFetch } from "./useFetch";

const Slider = SliderImport.default || SliderImport;

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, error, loading } = useFetch(fetchUrl);

  if (loading) {
    return (
      <p className="py-8 text-center text-gray-500">Loading recipes...</p>
    );
  }

  if (error) {
    return <p className="p-8 text-center text-red-500">Error: {error}</p>;
  }

  const meals = data?.meals ?? [];

  const settings = {
    infinite: meals.length > 7,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="w-full bg-white px-3 pb-8 text-black dark:bg-gray-950 dark:text-white sm:px-6">
      <h2 className="mb-3 inline-flex rounded-xl bg-orange-400 px-5 py-2 font-semibold text-white">
        {title}
      </h2>

      <Slider {...settings}>
        {meals.map((meal) => (
          <div key={meal.idMeal} className="px-2 py-4">
            <Link
              to={`/recipes/${meal.idMeal}`}
              className="group block overflow-hidden rounded-xl bg-white p-2 shadow-lg transition hover:-translate-y-1 dark:bg-gray-800"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="aspect-square w-full rounded-lg object-cover transition group-hover:scale-[1.03]"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TrendingRecipe;

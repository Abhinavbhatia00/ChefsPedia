import React from "react";
import RecipeSlider from "./RecipeSlider";
import TrendingRecipe from "./TrendingRecipe";
import { API_URL } from "./useFetch";

const Homeview = () => {
  return (
    <>
      <main className="bg-white dark:bg-gray-950">
        <RecipeSlider title="All Meals" fetchUrl={`${API_URL}search.php?f=a`} />
        <TrendingRecipe
          title="Non Vegetarian"
          fetchUrl={`${API_URL}filter.php?i=chicken`}
        />
      </main>
    </>
  );
};

export default Homeview;

import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (meal) => {
    setFavorites((currentFavorites) => {
      const isAlreadySaved = currentFavorites.some(
        (favorite) => favorite.idMeal === meal.idMeal,
      );

      if (isAlreadySaved) {
        return currentFavorites.filter(
          (favorite) => favorite.idMeal !== meal.idMeal,
        );
      }

      return [...currentFavorites, meal];
    });
  };

  const isFavorite = (mealId) => {
    return favorites.some((favorite) => favorite.idMeal === mealId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

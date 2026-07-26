import { Route, Routes, useNavigate } from "react-router-dom";

import AllRecipes from "./components/AllRecipes";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import Global from "./components/Global";
import Homeview from "./components/Homeview";
import ImageSearch from "./components/ImageSearch";
import Navbar from "./components/Navbar";
import RecipeDetailedView from "./components/RecipeDetailedView";
import Searchview from "./components/Searchview";
import Settings from "./components/Settings";

const HomePage = ({ onSearch }) => {
  return (
    <>
      <ImageSearch onSearch={onSearch} />
      <Global />
      <Homeview />
      <Footer />
    </>
  );
};

const AllRecipesPage = () => {
  return (
    <>
      <Global />
      <AllRecipes />
      <Footer />
    </>
  );
};

const DetailsPage = () => {
  return (
    <>
      <RecipeDetailedView />
      <Footer />
    </>
  );
};

const App = () => {
  const navigate = useNavigate();

  const handleSearch = (searchText) => {
    const cleanedSearch = searchText.trim();

    if (!cleanedSearch) return;

    navigate(`/search?q=${encodeURIComponent(cleanedSearch)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<HomePage onSearch={handleSearch} />} />
        <Route path="/search" element={<Searchview />} />
        <Route path="/recipes" element={<AllRecipesPage />} />
        <Route path="/recipes/:id" element={<DetailsPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;

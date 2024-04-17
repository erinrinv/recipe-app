import React, { useState, useRef } from "react";
import { searchRecipes } from './api'; 
import RecipeCard from "./components/RecipeCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const pageNumber = useRef(1); 

  const handleSearchSubmit = async () => {
    try {
      const fetchedRecipes = await searchRecipes(searchTerm, 1);
      setRecipes(fetchedRecipes);
      pageNumber.current = 1;
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewMoreClick = async () => { 
    const nextPage = pageNumber.current + 1;
    try {
      const nextRecipes = await searchRecipes(searchTerm, nextPage);
      setRecipes(prevRecipes => [...prevRecipes, ...nextRecipes]);
      pageNumber.current = nextPage;
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFavorite = (recipeId) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(recipeId)) {
        newFavorites.delete(recipeId);
      } else {
        newFavorites.add(recipeId);
      }
      return newFavorites;
    });
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }}>
        <input type="text" required placeholder="Search Term" value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} />
        <button type="submit">Submit</button>
      </form>

      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onToggleFavorite={toggleFavorite} isFavorite={favorites.has(recipe.id)} />
      ))}
      <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
    </div>
  );
}

export default App;
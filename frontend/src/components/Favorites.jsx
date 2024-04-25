import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from "../components/RecipeCard";
import { getRecipes } from '../api';

function FavoritesPage(props) {
  const { favorites, onToggleFavorite } = props;
console.log(favorites);

const [recipes, setRecipes] = useState([]);
const favoriteIds = favorites.map(item => item.recipe_id)

  const fetchRecipe = async () => {
    try {
      const fetchedRecipes = await getRecipes();
      const filteredRecipes = fetchedRecipes.filter((item) => favoriteIds.includes(item.id) )
      console.log({fetchedRecipes, filteredRecipes});
      setRecipes(filteredRecipes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchRecipe();

  }, []) 


  return favorites&&(
    <div>
      <h2>My Favorites</h2>
      {recipes.map(favorite => (
        <RecipeCard
          key={favorite.recipe_id}
          recipe={favorite}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default FavoritesPage;
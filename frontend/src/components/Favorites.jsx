import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from "../components/RecipeCard";

function FavoritesPage(props) {
  const { favorites, onToggleFavorite } = props;


  return favorites&&(
    <div>
      <h2>My Favorites</h2>
      {favorites.map(favorite => (
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
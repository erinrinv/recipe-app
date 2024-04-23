import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

function FavoritesPage({ userId }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:5173/api/users/${userId}/favorites`);
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    if (userId) {
      fetchFavorites();
    }
  }, [userId]);

  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      <div className="recipe-grid-container">
        {favorites.map(favorite => (
          <RecipeCard key={favorite.recipe_id} recipe={favorite} isFavorite={true} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
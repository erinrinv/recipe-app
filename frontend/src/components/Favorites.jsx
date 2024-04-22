import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from "../components/RecipeCard";

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

    fetchFavorites();
  }, [userId]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(favorite => (
        <RecipeCard key={favorite.recipe_id} recipe={favorite} isFavorite={true} />
      ))}
    </div>
  );
}

export default FavoritesPage;
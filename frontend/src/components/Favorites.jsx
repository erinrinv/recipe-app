import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favorites({ userId }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/users/${userId}/favorites`);
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
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.recipeId}>{favorite.title} - Recipe details here</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
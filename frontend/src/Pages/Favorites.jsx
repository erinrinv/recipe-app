import React from 'react';
import FavoritesPage from '../components/Favorites';

function Favorites({ userId, onToggleFavorite, favorites }) {
  return (
    <div>
      <h1></h1>
      <FavoritesPage userId={userId} favorites = {favorites} onToggleFavorite = {onToggleFavorite}/>
    </div>
  );
}

export default Favorites;
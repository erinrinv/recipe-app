import React from 'react';
import FavoritesPage from '../components/Favorites';

function Favorites({ userId }) {
  return (
    <div>
      <h1>Welcome to the favorites page! Here is where your favorites are stored!</h1>
      <FavoritesPage userId={userId} />
    </div>
  );
}

export default Favorites;
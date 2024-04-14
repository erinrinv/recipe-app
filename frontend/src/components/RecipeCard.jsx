import React from 'react';

const RecipeCard = ({ recipe, onToggleFavorite, isFavorite }) => {
  return (
    <div className="recipe-card" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-title"><h3>{recipe.title}</h3></div>
      <button onClick={() => onToggleFavorite(recipe.id)}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default RecipeCard;
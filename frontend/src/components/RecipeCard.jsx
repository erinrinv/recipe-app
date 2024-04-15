import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-title"><h3>{recipe.title}</h3></div>
    </div>
  );
};

export default RecipeCard;
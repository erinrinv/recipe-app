import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" key={recipe.id} onClick={() => onClick(recipe)}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-title"><h3>{recipe.title}</h3></div>
    </div>
  );
};

export default RecipeCard;
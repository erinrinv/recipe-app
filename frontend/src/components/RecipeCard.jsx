import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  // Function to handle button click and navigate to the recipe page
  const handleRecipeClick = () => {
    // Navigate to the recipe page with the corresponding recipe ID
    window.location.href = `/${recipe.id}`;
  };

  return (
    <div className="recipe-card" key={recipe.id}>
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-card-title">
        <h3>{recipe.title}</h3>
        <button onClick={handleRecipeClick}>View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
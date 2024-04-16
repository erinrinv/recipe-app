import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeInformation } from '../api'; 

function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('instructions'); // Default active tab to instructions

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeInfo = await getRecipeInformation(recipeId);
        setRecipe(recipeInfo);
      } catch (error) {
        console.error('Error fetching recipe information:', error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <div>
        <button onClick={() => handleTabChange('instructions')}>Instructions</button>
        <button onClick={() => handleTabChange('ingredients')}>Ingredients</button>
      </div>
      {activeTab === 'instructions' && (
        <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
        
      )}
      {activeTab === 'ingredients' && (
        <ul>
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipePage;

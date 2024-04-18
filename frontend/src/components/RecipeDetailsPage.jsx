import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from '../api'; 
function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const fetchedRecipe = await getRecipeDetails(id);
        setRecipe(fetchedRecipe);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      
    </div>
  );
}

export default RecipeDetailsPage;
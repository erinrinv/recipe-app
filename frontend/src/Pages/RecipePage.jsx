// RecipePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeInformation } from '../api'; 
import { Button, Card, Container } from '@mui/material';
import ButtonAppBar from "../components/nav.jsx";
import '../components/recipepage.css'; 

function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('instructions');

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
    <div className="recipe-page-container"> 
      <ButtonAppBar />
      <Container className="recipe-container">
        <Card className="recipe-card">
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
        </Card>
       
        <Card className="tab-card">
          <div>
            <Button variant="contained" color="success" size="small" onClick={() => handleTabChange('instructions')}>Instructions</Button>
            <Button variant="contained" color="success" size="small" onClick={() => handleTabChange('ingredients')}>Ingredients</Button>
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
        </Card>
      </Container>
    </div>
  );
}

export default RecipePage;
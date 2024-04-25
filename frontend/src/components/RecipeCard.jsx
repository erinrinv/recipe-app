import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';


<<<<<<< HEAD
function RecipeCard({ recipe, isFavorite , onToggleFavorite }) {
  const id = recipe.id ? recipe.id : recipe.recipe_id;
  console.log({recipe});
  
=======
>>>>>>> 7214b0f722b384b3881a9767ae30a9907e4ec0e5

  return (
<<<<<<< HEAD
    <div className="recipe-card">
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
=======
    <div className="recipe-card" key={recipe.id}>
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/${recipe.id}`} style={{ textDecoration: 'none' }}>
>>>>>>> 7214b0f722b384b3881a9767ae30a9907e4ec0e5
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <InfoIcon />
            </IconButton>
          }
          title={recipe.title}
        />
      </Link>
      <CardHeader
<<<<<<< HEAD

=======
        
        // Other props
>>>>>>> 7214b0f722b384b3881a9767ae30a9907e4ec0e5
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => onToggleFavorite(id)}>
          <FavoriteIcon color={isFavorite ? 'secondary' : 'action'} />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}

export default RecipeCard;
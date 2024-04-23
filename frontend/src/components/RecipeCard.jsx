import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';



function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  return (
    <div className="recipe-card" key={recipe.id}>
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/${recipe.id}`} style={{ textDecoration: 'none' }}>
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
        
        // Other props
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => onToggleFavorite(recipe.id)}>
          <FavoriteIcon color={isFavorite ? 'secondary' : 'action'} />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}

export default RecipeCard;
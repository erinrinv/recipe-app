import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={recipe.title}
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
  );
}

export default RecipeCard;
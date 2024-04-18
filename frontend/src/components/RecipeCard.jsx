import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'; // Add this import
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RecipeCard = ({ recipe }) => {
  // Function to handle button click and navigate to the recipe page
  const handleRecipeClick = () => {
    // Navigate to the recipe page with the corresponding recipe ID
    window.location.href = `/${recipe.id}`;
  };

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
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
      </CardActions>
    </Card>
     
    </div>
  );
};

export default RecipeCard;
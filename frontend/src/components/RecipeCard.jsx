import React from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';

const RecipeCard = ({ recipe, onToggleFavorite }) => {
  const { id, title, image, isFavorite } = recipe;

  return (
    <div className="recipe-card" key={id}>
      <Card sx={{ maxWidth: 345 }}>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <InfoIcon />
              </IconButton>
            }
            title={title}
          />
        </Link>
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={title}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={() => onToggleFavorite(id)}>
            <FavoriteIcon color={isFavorite ? 'secondary' : 'action'} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecipeCard;
const db = require('../db');
require('dotenv').config();

// Add to favorites
router.post('/users/:userId/favorites', async (req, res) => {
  try {
    const { userId } = req.params;
    const { recipeId } = req.body;
    const favorite = await db.addFavorite(userId, recipeId);
    res.json(favorite);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add favorite', error: err });
  }
});

// Remove from favorites
router.delete('/users/:userId/favorites/:recipeId', async (req, res) => {
  try {
    const { userId, recipeId } = req.params;
    await db.removeFavorite(userId, recipeId);
    res.json({ message: 'Favorite removed' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove favorite', error: err });
  }
});
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/users/:userId/favorites', async (req, res) => {
  const { userId } = req.params;
  try {
    const selectQuery = `
      SELECT f.*, r.title, r.summary
      FROM favorites f
      JOIN recipes r ON f.recipe_id = r.recipe_id
      WHERE f.user_id = $1
    `;
    const result = await pool.query(selectQuery, [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving favorites:', err);
    res.status(500).json({ message: 'Failed to retrieve favs', error: err.message });
  }
});

router.post('/users/:userId/favorites', async (req, res) => {
  const { userId } = req.params;
  const { recipeId } = req.body;
  console.log(userId, recipeId);
  try {
    const insertQuery = 'INSERT INTO favorites (user_id, recipe_id) VALUES ($1, $2) RETURNING *';
    const favorite = await pool.query(insertQuery, [userId, recipeId]);
    res.status(201).json(favorite.rows[0]);
  } catch (err) {
    console.error('Error adding favorite:', err);
    res.status(500).json({ message: 'Failed to add favorite', error: err.message });
  }
});

router.delete('/users/:userId/favorites/:recipeId', async (req, res) => {
  const { userId, recipeId } = req.params;
  try {
    const deleteQuery = 'DELETE FROM favorites WHERE user_id = $1 AND recipe_id = $2 RETURNING *';
    const result = await pool.query(deleteQuery, [userId, recipeId]);
    if (result.rows.length > 0) {
      res.json({ message: 'Favorite removed' });
    } else {
      res.status(404).json({ message: 'Favorite not found' });
    }
  } catch (err) {
    console.error('Error removing favorite:', err);
    res.status(500).json({ message: 'Failed to remove favorite', error: err.message });
  }
});



module.exports = router;
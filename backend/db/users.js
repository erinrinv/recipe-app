const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');


router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id, username, email',
      [username, email, hashedPassword]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length > 0) {
      const isValid = await bcrypt.compare(password, user.rows[0].password);
      if (isValid) {
        res.status(200).json({ message: "Login successful", user: user.rows[0] });
      } else {
        res.status(401).json({ error: "Invalid Password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/favorites", async (req, res) => {
  const { userId } = req.params;
  try {
    const selectQuery = `
      SELECT f.*, r.title, r.description 
      FROM favorites f
      JOIN recipes r ON f.recipe_id = r.id
      WHERE f.user_id = $1
    `;
    const result = await pool.query(selectQuery, [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving favorites:', err);
    res.status(500).json({ message: 'Failed to retrieve favorit', error: err.message });
  }
});

module.exports = router;
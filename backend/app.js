const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const db = require('./db/index');
const RecipeAPI = require("./recipe-api");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

// Search API - Search Query
app.get("/api/recipes/search", async (req, res) => {
  const searchTerm = req.query.searchTerm;
  const page = parseInt(req.query.page);
  const results = await RecipeAPI.searchRecipes(searchTerm, page);

  return res.json(results);
});


// Summary API - Summary 
app.get("/api/recipes/:recipeId/summary", async (req, res) => {
  const recipeId = req.params.recipeId;
  const results = await RecipeAPI.getRecipeSummary(recipeId);
  return res.json(results);
});


// Detailed Recipe Information API - Detailed Recipe
app.get("/api/recipes/:recipeId/information", async (req, res) => {
  const recipeId = req.params.recipeId;
  console.log("Recipe ID:", recipeId);
  
  try {
    const results = await RecipeAPI.getRecipeInformation(recipeId);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch recipe information" });
  }
});



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const favoriteRouter = require('./routes/favorites');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/favorites', favoriteRouter);


module.exports = app;
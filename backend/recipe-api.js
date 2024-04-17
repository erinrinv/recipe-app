const axios = require('axios');

const apiKey = process.env.API_KEY;

const searchRecipes = async (searchTerm, page) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const url = "https://api.spoonacular.com/recipes/complexSearch";

  const queryParams = {
    apiKey,
    query: searchTerm,
    number: "10",
    offset: (page * 10).toString(),
  };

  try {
    const searchResponse = await axios.get(url, { params: queryParams });
    console.log(searchResponse);
    return searchResponse.data;
  } catch (error) {
    console.log(error);
  }
};


const getRecipeSummary = async (recipeId) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const url = `https://api.spoonacular.com/recipes/${recipeId}/summary`;
  const params = {
    apiKey: apiKey,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recipe summary");
  }
};


const getRecipeInformation = async (recipeId) => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false`;
  const params = {
    apiKey: apiKey,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recipe information");
  }
};

module.exports = {
  searchRecipes,
  getRecipeSummary,
  getRecipeInformation
};


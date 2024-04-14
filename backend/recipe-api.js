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
    return searchResponse.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  searchRecipes
};
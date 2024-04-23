export const searchRecipes = async (searchTerm, page) => {
  const baseUrl = new URL("http://localhost:3001/api/recipes/search");
  baseUrl.searchParams.append("searchTerm", searchTerm);
  baseUrl.searchParams.append("page", String(page));

  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    return data.results; // Assuming results is an array of recipes
  } catch (error) {
    throw new Error(`Failed to fetch recipes: ${error.message}`);
  }
};

export const getRecipeInformation = async (recipeId) => {
  const baseUrl = new URL(`http://localhost:3001/api/recipes/${recipeId}/information`);

  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data; // Assuming data contains detailed recipe information
  } catch (error) {
    throw new Error(`Failed to fetch recipe information: ${error.message}`);
  }
};

export const addFavorite = async (userId, recipeId) => {
  const url = `http://localhost:3001/api/users/${userId}/favorites`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipeId })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`Failed to add favorite: ${error.message}`);
  }
};


export const removeFavorite = async (userId, recipeId) => {
  const url = `http://localhost:3001/api/users/${userId}/favorites/${recipeId}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`Failed to remove favorite: ${error.message}`);
  }
};


// test code to get the summary for the modal

/* export const getRecipeSummary = async (recipeId) => {
  console.log("recipeID is:");
  console.log(recipeId);
  const url = new URL(`http://localhost:3001/api/recipes/${recipeId}/summary`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}; */
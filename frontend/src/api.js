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
    return data.results; // Assuming results is an array of recipes
  } catch (error) {
    throw new Error(`Failed to fetch recipes: ${error.message}`);
  }
};
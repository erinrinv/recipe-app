import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import RecipePage from "./Pages/RecipePage";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from './Pages/Login';
import Nav from "./components/nav";
import axios from 'axios';

function App() {
  const userId = 1;
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, [userId]);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`http://localhost:5173/api/favorites/users/${userId}/favorites`);
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  }; 

  const onToggleFavorite = async (recipeId) => {
    const isFavorited = favorites.some(fav => fav.recipe_id === recipeId);
    try {
      if (isFavorited) {
        await axios.delete(`http://localhost:5173/api/favorites/users/${userId}/favorites/${recipeId}`); 
        setFavorites(favorites.filter(fav => fav.recipe_id !== recipeId));
      } else {
        const response = await axios.post(`http://localhost:5173/api/favorites/users/${userId}/favorites`, { recipeId });
        setFavorites([response.data]);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home onToggleFavorite = {onToggleFavorite}/>}/>
        <Route path="/favorites" element={<Favorites favorites = {favorites} onToggleFavorite = {onToggleFavorite}/>}/>
        <Route path="/:recipeId" element={<RecipePage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
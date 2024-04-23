import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import FavoritesPage from "./Pages/Favorites";
import RecipePage from "./Pages/RecipePage";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from './Pages/Login';
import Nav from "./components/nav";

function App() {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
        <Route path="/:recipeId" element={<RecipePage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
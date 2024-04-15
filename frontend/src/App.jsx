import React, { useState, useRef } from "react";
import { searchRecipes } from './api'; 
import RecipeCard from "./components/RecipeCard";
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Recipe from "./Pages/Recipe";

function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/recipe" element={<Recipe/>}/>

      </Routes>


    </Router>
  );
}

export default App;
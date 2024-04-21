import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import RecipePage from "./Pages/RecipePage";
import RegistrationPage from "./Pages/RegistrationPage";
import Login from "./Pages/Login";
import Nav from "./components/nav";

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(1); //
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/:recipeId" element={<RecipePage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
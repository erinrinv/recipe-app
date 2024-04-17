import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Favorites from './components/Favorites';
import RecipeCard from './components/RecipeCard';

function App() {
  const [userId, setUserId] = useState(null); // works upon successful login

  // Simulate user login for demonstration
  useEffect(() => {
    // Simulate fetching user ID on login
    setUserId(1);
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/favorites">Favorites</Link>
        </nav>
        <Switch>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/favorites">
            {userId ? <Favorites userId={userId} /> : <p>Please login to view favorites.</p>}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      // This function should actually call the backend or an API service
      console.log("Searching for:", searchTerm);
      // Simulate an API response
      setRecipes([{ id: 1, title: "Recipe 1" }, { id: 2, title: "Recipe 2" }]);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for recipes..." />
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
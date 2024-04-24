import React, { useState, useRef } from "react";
import { searchRecipes } from "../api";
import RecipeCard from "../components/RecipeCard";
import Button from '@mui/material/Button';
import { Container, Grid } from "@mui/material";
import "../components/home.css"; 
import ButtonAppBar from "../components/nav.jsx";



function Home(props) {
  const {onToggleFavorite} = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const pageNumber = useRef(1); 

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchedRecipes = await searchRecipes(searchTerm, 1);
      console.log(fetchedRecipes);
      setRecipes(fetchedRecipes);
      pageNumber.current = 1;
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewMoreClick = async () => { 
    const nextPage = pageNumber.current + 1;
    try {
      const nextRecipes = await searchRecipes(searchTerm, nextPage );
      setRecipes(prevRecipes => [...prevRecipes, ...nextRecipes]); 
      pageNumber.current = nextPage; 
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="home-container">
       <ButtonAppBar /> 
      <form onSubmit={handleSearchSubmit} style={{ marginBottom: "20px" }}>
        <input type="text" required placeholder="Search Term" value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)} />
        <Button type="submit" variant="contained" size="small">Submit</Button>
      </form>

      <Container>
        <Grid container spacing ={3}  justifyContent="center">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onToggleFavorite={onToggleFavorite}/>
        ))}
        </Grid>
      </Container>

      <Button className="view-more-button" onClick={handleViewMoreClick} variant="contained" size="small">View More</Button>
    </div>
  );
}

export default Home;
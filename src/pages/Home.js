// Home.js
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import RecommendedRecipe from '../components/RecommendedRecipe';
import MoreRecipes from '../components/MoreRecipes';
  import BestRecipes from '../components/BestRecipes';
import { supabase } from '../util/createClient.js';


const Home = () => {
  // eslint-disable-next-line
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      const { data: recipes, error } = await supabase.from('recepti').select('*');
      if (error) {
        throw error;
      }
      setRecipes(recipes);
      console.log(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
    }
  }

  return (
    <div>
      <Hero />
      <RecommendedRecipe />
      <BestRecipes />
      <MoreRecipes />
    </div>
  );
};

export default Home;

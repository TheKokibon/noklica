import React, { useState, useEffect } from 'react';
import SearchByCategory from './SearchByCategory';
import SearchOfRecipes from './SearchOfRecipes';
import RecipeCard from './RecipeCard';
import { supabase } from '../util/createClient';
import Loading from './Loading';
import { useLocation } from 'react-router-dom';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(category || 'Sve');

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabase
        .from('recepti')
        .select('*');
      if (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      } else {
        console.log('Fetched recipes:', data); // Debug fetched data
        setRecipes(data);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    try {
      const { error } = await supabase.from('recepti').delete().eq('id', id);
      if (error) {
        throw error;
      }
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesQuery = recipe.naziv.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Sve' || recipe.kategorija === activeCategory;
    return matchesQuery && matchesCategory;
  });


  if (loading) {
    return <Loading/>;
  }

  return (
    <div>
      <h1 className='text-center text-[#cab88d] text-2xl font-bold p-2'>Recepti</h1>
      <div className='flex flex-col md:flex-row justify-center p-2 m-2 border-b border-b-[#8d8663]'>
        <div className='flex flex-col justify-center text-center md:border-r border-r-[#8d8663]'>
          <h1 className='text-[#cab88d] font-semibold'>Pretraga po imenu</h1>
          <SearchOfRecipes onSearchChange={setSearchQuery} />
        </div>
        <div className='flex flex-col items-center md:justify-center text-center'>
          <h1 className='text-[#cab88d] font-semibold'>Pretraga po kategoriji</h1>
          <SearchByCategory activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>
      </div>

      <div className='flex flex-wrap justify-center p-5 m-2'>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} id={recipe.id} slika={recipe.slika} naziv={recipe.naziv} onDelete={deleteRecipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;

import React, { useState } from 'react';

import RecipesPage from '../components/RecipesPage';
import AddRecipeForm from '../components/AddRecipeForm';

const ReceptiAdmin = () => {
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);

  const toggleAddRecipeForm = () => {
    console.log('Button clicked');
    setShowAddRecipeForm(!showAddRecipeForm);
  };

  console.log('showAddRecipeForm:', showAddRecipeForm);

  return (
    <div>
      <RecipesPage />
      
      <div className='flex justify-center'>
        <button onClick={toggleAddRecipeForm} className='w-96 h-96 p-2 m-2 rounded-xl shadow-lg bg-[#cab88d] text-white text-xl font-bold hover:bg-[#8d8663]'>
          Dodaj recept
        </button>
      </div>

      {showAddRecipeForm && <AddRecipeForm />} {/* Ensure this line is correct */}
    </div>
  );
};

export default ReceptiAdmin;

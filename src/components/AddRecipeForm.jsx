import React, { useState } from 'react';
import { supabase } from '../util/createClient.js';

const AddRecipeForm = () => {
  const [recipeData, setRecipeData] = useState({
    naziv: '',
    sastojci: '',
    prica: '',
    slika: '',
    kategorija: '',
    tezina: '',
    cena: '',
    vreme: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('recepti').insert([recipeData]);
   
      if (error) {
        throw error;
      }

      alert('Uspešno dodavanje recepta:', data);
      window.location.reload();
      // Clear form inputs after successful submission
      setRecipeData({
        naziv: '',
        sastojci: '',
        prica: '',
        slika: '',
        kategorija: '',
        tezina: '',
        cena: '',
        vreme: '',
      });
    } catch (error) {
      console.error('Error inserting recipe:', error.message);
    }
  };



  return (
    <form onSubmit={handleSubmit} className='bg-[white] w-5/6 md:w-1/2 flex flex-col justify-center shadow-lg shadow-black items-center p-6 m-5  mx-auto  rounded-xl'>
        <h1 className='text-center text-2xl p-2 m-2 font-bold text-black'>Forma za recept</h1>
        <input type="text" name="naziv" placeholder="Naziv recepta" value={recipeData.naziv} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
      
        <textarea name="sastojci" placeholder="Sastojci" value={recipeData.sastojci} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
      
        <textarea name="prica" placeholder="Priča recepta" value={recipeData.prica} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
      
        <input type="text" name="slika" placeholder='Url slike' value={recipeData.slika} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
    
        <input type="text" name="kategorija" placeholder= "Kategorija(slano ili slatko)" value={recipeData.kategorija} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
     
        <input type="text" name="tezina" placeholder = "Težina(lako,srednje, teško)" value={recipeData.tezina} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
 
        <input type="number" name="cena" placeholder="Cena(U rsd)" value={recipeData.cena} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
      
        <input type="number" name="vreme" placeholder="Vreme(u minutima)" value={recipeData.vreme} onChange={handleChange} className='p-2 m-2 rounded-lg text-black outline outline-[black] w-1/2'/>
  
        <button type="submit" className='bg-black text-[white] w-fit rounded-md p-2 m-4 mt-2 font-semibold hover:bg-[#B6B6B4]'>Dodaj</button>
   
    </form>
  );
};

export default AddRecipeForm;

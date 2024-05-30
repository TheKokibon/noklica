import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, slika, naziv, onDelete }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/recepti/admin";

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className='flex flex-col bg-[white]  w-96 h-96 p-1 m-2 rounded-xl shadow-lg shadow-black overflow-hidden'>
    <Link to={`/recepti/${naziv}`}>
      <div className="group relative">
        <img src={slika} alt={naziv} className='w-full h-64 p-1 object-cover rounded-t-xl' />
        <div className="absolute inset-0 bg-[black] opacity-0 group-hover:opacity-80 flex justify-center items-center rounded-t-xl transition-opacity">
          <div className="text-white text-xl font-bold">Vidi recept</div>
        </div>
      </div>
    </Link>

    <div className='flex justify-center flex-col items-center h-full p-2'>
      <h1 className='text-xl font-bold text-center text-black'>{naziv}</h1>
    </div>
      {isAdminRoute && (
        <button onClick={handleDelete} className='bg-black text-[white] w-fit rounded-md p-2 m-4 mt-2 self-center font-semibold hover:bg-[#B6B6B4]'>
          Obriši
        </button>
      )}
    </div>
  );
}

export default RecipeCard;

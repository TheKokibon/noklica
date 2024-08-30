import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const RecipeCard = ({ id, slika, naziv, onDelete, userId }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname === "/recepti/admin";

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const incrementViewCount = async () => {
      try {
        await fetch('http://localhost:5000/api/recipe/view', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ recipeId: id, userId }),
        });
        setViewCount(viewCount + 1);
      } catch (error) {
        console.error('Error updating view count:', error.message);
      }
    };

    incrementViewCount();
  }, [id, userId]);

  const handleLike = async () => {
    if (liked) return;

    try {
      const response = await fetch('http://localhost:5000/api/recipe/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, recipeId: id }),
      });

      if (response.ok) {
        setLiked(true);
        setLikeCount(likeCount + 1);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Error liking recipe:', error.message);
    }
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className='flex flex-col bg-[white] w-96 h-1/2 p-1 m-2 rounded-xl shadow-lg shadow-black overflow-hidden'>
      <Link to={`/recepti/${encodeURIComponent(naziv)}`}>
        <div className="group relative">
          <img src={slika} alt={naziv} className='w-full h-64 p-1 object-cover rounded-t-xl' />
          <div className="absolute inset-0 bg-[black] opacity-0 group-hover:opacity-80 flex justify-center items-center rounded-t-xl transition-opacity">
            <div className="text-white text-xl font-bold">Vidi recept</div>
          </div>
        </div>
      </Link>

      <div className='flex justify-center flex-col items-center h-full p-2'>
        <h1 className='text-xl font-bold text-center text-black'>{naziv}</h1>
        <p className='text-center text-black'>Views: {viewCount}</p>
        <p className='text-center text-black'>Likes: {likeCount}</p>
        <button onClick={handleLike} disabled={liked} className={`bg-red-500 text-white w-fit rounded-md p-2 mt-2 ${liked ? 'opacity-50' : ''}`}>
          {liked ? 'Liked' : 'Heart'}
        </button>
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

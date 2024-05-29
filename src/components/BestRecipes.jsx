import React, { useState } from 'react';
import kulebljaka from '../assets/kulebljaka.jpg';
import kitnikes from '../assets/kitnikes.jpg';
import psacvarcima from '../assets/psacvaricma.jpg';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  { src: kitnikes, title: "Kitnikes" },
  { src: psacvarcima, title: 'Pogačice sa čvarcima' },
  { src: kulebljaka, title: 'Kulebljaka' },

];

const BestRecipes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
        <h1 className='text-[#cab88d] text-center p-4 m-4 text-2xl font-bold  '>Najomiljeniji recepti</h1>
<div className="relative w-full max-w-4xl mx-auto p-6 m-10">
      <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-500">
                <h2 className="text-2xl font-bold text-white opacity-0 hover:opacity-100 transition-opacity duration-500">{image.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevClick} className="px-4  py-2 text-white bg-[#cab88d] rounded-lg hover:bg-[#8d8663]">
          <ArrowLeft />
        </button>
        <button onClick={handleNextClick} className="px-4 py-2 text-white bg-[#cab88d] rounded-lg hover:bg-[#8d8663]">
          <ArrowRight />
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default BestRecipes;

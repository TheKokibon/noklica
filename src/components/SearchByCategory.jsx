import React from 'react';
import { Dessert, Beef, Check } from 'lucide-react';

const SearchByCategory = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { name: 'Sve', icon: null },
    { name: 'slatko', icon: <Dessert className=" w-10 h-10" /> },
    { name: 'slano', icon: <Beef className='w-10 h-10' /> }
  ];

  return (
    <div className="flex flex-col md:flex-row p-2 gap-4 md:space-x-4 m-4">
      {categories.map((category) => (
        <span
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`flex  items-center space-x-1 w-30 h-16 p-4 rounded-lg cursor-pointer 
            ${activeCategory === category.name ? 'bg-[#2C3539]' : 'bg-[black]'} text-white hover:bg-[#2C3539]`}
        >
          {category.icon}
          <span className='mx-auto'>{category.name}</span>
          {activeCategory === category.name && <Check className="ml-2 w-6 h-6" />}
        </span>
      ))}
    </div>
  );
};

export default SearchByCategory;

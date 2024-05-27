import React from 'react';
import { Dessert, Beef, Check } from 'lucide-react';

const SearchByCategory = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { name: 'Sve', icon: null },
    { name: 'slatko', icon: <Dessert className="w-10 h-10" /> },
    { name: 'slano', icon: <Beef className='w-10 h-10' /> }
  ];

  return (
    <div className="flex space-x-4 m-4">
      {categories.map((category) => (
        <span
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`flex items-center space-x-1 w-30 h-16 p-4 rounded-lg cursor-pointer 
            ${activeCategory === category.name ? 'bg-[#8d8663]' : 'bg-[#cab88d]'} text-white hover:bg-[#8d8663]`}
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

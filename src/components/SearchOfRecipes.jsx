import React from 'react';
import { Search } from 'lucide-react';

const SearchOfRecipes = ({ onSearchChange }) => {
  return (
    <div className="flex justify-center items-center p-2">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Pretražite recepte..."
          className="w-full px-4 py-2 pl-10 border text-[#cab88d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8d8663]"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchOfRecipes;

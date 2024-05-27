import React from "react";
import Ajmokac from "../assets/Ajmokac.jpg";
import belestangle from "../assets/belestangle.jpg";
import { Link } from "react-router-dom";



const RecommendedRecipe = () => {
  return (
    <div className="flex flex-col justify-center mt-2">
      
      <div className="text-[#cab88d] w-full">
        <h1 className="text-center text-2xl font-bold p-2">Nešto slano?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
          <img src={Ajmokac} alt="Beef Wellington" className="w-1/2 md:w-1/3 h-auto object-cover p-4 rounded-full overflow-hidden" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-xl font-semibold">Ajmokac</h2>
            <Link to={{ pathname: "/recepti", search: "?category=slano" }}>
  <button className="bg-[#cab88d] text-white w-fit rounded-md p-2 mt-2 font-semibold hover:bg-[#8d8663]">Vidi recept</button>
</Link>

          </div>
        </div>
      </div>
      
      <div className="text-white bg-[#cab88d] mt-8">
        <h1 className="text-center text-2xl font-bold p-2">Nešto slatko?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-xl font-semibold">Bele štanglice</h2>
            <Link to={{ pathname: "/recepti", search: "?category=slatko" }}>
  <button className="bg-[white] text-[#cab88d] w-fit rounded-md p-2 mt-2 font-semibold hover:bg-[#fff9d8]">Vidi recept</button>
</Link>

          </div>
          <img src={belestangle} alt="Baklava" className="w-1/2 md:w-1/3 h-auto object-cover p-4 rounded-full overflow-hidden" />
        </div>
      </div>

    </div>
  );
};

export default RecommendedRecipe;

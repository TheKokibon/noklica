import React from "react";
import Ajmokac from "../assets/Ajmokac.jpg";
import belestangle from "../assets/belestangle.jpg";
import { Link } from "react-router-dom";

const RecommendedRecipe = () => {
  return (
    <div className="flex flex-col justify-center mt-2">
      <div className="bg-[white] p-6">
        <h1 className="text-2xl text-center text-[#cab88d] p-2 m-4 ">
          Nešto slano?
        </h1>

        <div className="flex flex-col items-center md:flex-row justify-center gap-10">
          <img
            src={Ajmokac}
            alt="Ajmokac"
            className=" w-full md:w-1/3 rounded-xl h-144 object-contain"
          />

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[#cab88d] text-lg font-bold">Ajmokac</h2>
            <Link to={{ pathname: "/recepti", search: "?category=slano" }}>
              <button className="bg-[#cab88d] text-white w-fit rounded-md p-2 mt-2 font-semibold hover:bg-[#8d8663] ">
                Vidi recepte
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#cab88d] p-6">
        <h1 className="text-2xl text-center text-[white] p-2 m-4 ">
          Nešto slatko?
        </h1>

        <div className="flex flex-col items-center md:flex-row justify-center gap-10">
          <img
            src={belestangle}
            alt="Bele štanglice"
            className=" w-full md:w-1/3 rounded-xl h-144 object-contain "
          />

          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[white] text-lg font-bold">Bele štanglice</h2>
            <Link to={{ pathname: "/recepti", search: "?category=slatko" }}>
              <button className="bg-[white] text-[#cab88d] w-fit rounded-md p-2 mt-2 font-semibold hover:bg-[#fff9d8]">
                Vidi recepte
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedRecipe;

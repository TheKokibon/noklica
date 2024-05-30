import React from "react";
import { Link } from "react-router-dom";
import ImageCollage from "../components/ImageCollage.jsx";

const Hero = () => {
  return (
    <div className="flex flex-col bg-[white] text-black h-1/2">
      <div className="flex flex-col items-center justify-center text-center lg:flex-row ">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <h1 className=" text-6xl lg:text-7xl md:text-9xl text-center  font-bold m-2 p-4">
            Noklica
          </h1>
          <p className="text-left   w-full md:w-1/2 p-4">
            Dođi i istraži svet tradicionalnih recepata sa mnom. Verujem da ćeš
            pronaći nešto što će te inspirisati i probuditi tvoju kulinarsku
            kreativnost. Klikni na dugme ispod i kreni u avanturu sa mnom!
          </p>

          <Link to="/o-meni">
            <button className="bg-black text-[white] w-fit rounded-md p-2 mt-2 mb-4 font-semibold hover:bg-[#71697A]">
              Saznaj više
            </button>
          </Link>
        </div>

        <ImageCollage />
      </div>
    </div>
  );
};

export default Hero;

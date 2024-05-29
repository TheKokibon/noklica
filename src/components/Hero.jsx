import React from 'react';
import kuvarica from '../assets/Kuvarica.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col bg-[#cab88d] h-min">
      <h1 className="text-2xl text-center text-white font-bold m-2 p-2">
        Moja kuhinja
      </h1>

      <div className="flex flex-col items-center text-center md:flex-row justify-center">
        <div className="flex flex-col items-center justify-center md:w-1/2">
        <p className='text-white  md:text-center  w-full md:w-1/2 p-4'>
  Dođi i istraži svet tradicionalnih recepata sa mnom.
  Verujem da ćeš pronaći nešto što će te inspirisati i probuditi tvoju kulinarsku kreativnost.
  Klikni na dugme ispod i kreni u avanturu sa mnom!
</p>

          <Link to="/o-meni">
            <button className="bg-white text-[#cab88d] w-fit rounded-md p-2 mt-2 mb-4 font-semibold hover:bg-[#fff9d8]">
              Saznaj više
            </button>
          </Link>
        </div>

        <img src={kuvarica} alt="Kuvarica" className="w-56 h-min" />
      </div>
    </div>
  );
};

export default Hero;

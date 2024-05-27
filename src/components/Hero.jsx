import React from 'react';
import kuvarica from "../assets/Kuvarica.png";
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='flex flex-row flex-wrap  justify-center h-fit bg-[#cab88d] gap-10 md:gap-auto p-10 mx-auto'>
      <div className='flex flex-col justify-center items-center text-center text-[white]'>
        <h1 className='text-2xl font-bold mt-5 pb-3'>Moja kuhinja</h1>
        <p className='p-1 text-wrap'>Otkrijte tajne tradicionalnih recepata i uživajte u domaćim specijalitetima. 
        </p>
        <p className='mb-4'>Kliknite ispod kako biste saznali više o našem kulinarskom putovanju!</p>
        <Link to='/o-meni'>
        <button className='bg-white text-[#cab88d] w-fit rounded-md p-2 mt-2 font-semibold hover:bg-[#fff9d8]'>Saznaj više</button>
        </Link>
      </div>
      <img src={kuvarica} alt="kuvarica" className='w-44 h-auto'/>
    </div>
  );
}

export default Hero;

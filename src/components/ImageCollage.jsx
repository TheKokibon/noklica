import React from 'react';
import kitnikes from "../assets/kitnikes.jpg"; // replace with your actual image path
import psacvaricma from "../assets/psacvaricma.jpg"; // replace with your actual image path

const ImageCollage = () => {
  return (
    <div className='relative flex items-center justify-center w-full md:w-1/2 m-1 p-10'>
      <div className='relative top-14 left-10'>
      <img src={psacvaricma} alt="psacvaricma" className='object-cover rounded-full  size-32 lg:size-56 shadow-lg shadow-black' />

      </div>
      <div className=''>
        <img src={kitnikes} alt="kitnikes" className='object-cover rounded-full  size-32 lg:size-56 shadow-lg  shadow-black' />

      </div>
    </div>
  );
}

export default ImageCollage;

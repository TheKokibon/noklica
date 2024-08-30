import React from 'react';
import logo from '../assets/Logo.png';
import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className='flex bottom-0 flex-wrap md:flex-col w-full h-min bg-white text-[black] p-6 border-t border-t-[#B6B6B4]'>
        <div className='flex justify-between gap-10 md:gap-44 items-center max-w-screen-xl mx-auto'>
         
          <div className='flex flex-col items-center w-1/3'>
            <img src={logo} alt="logo" className='w-16 h-16 md:w-24 md:h-24' />
            <h2 className='mt-2 font-bold text-md md:text-lg'>Noklica</h2>
          </div>

        
          <div className='flex flex-col items-center w-1/3'>
            <h2 className='mb-1 font-bold text-md md:text-lg text-center'>Stranice</h2>
            <ul className='flex flex-col md:flex'>
              <li className='px-2 md:px-4  hover:text-[#B6B6B4]'>
                <Link to="/" onClick={scrollToTop}>Početna</Link>
              </li>
              <li className='px-2 md:px-4  hover:text-[#B6B6B4]'>
                <Link to="/recepti" onClick={scrollToTop}>Recepti</Link>
              </li>
              <li className='px-2 md:px-4  hover:text-[#B6B6B4]'>
                <Link to="/o-meni" onClick={scrollToTop}>O meni</Link>
              </li>
              <li className='px-2 md:px-4  hover:text-[#B6B6B4]'>
                <Link to="/kontakt" onClick={scrollToTop}>Kontakt</Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col items-center md:w-1/3'>
            <div className='flex space-x-4'>
              <Instagram size={20} className='md:size-14 hover:text-[#B6B6B4] ' />
              <Facebook size={20} className='md:size-14 hover:text-[#B6B6B4]  ' />
            </div>
          </div>
        </div>

        
      </div>
      <h2 className='text-center md:text-center mt-4 text-md md:text-lg text-[black]'>&copy; 2024 TheKokibon. All rights reserved.</h2>
    </div>
  );
}

export default Footer;

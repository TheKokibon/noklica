import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { debounce } from 'lodash';
import logo from '../assets/Logo.png';

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleResize = debounce(() => {
            if (window.innerWidth >= 768 && nav) {
                setNav(false);
            }
        }, 100); // 100ms debounce delay

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            handleResize.cancel(); // Cancel any pending debounced calls
        };
    }, [nav]);

    return (
        <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-[black] bg-[#FFFFFF] border-b border-b-[#B6B6B4]'>
           <Link to="/">
            <div className='flex flex-row justify-center items-center'>
            <img src={logo} alt="logo" className='h-12 w-12 ' />
           <h1 className='hover:text-[#B6B6B4]'>Noklica</h1>
            </div>
          
           </Link> 
            <ul className='hidden md:flex'>
                <li className='px-4 hover:text-[#B6B6B4]'>
                    <Link to="/">Početna</Link>
                </li>
                <li className='px-4 hover:text-[#B6B6B4]'>
                    <Link to="/recepti">Recepti</Link>
                </li>
                <li className='px-4 hover:text-[#B6B6B4]'>
                    <Link to="/o-meni">O meni</Link>
                </li>
                <li className='px-4 hover:text-[#B6B6B4]'>
                    <Link to="/kontakt">Kontakt</Link>
                </li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <X size={30} /> : <Menu size={30} />}
            </div>

            <div className={`z-20 fixed left-0 top-0 w-1/2 h-full border-r border-r-[black] bg-[#FAF6F0] ease-in-out duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
               <Link to="/">
               <div className='flex flex-row justify-left m-5 items-center'>
            <img src={logo} alt="logo" className='h-12 w-12 ' />
           <h1 className='hover:text-[#B6B6B4]'>Noklica</h1>
            </div>
               </Link> 
                <ul className='p-4 '>
                    <li className='p-4 border-b border-b-[black] hover:text-[#B6B6B4]'>
                        <Link to="/" onClick={handleNav}>Početna</Link>
                    </li>
                    <li className='p-4 border-b border-b-[black] hover:text-[#B6B6B4]'>
                        <Link to="/recepti" onClick={handleNav}>Recepti</Link>
                    </li>
                    <li className='p-4 border-b border-b-[black] hover:text-[#B6B6B4]'>
                        <Link to="/o-meni" onClick={handleNav}>O meni</Link>
                    </li>
                    <li className='p-4 border-b border-b-[black] hover:text-[#B6B6B4]'>
                        <Link to="/kontakt" onClick={handleNav}>Kontakt</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

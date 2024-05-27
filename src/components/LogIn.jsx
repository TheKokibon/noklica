import React, { useState } from 'react';
import { supabase } from '../util/createClient'; // Import your Supabase client
import Logo from "../assets/Logo.png";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
        // eslint-disable-next-line
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) {
        alert('Error logging in: ' + error.message);
      } else {
        alert('Login uspešan');
        navigate('/recepti/admin');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

    console.log(supabase.auth.getSession());
    
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center p-4 m-4 w-full max-w-md bg-[#cab88d] rounded-xl'>
        <img src={Logo} alt="" className='w-1/2 h-fit'/>
        <h1 className='text-center text-2xl font-bold mb-4'>Log in stranica</h1>
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 mb-4 border rounded' />
        <input type="password" placeholder='Šifra' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 mb-4 border rounded' />
        <button onClick={handleLogin} className="bg-white text-[#cab88d]  rounded-md p-2 mt-2 font-semibold hover:bg-[#fffcec]">
          Prijava
        </button>
      </div>
    </div>
  );
};

export default LogIn;

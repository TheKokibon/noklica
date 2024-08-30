import React, { useState } from 'react';
import { supabase } from '../util/createClient'; // Import your Supabase client
import Logo from "../assets/Logo.png";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Supabase Auth Login
  const handleLoginWithAuth = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert('Error logging in with Supabase Auth: ' + error.message);
      } else {
        alert('Dobrodosao admine');
        navigate('/recepti/admin');
      }
    } catch (error) {
      console.error('Error logging in with Supabase auth:', error.message);
    }
  };

  // Custom Login by Checking Users Table
  const handleCustomLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/custom-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Uspesan login');
        navigate('/recepti');
      } else {
        alert(data.message || 'Error logging in with Custom Auth');
      }
    } catch (error) {
      console.error('Error logging in with custom auth:', error.message);
    }
  };

  const handleRegistration = () => {
    navigate("/registration");
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center p-4 m-4 w-full max-w-md shadow-lg border-2 border-black rounded-xl'>
        <img src={Logo} alt="" className='w-1/2 h-fit'/>
        <h1 className='text-center text-2xl font-bold mb-4'>Log in stranica</h1>
        <input
          type="text"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type="password"
          placeholder='Šifra'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-4 border rounded'
        />
        <div className='flex flex-col md:flex-row gap-5'>
          <button onClick={handleRegistration} className="bg-black text-[white] rounded-md p-2 mt-2 font-semibold hover:bg-[#B6B6B4]">
            Registruj se 
          </button>
          <button onClick={handleLoginWithAuth} className="bg-black text-[white] rounded-md p-2 mt-2 font-semibold hover:bg-[#B6B6B4]">
            Prijava Admina
          </button>
          <button onClick={handleCustomLogin} className="bg-black text-[white] rounded-md p-2 mt-2 font-semibold hover:bg-[#B6B6B4]">
            Prijava 
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

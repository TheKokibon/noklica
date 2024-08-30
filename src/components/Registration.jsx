import React, { useState } from 'react';
import Logo from "../assets/Logo.png";

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, fullName, age }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setEmail('');
        setPassword('');
        setFullName('');
        setAge('');
      }
    } catch (error) {
      setMessage('Error, please try again.');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center p-4 m-4 w-full max-w-md shadow-lg border-2 border-black rounded-xl'>
        <img src={Logo} alt="" className='w-1/2 h-fit'/>
        <h1 className='text-center text-2xl font-bold mb-4'>Registruj se</h1>

        <form onSubmit={handleRegister} className="w-full flex flex-col">
          <label className='self-start mb-2'>Email</label>
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 mb-4 border rounded'
            required
          />

          <label className='self-start mb-2'>Password</label>
          <input
            type="password"
            placeholder='Šifra'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 mb-4 border rounded'
            required
          />

          <label className='self-start mb-2'>Ime i prezime</label>
          <input
            type="text"
            placeholder='Ime i prezime'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='w-full p-2 mb-4 border rounded'
            required
          />

          <label className='self-start mb-2'>Broj godina</label>
          <input
            type="number"
            placeholder='Broj godina: xx'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className='w-full p-2 mb-4 border rounded'
            required
          />

          <button type="submit" className="bg-black text-[white] rounded-md p-2 mt-2 font-semibold hover:bg-[#B6B6B4]">
            Registruj me
          </button>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Registration;

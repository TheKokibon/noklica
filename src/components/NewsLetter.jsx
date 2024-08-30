import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
      setEmail('');
    } catch (error) {
      setMessage('Error, please try again.');
    }
  };

  return (
    <div className='flex flex-col text-center self-center text-[black] h-fit shadow-lg shadow-slate-950 bg-[white] rounded-md w-full lg:w-1/2 m-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Newsletter</h1>
      <p>Subscribe to our newsletter and be notified whenever we post a new recipe</p>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-center m-2 p-2 items-center space-y-2 sm:space-y-0 sm:space-x-2'>
        <label htmlFor="email" className='text-left w-full sm:w-auto'>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='rounded-md text-[black] text-sm p-2 border-2 border-black w-full sm:w-auto flex-grow'
          placeholder='email@gmail.com'
        />
        <button type="submit" className="text-[white] bg-[black] p-2 rounded-lg hover:bg-[#413839] font-semibold w-full sm:w-auto">
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-[black]">{message}</p>}
    </div>
  );
}

export default NewsLetter;

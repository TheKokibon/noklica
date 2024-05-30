import { Mail, Instagram, Facebook } from 'lucide-react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8lefq3w', 'template_sbzf6lb', form.current, {
        publicKey: 'OsAEO_9Djg4vFdjK4',
      })
      .then(
        () => {
          alert('Email poslat!');
        },
        (error) => {
          alert('Neuspešno slanje email-a', error.text);
        },
      );
  };

  return (
    <div className='flex flex-col md:flex-row justify-center md:gap-48 mt-5 p-4'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col md:flex-col border-b md:border-b-0 md:border-r md:pr-10 border-r-[#B6B6B4] pb-5 md:pb-0'>
        <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-1 p-2'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='text-left'>Ime</label>
            <input
              type="text"
              name="user_name"
              required
              className='rounded-md text-[black] text-sm p-1 border-2 border-black  '
              placeholder='Marko'
            />
          </div>
        </div>
        <div className='flex flex-col p-2'>
          <label htmlFor="email" className='text-left'>Email</label>
          <input
            type="email"
            name="user_email"
            required
            className='rounded-md text-[black] text-sm p-1 border-2 border-black'
            placeholder='email@gmail.com'
          />
        </div>
        <div className='flex flex-col p-2'>
          <label htmlFor="message" className='text-left'>Poruka</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            required
            className='rounded-md text-[black] text-sm p-1 border-2 border-black outline-none '
            placeholder='Vaša poruka'
          ></textarea>
        </div>
        <button type="submit" className="bg-black text-[white] w-fit rounded-md p-2 mt-2 font-semibold hover:bg-[#B6B6B4] self-center md:self-center">
          <input type="submit" value="Pošalji" />
        </button>
      </form>
      <div className='flex flex-col my-auto pt-5 md:pt-0'>
        <div className='flex flex-row p-1 items-center self-center'>
          <div className='flex flex-row'>
            <Mail /> : noklicarecepti@gmail.com
          </div>
        </div>
        <div>
          <h2 className='text-lg font-semibold'>Društvene mreže</h2>
          <div className='flex flex-row p-1 m-2 justify-center'>
            <Instagram size={20} className='hover:text-[#B6B6B4]' />
            <Facebook size={20} className='hover:text-[#B6B6B4]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

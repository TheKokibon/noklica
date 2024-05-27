import React from 'react'
import ContactFrom from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='bg-[#cab88d] text-[white] text-center flex flex-col p-4'>
        <h1 className='text-2xl font-bold p-2'>Kontakt</h1>
        <p>Mozete nam se javiti putem email-a, društvenih mreža ili popunjavanjem forme.</p>
       
        <ContactFrom/>
    </div>
  )
}

export default Contact
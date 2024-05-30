import React from 'react'
import logo from "../assets/Logo.png"
const Loading = () => {
  return (
    <div className='flex flex-col justify-center mx-auto'>
        <img src={logo} alt="logo" className='w-1/5 self-center'/>
        <h1 className='text-3xl text-center text-[black] p-4 m-2 text-bold'>Učitavam se </h1>
    </div>
  )
}

export default Loading
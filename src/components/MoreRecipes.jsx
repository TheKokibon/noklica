
import React from 'react'
import { Link } from 'react-router-dom';


const MoreRecipes = () => {
  return (
    <div className='flex flex-col justify-center m-2 text-center items-center'>
        <p className='text-[#cab88d] text-xl p-4'>Ako vas zanima još ovakvih divnih recepata kliknite na dugme ispod</p>
        <Link to="/recepti">
        <button className='text-[white] bg-[#cab88d] p-2 w-fit rounded-lg hover:bg-[#8d8663] font-semibold'>Još recepata</button>

        </Link>
    </div>
  )
}

export default MoreRecipes
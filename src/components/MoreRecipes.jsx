
import React from 'react'
import { Link } from 'react-router-dom';


const MoreRecipes = () => {
  return (
    <div className='flex flex-col justify-center text-black m-2 text-center items-center'>
        <p className=' text-xl p-4'>Ako vas zanima još ovakvih divnih recepata kliknite na dugme ispod</p>
        <Link to="/recepti">
        <button className='text-[white] bg-[black] p-2 mb-10 w-fit rounded-lg hover:bg-[#413839] font-semibold'>Još recepata</button>

        </Link>
    </div>
  )
}

export default MoreRecipes
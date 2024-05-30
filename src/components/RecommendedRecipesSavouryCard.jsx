import React from 'react'
import ajmokac from "../assets/Ajmokac.jpg";
import psacvarcima from "../assets/psacvaricma.jpg";
import teleca from "../assets/telecacorba.jpg";
import { Link } from 'react-router-dom';

const RecommendedRecipesSavouryCard = () => {
  return (
    <div className='flex flex-col text-center self-center text-[black]  h-fit  shadow-lg shadow-slate-950  bg-[white] rounded-md w-full lg:w-1/2  m-4 p-4'>
        <h1 className='text-2xl font-bold mb-4'>Nešto slano?</h1>
        <div className='flex flex-row flex-wrap justify-evenly gap-2'>
            <img src={ajmokac} alt="ajmokac" className='w-16 h-16 md:w-24 md:h-24 object-cover  border-2 border-[black] rounded-full'/>
            <img src={psacvarcima} alt="psacvarcima" className='w-16 h-16 md:w-24 md:h-24 object-cover  border-2 border-[black] rounded-full'/>
            <img src={teleca} alt="teleca" className='w-16 h-16 md:w-24 md:h-24 object-cover  border-2 border-[black] rounded-full'/>
            
        </div>
        <p className='mt-4 text-left'>Tražite inspiraciju za obrok? Na našem blogu naći ćete raznovrsne recepte za slana jela koja će oduševiti vaša čula. Bilo da volite mediteransku kuhinju, egzotična jela, ili tražite brze i zdrave opcije, imamo nešto za vas. Kliknite sada i otkrijte recepte koji će vašu trpezu pretvoriti u gozbu!</p>
        <Link to={{ pathname: "/recepti", search: "?category=slano" }}>
              <button className="bg-[black] text-[white] w-fit rounded-md p-2 m-6 font-semibold hover:bg-[#B6B6B4]">
                Vidi recepte
              </button>
            </Link>
    </div>
  )
}

export default RecommendedRecipesSavouryCard

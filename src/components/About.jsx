import React from 'react'
import porodica from "../assets/porodica.png"
import kuvanje from "../assets/kuvanje.png"
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className='flex flex-col bg-[white] justify-center items-center  p-5 mx-auto'>
      <div className=' w-full md:w-1/2 text-center'>
      <h1 className='text-center text-xl md:text-2xl font-bold text-[black] m-2 p-4'>O Noklici</h1>
        <p className='text-center text-lg md:text-xl  text-[black] m-2 p-4'>Ma, samo bih se malo zabavila i iskoristila priliku da pricam, savetujem i objasnim. Druga strana ima slobodu da odustane u bilo kom trenutku, a da ne bude neprijatno ni meni ni posetiocu.
        Iako je ime sajta pretenciozno, ne nudi se ništa spektakularno, to je samo ime priloga, a prilog je kao malo porodično stablo ili kao mala lična karta domaćice.
            </p>
            <img src={porodica} alt="" className='self-center w-1/2 md:w-1/3 mx-auto'/>
        <p className='text-center text-lg md:text-xl  text-[black] m-2 p-4'>Sve su priče ovde lične crte, sve su fotografije moje, a priprema jela amaterska, ali s ljubavlju. Svako ima svoj način da bližnjima iskaže ljubav, a ja spajam potrebu i zadovoljstvo i rezultate tog spoja predajem zainteresovanim konzumentima. Tako se ljubav koju im dajem može meriti brzinom kojom pojedu pripremljeno. Ili me baš mnogo vole ili im je apetit izražen natprosečno, tek ta me reakcija i povela u ovu avanturu. </p>
        <img src={kuvanje} alt="" className='self-center w-1/2 md:w-1/3 mx-auto'/>
        
        <p className='text-center text-lg md:text-xl  text-[black] m-2 p-4'>Očekujem da posetilac sajta poverenje u moje reči može steći  pripremom predloženog  i nijedna dalja informacija o meni  na početku neće bolje pomoći u tom poduhvatu.</p>
        
        <p className='text-center text-lg md:text-xl  text-[black] m-2 p-4'>Ne veruješ mi? Uveri se sam, idi vidi recepte!</p>
        <Link to="/recepti">
        <button className="bg-[black] text-[white] w-fit rounded-md p-2 mt-1 font-semibold  hover:bg-[#71697A]">Vidi recepte</button>
        </Link>
      </div>
        
    </div>
  )
}

export default About
import React, { useEffect, useState } from 'react'
import { AlarmClock, ChefHat, HandCoins } from 'lucide-react'
import { useParams } from 'react-router-dom';
import { supabase } from '../util/createClient';
import Loading from './Loading';
import ReceptNotFound from './ReceptNotFound';
import { Link } from 'react-router-dom';

const RecipePage = () => {
    
    const {nazivRecepta} = useParams();
    const decodedNazivRecepta = decodeURIComponent(nazivRecepta);

    const [recipe, setRecipe] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecipe(){
            try{
                setLoading(true);
                const {data,error} = await supabase.from("recepti").select("*").eq("naziv", decodedNazivRecepta).single();

                if(error) {
                    throw error;
                    
                }
                setRecipe(data);
            } catch(error){
                console.error("Error fetching recipe: ", error.message);
            } finally{
                setLoading(false);
            }
        }
        fetchRecipe();
    }, [decodedNazivRecepta])

    if(loading){
       return <Loading/>
    }

    if (!recipe) {
        return <ReceptNotFound/>
      }
    
      const { naziv, slika, sastojci, vreme, tezina, cena, prica } = recipe;

  return (
    <div className='flex flex-col justify-center '>
        <h1 className='text-center font-bold text-[black] text-2xl m-2 p-2'>{naziv}</h1>
        <img src={slika} alt="nesto" className='w-fit h-auto md:h-96 p-2 m-2 rounded-2xl self-center'/>
        <div className='flex flex-col md:flex-row  items-center md:justify-center'>
        <div className='w-5/6  sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[white] text-black   shadow-lg shadow-black h-96 flex flex-col p-2 m-2 rounded-xl'>
        <h2 className=' text-center font-bold text-xl'>Sastojci</h2>
        <pre className="text-black font-albert text-sm md:text-md ">{sastojci}</pre>
         </div>
        <div className='bg-[white] p-4 m-2 w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4 md:h-72 shadow-lg shadow-black  text-black text-center rounded-xl'>
        <h1 className='text-center text-xl font-bold mb-4'>Informacije o receptu</h1>
        <div className='flex flex-col justify-center lg:items-center md:items-start items-center p-6 gap-4'>
        <span className='flex flex-col md:flex-row items-center justify-center  text-sm md:text-lg'><AlarmClock className='mr-2'/>Vreme trajanja: {vreme} min</span>
        <span className='flex flex-col md:flex-row items-center justify-center text-sm md:text-lg'><ChefHat className='mr-2'/>Težina: {tezina}</span>
        <span className='flex flex-col md:flex-row items-center justify-center text-sm md:text-lg'><HandCoins className='mr-2'/>Cena: {cena} RSD</span>
        </div>
        </div>
        </div>
        <div className='bg-[white] w-full md:w-2/3  md:mx-auto md:rounded-xl text-center flex flex-col p-4 m-3 justify-center'>
            <h1 className='text-black text-center text-2xl p-2 mt-4 font-bold'>Priča</h1>
        <p className='text-left text-md text-black w-full md:w-5/6 mx-auto p-2 '>{prica}</p>
        
        </div>
       
       <Link to="/recepti" className='self-center'>
       <button className='bg-[black] text-white w-fit rounded-md p-2  font-semibold hover:bg-[#B6B6B4] m-4'>Nazad na ostale recepte</button>
       
       </Link>
        
       
    </div>
  )
}

export default RecipePage
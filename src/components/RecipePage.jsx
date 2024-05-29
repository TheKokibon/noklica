import React, { useEffect, useState } from 'react'
import { AlarmClock, ChefHat, HandCoins } from 'lucide-react'
import { useParams } from 'react-router-dom';
import { supabase } from '../util/createClient';
import Loading from './Loading';
import ReceptNotFound from './ReceptNotFound';
import { Link } from 'react-router-dom';

const RecipePage = () => {
    
    const {nazivRecepta} = useParams();

    const [recipe, setRecipe] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecipe(){
            try{
                setLoading(true);
                const {data,error} = await supabase.from("recepti").select("*").eq("naziv", nazivRecepta).single();

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
    }, [nazivRecepta])

    if(loading){
       return <Loading/>
    }

    if (!recipe) {
        return <ReceptNotFound/>
      }
    
      const { naziv, slika, sastojci, vreme, tezina, cena, prica } = recipe;

  return (
    <div className='flex flex-col justify-center '>
        <h1 className='text-center font-bold text-[#cab88d] text-2xl m-2 p-2'>{naziv}</h1>
        <div className='flex flex-col md:flex-row  items-center md:justify-evenly'>
        <div className='w-fit  sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#cab88d] text-white  h-min flex flex-col p-2 m-1 rounded-xl'>
        <h1 className=' text-center font-bold text-xl'>Sastojci</h1>
        <pre className="text-white font-comfortaa text-xs md:text-md ">{sastojci}</pre>
         </div>
        <div className='bg-[#cab88d] p-4 m-2 w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4 md:h-72 text-white text-center rounded-xl'>
        <h1 className='text-center text-xl font-bold mb-4'>Informacije o receptu</h1>
        <div className='flex flex-col justify-center lg:items-center md:items-start items-center p-6 gap-4'>
        <span className='flex flex-col md:flex-row items-center justify-center  text-sm md:text-lg'><AlarmClock className='mr-2'/>Vreme trajanja: {vreme} min</span>
        <span className='flex flex-col md:flex-row items-center justify-center text-sm md:text-lg'><ChefHat className='mr-2'/>Težina: {tezina}</span>
        <span className='flex flex-col md:flex-row items-center justify-center text-sm md:text-lg'><HandCoins className='mr-2'/>Cena: {cena} RSD</span>
        </div>
        </div>
        </div>
        <img src={slika} alt="nesto" className='w-fit h-min md:h-96 p-2 m-2 rounded-2xl self-center'/>
        <div className='bg-[#cab88d] w-full md:w-1/2  md:mx-auto md:rounded-xl text-white flex flex-col justify-center'>
            <h1 className='text-white text-center text-2xl p-2 mt-4 font-bold'>Priča</h1>
        <p className='text-left text-sm w-full md:w-5/6 mx-auto p-2 m-5'>{prica}</p>
        
        </div>
       
       <Link to="/recepti" className='self-center'>
       <button className='bg-[#cab88d] text-white w-fit rounded-md p-2 mt-2 font-semibold hover:bg-[#8d8663] m-2'>Nazad na ostale recepte</button>
       
       </Link>
        
       
    </div>
  )
}

export default RecipePage
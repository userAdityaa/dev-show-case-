import React from 'react'
import { Lilita_One, Play } from 'next/font/google'
import { Parkinsans } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { ChevronRight, LaptopIcon, PlayIcon } from 'lucide-react';
import { Oswald } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { Catamaran } from 'next/font/google';
import { Signika } from 'next/font/google';
import { Oregano } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
    subsets: ['latin'], 
    weight: '600', 
}); 

const lilita_one = Lilita_One({
    subsets: ['latin'],
    weight: '400',
});

const roboto_slab = Roboto_Slab({
    subsets: ['latin'],
    weight: '700',
})

const oregano = Oregano({
    subsets: ['latin'],
    weight: '400',
})

const signika = Signika({
    subsets: ['latin'],
    weight: '400',
})

const catamaran = Catamaran ({ 
    subsets: ['latin'], 
    weight: '400', 
})


const oswald = Oswald ({ 
    subsets: ['latin'], 
    weight: '400', 
})

const raleway = Raleway({
    subsets: ['latin'], 
    weight: '400', 
})


const parkinsans = Parkinsans({ 
    subsets: ['latin'], 
    weight: '700', 
})

const LandingPage = () => {
    return (
      <div className='flex max-md:flex-col justify-between items-center min-h-screen w-full bg-[#151619] p-6 max-md:justify-center'>
        <Image src = '/phone-one.svg' alt='phone one' width={150} height={200} className='max-md:block max-md:rounded-2xl max-lg:hidden max-xl:hidden max-2xl:hidden'></Image>
          <div className={`flex flex-col justify-center w-[55%] h-[20rem] gap-2 max-lg:w-[50%] max-lg:h-[25rem] max-md:w-[100%] max-md:text-center`}>
              <h1 className={`text-[#fbf8f0] text-[52px] font-bold ${poppins.className} w-[95%] max-lg:text-[40px] max-md:text-b`}>Your Digital Development Portfolio</h1>
              <p className='text-[#fbf8f0] font-medium text-[19px] max-lg:text-[16px]'>A revolutionary platform designed to help developers showcase their projects, highlight their skills, and connect with the global tech community.</p>
              <div className='flex justify-between w-[50%] text-[20px] mt-4 max-lg:text-[16px]  max-lg:w-[80%] max-md:items-center max-md:justify-center max-md:w-[100%] max-md:gap-4'>
                  <Button className='bg-white text-black font-semibold p-6 rounded-xl hover:text-white hover:border hover:border-zinc-300 max-lg:p-4'>Get Started Now</Button>
                  <Button className='text-white border border-zinc-400 p-6 rounded-xl hover:bg-white hover:text-black  max-lg:p-4'>Watch Demo <PlayIcon></PlayIcon></Button>
              </div>
          </div>
  
          <Image src='/cloud_landing.webp' alt='cloud landing page' height={300} width={800} className='rounded-2xl mt-16 hidden md:block max-lg:w-[65%] max-lg:h-[80%]'></Image>
      </div>
    )
  }
  


export default LandingPage
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
    <div className='flex justify-between items-center min-h-screen w-full bg-[#151619] p-6'>
        <div className={`flex flex-col w-[55%] h-[20rem] gap-2`}>
            <h1 className={`text-[#fbf8f0] text-[52px] font-bold ${poppins.className} w-[95%]`}>Your Digital Development Portfolio</h1>
            <p className='text-[#fbf8f0] font-medium text-[19px]'>A revolutionary platform designed to help developers showcase their projects, highlight their skills, and connect with the global tech community.</p>
            <div className='flex justify-between w-[50%] text-[20px] mt-4'>
                <Button className='bg-white text-black font-semibold p-6 rounded-xl hover:text-white hover:border hover:border-zinc-300'>Get Started Now</Button>
                <Button className='text-white border border-zinc-400 p-6 rounded-xl hover:bg-white hover:text-black'>Watch Demo <PlayIcon></PlayIcon></Button>
            </div>
        </div>

        <Image src='/cloud_landing.webp' alt='cloud landing page' height={300} width={800} className='rounded-2xl mt-16'></Image>
    </div>
  )
}

export default LandingPage
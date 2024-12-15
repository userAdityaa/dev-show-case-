import React from 'react'
import { Lilita_One, Play } from 'next/font/google'
import { Parkinsans } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { ChevronRight, PlayIcon } from 'lucide-react';
import { Oswald } from 'next/font/google';
import { Raleway } from 'next/font/google';
import { Catamaran } from 'next/font/google';
import { Signika } from 'next/font/google';
import { Oregano } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';

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
    <div className='flex flex-col items-center min-h-screen w-full'>
    <div className='flex flex-col w-[60vw] items-center mt-[10%]'>
        <h1 className={`${roboto_slab.className} text-[60px] text-center leading-tight`}>DevShowcase: <span className='text-[#96938f] leading-tight'>Your Digital Development Portfolio</span></h1>

        <p className='w-[80%] text-center mt-[1.5rem] font-semibold'>A revolutionary platform designed to help developers showcase their projects, highlight their skills, and connect with the global tech community.</p>

        <div className='flex items-center justify-between gap-5'>
            <Button size={'lg'} className='text-[16px] font-medium mt-[1.5rem]'>
                Get Started 
                <ChevronRight className='text-white' />
            </Button>

            <Button size={'lg'} className='text-[16px] font-medium mt-[1.5rem] bg-white text-black hover:bg-white'>
                Watch Demo
                <PlayIcon className='text-black'/>
            </Button>
        </div>
    </div>

    <Button className="w-[60vw] h-[18vh] rounded-xl mt-[4rem] bg-white hover:bg-white shadow-lg">
        
    </Button>
    
</div>
  )
}

export default LandingPage
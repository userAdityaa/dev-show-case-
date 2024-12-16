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
    <div className='flex flex-col items-center min-h-screen w-full bg-[#151619]'>
   
    
    </div>
  )
}

export default LandingPage
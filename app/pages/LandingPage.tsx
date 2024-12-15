import React from 'react'
import { Lilita_One, Play } from 'next/font/google'
import { Parkinsans } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { ChevronRight, PlayIcon } from 'lucide-react';

const lilita_one = Lilita_One({
    subsets: ['latin'],
    weight: '400',
});

const parkinsans = Parkinsans({ 
    subsets: ['latin'], 
    weight: '700', 
})

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-evenly h-[100vh] w-[100vw] '>
        <div className='flex flex-col h-[50vh] w-[60vw] items-center'>
            <h1 className={`${parkinsans.className} text-[60px] text-center leading-tight`}>DevShowcase: <span className='text-[#96938f] leading-tight'>Your Digital Development Portfolio</span></h1>

            <p className='w-[80%] text-center mt-[1.5rem] font-semibold'>A revolutionary platform designed to help developers showcase their projects, highlight their skills, and connect with the global tech community.</p>


            <div className='flex items-center justify-between gap-5'>
                <Button size={'lg'} className='text-[16px] font-medium mt-[1.5rem]'>
                    Get Started 
                    <ChevronRight className='text-white' />
                </Button>

                <Button size={'lg'} className='text-[16px] font-medium mt-[1.5rem] bg-white text-black'>
                    Watch Demo
                    <PlayIcon className='text-black'/>
                </Button>
            </div>

        </div>

    </div>
  )
}

export default LandingPage
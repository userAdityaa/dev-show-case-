import React from 'react'
import { Button } from '@/components/ui/button'
import { Laptop } from 'lucide-react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'], 
    weight: '600', 
})

const FeatureSection = () => (
    <div className='flex items-center mt-[6rem] justify-between w-[96%] mx-auto max-md:flex-col max-md:gap-6'>
        <div className='bg-white flex flex-col w-[30%] h-[26rem] items-center justify-start hover:bg-white rounded-2xl p-8 hover:border-t-4 hover:border-t-zinc-800 max-md:w-[90%] max-md:h-[27rem] '>
            <Image src='/first_point.svg' alt='first point' width={300} height={100}></Image>
            <p className={`text-black font-bold ${poppins.className} text-[24px] max-md:text-[22px]`}>Interactive Project Demos</p>
            <p className='text-black text-[16px] text-center mt-2'>Showcase your projects with fully interactive, live demonstrations across multiple devices and platforms.</p> 
        </div>
        <div className='bg-white flex flex-col w-[30%] h-[26rem] items-center justify-start hover:bg-white rounded-2xl p-8 hover:border-t-4 hover:border-t-zinc-800 max-md:w-[90%] max-md:h-[27rem]'>
        
       
            <Image src='/second_point.svg' alt='second point' width={300} height={300}></Image>
            <p className={`text-black font-bold ${poppins.className} text-[23px] max-md:text-[19.5px]`}>Comprehensive Tech Profiles</p>
            <p className='text-black text-[16px] text-center mt-2'>Create rich, detailed profiles that highlight your technological expertise and project achievements.</p> 
        </div>
        <div className='bg-white flex flex-col w-[30%] h-[26rem] items-center justify-start hover:bg-white rounded-2xl p-8 hover:border-t-4 hover:border-t-zinc-800 max-md:w-[90%] max-md:h-[27rem]'>
            
            

            <Image src='/third_point.svg' alt='third point' width={300} height={300}></Image>
            <p className={`text-black font-bold ${poppins.className} text-[24px] max-md:text-[20px]`}>Community & Collaboration</p>
            <p className='text-black text-[16px] text-center mt-2'>Connect with developers, get feedback, and discover potential collaboration opportunities.</p> 
        </div>
    </div>
)

export default FeatureSection
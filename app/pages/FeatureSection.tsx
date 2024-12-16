import React from 'react'
import { Button } from '@/components/ui/button'
import { Laptop } from 'lucide-react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'], 
    weight: '600', 
})

const FeatureSection = () => {
  return (
    <div className='flex items-center mt-[6rem] justify-between w-[96%] mx-auto'>
        <div className='bg-white flex flex-col w-[30%] h-[13rem] items-center justify-start hover:bg-white rounded-2xl p-8 hover:border-t-4 hover:border-t-zinc-800'>
            <Image src='/laptop.png' alt='laptop' width={35} height={50}></Image>
            <p className={`text-black font-semibold ${poppins.className} text-[24px]`}>Interactive Project Demos</p>
            <p className='text-black text-[16px] text-center mt-2'>Showcase your projects with fully interactive, live demonstrations across multiple devices and platforms.</p>
        </div>
        <div className='bg-white flex flex-col w-[30%] h-[13rem] items-center justify-start hover:bg-white rounded-2xl p-8 hover:border-t-4 hover:border-t-zinc-800'>
            <Image src='/code.png' alt='laptop' width={35} height={50}></Image>
            <p className={`text-black font-semibold ${poppins.className} text-[23px]`}>Comprehensive Tech Profiles</p>
            <p className='text-black text-[16px] text-center mt-2'>Create rich, detailed profiles that highlight your technological expertise and project achievements.</p>
        </div>
        <div className='bg-white flex flex-col w-[30%] h-[13rem] items-center justify-start hover:bg-white rounded-2xl p-8 hover:border-t-4 hover:border-t-zinc-800'>
            <Image src='/people.png' alt='laptop' width={40} height={50}></Image>
            <p className={`text-black font-semibold ${poppins.className} text-[24px]`}>Community & Collaboration</p>
            <p className='text-black text-[16px] text-center mt-2'>Connect with developers, get feedback, and discover potential collaboration opportunities.
            .</p>
        </div>
    </div>
  )
}

export default FeatureSection
import React from 'react'
import { Poppins } from 'next/font/google'
import { Button } from '@/components/ui/button'

const poppins = Poppins({
    subsets: ['latin'], 
    weight: '700', 
})

const FooterSection = () => {
    return (
      <div className='bg-zinc-800 w-full h-[30rem] mt-[6rem] flex flex-col  items-center relative'>
          <h1 className={`text-white text-opacity-100 opacity-100 font-bold z-40 ${poppins.className} text-[30px] w-96 text-center mt-14`}>Ready to Showcase Your Development Journey?</h1>
          <p className='text-white text-[20px] w-[60%] text-center mt-6'>Join LaunchDesk and transform how you present your projects to the world. No more complex deployments or limited portfolios.</p>
          <div className='flex gap-4 mt-8'>
            <Button className='p-6 text-[18px] rounded-xl bg-white text-black hover:text-white'>Create Free Account</Button>
            <Button className='p-6 text-[18px] rounded-xl hover:border hover:border-zinc-400'>Learn More</Button>
          </div>
      </div>
    )
  }


export default FooterSection
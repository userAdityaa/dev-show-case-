import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 h-20 w-full flex items-center px-4'>
        <Image src = '/logo.png' alt='logo' height={20} width={190}></Image>
    </div>
  )
}

export default Navbar
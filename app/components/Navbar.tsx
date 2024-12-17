'use client'
import { useNavbarTheme } from '../context/navbarContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => {
    const { theme } = useNavbarTheme();

    return (
        <div className='fixed top-0 left-0 h-20 w-full flex items-center px-6 justify-between'>
            <Image src='/logo.png' alt='logo' height={20} width={155} />
            {theme === 'LandingPage' && (
                <Button className='bg-white text-black font-semibold hover:border hover:border-zinc-300 hover:text-white'>
                    Sign in
                </Button>
            )}
        </div>
    );
};

export default Navbar;
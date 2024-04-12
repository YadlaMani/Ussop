import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const NavBar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href='/' className="flex item-center gap-1">
        <Image src='/icons/logo.png'
        width={32}
        height={32} alt="ussop logo" className='max-sm:size-10'>
         
        </Image>
        <p className="text-[26px] font-extraboldm text-white max-sm:hidden">Ussop</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>
        
        <MobileNav/>
      </div>
      
    </nav>
  )
}

export default NavBar;
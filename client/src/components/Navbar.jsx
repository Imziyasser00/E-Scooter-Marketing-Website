import React from 'react'
import Logo from '../assets/logo.svg'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-6 mt-4'>
        <a href='/' >
            <img src={Logo} width={50} alt='logo' />
        </a>
        <SignedOut>
            <div className='py-2 px-5 bg-primary rounded-lg text-white hover:'>
                <SignInButton />
            </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </div>
  )
}

export default Navbar

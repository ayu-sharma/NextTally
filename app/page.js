"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import logol from '@/public/images/logol.svg';
import Dropdownbtn from '@/components/ui/Dropdownbtn';
import Button from '@/components/ui/Button';
export default function Home() {
  const menuItems = [
    { label: 'For Admin', link: '/admin-login' },
    { label: 'For User', link: '/user-login' },
  ]

  return (
    <div className="">
      <div className='flex justify-between items-center py-8 px-9'>
        <div className='pb-4'>
          <Image
            src={logol} alt='NextTally Logo' height={44}
          />
        </div>

        <div className="">
          <Navbar />
        </div>
        <Link href="">
          <Dropdownbtn className="text-white px-4 rounded-md text-lg font-bold hover:opacity-90" buttonName="Login" menuItems={menuItems} />
        </Link>
      </div>
      <div className='my-20'>
        <div className='text-center text-bold text-7xl'>Effortlessly manage <span className='relative'>Taxes<span className='absolute left-0 right-0 bottom-0 h-3 bg-[#CBE64E]'></span></span> , <br /><div className='mt-8'><span className='relative'>Revenue<span className='absolute left-0 right-0 bottom-0 h-3 bg-[#CBE64E]'></span></span> and <span className='relative'> Profits <span className='absolute left-0 right-0 -bottom-0 h-3 bg-[#996AFA]'></span> </span></div> </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-center font-extralight leading-1 text-xl'>Streamline tax management across multiple locations with ease. Our unified platform provides real-time tracking, <br /> comprehensive reporting, and robust control, empowering admins and managers to monitor and optimize revenue and tax <br /> performance efficiently, ensuring compliance and boosting profitability.</p>

        <div>
          <Link href={"http://localhost:3000/signup"}>
            <Button className='bg-black rounded-[9rem] text-xl py-4 px-6 text-white my-10 font-bold hover:opacity-90' btnName = "Get Started"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

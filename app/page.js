"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import logol from '@/public/images/logol.svg';
export default function Home() {


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
        {/* <Link href="">
          <Button className='w-full text-lg py-6 px-7 bg-black font-monospace text-white'>
            Sign In
          </Button>
        </Link> */}
      </div>
      <div className='my-20'>
        <div className='text-center text-bold text-7xl'>Effortlessly manage <span className='relative'>Taxes<span className='absolute left-0 right-0 bottom-0 h-3 bg-[#CBE64E]'></span></span> , <br /><div className='mt-8'><span className='relative'>Revenue<span className='absolute left-0 right-0 bottom-0 h-3 bg-[#CBE64E]'></span></span> and <span className='relative'> Profits <span className='absolute left-0 right-0 -bottom-0 h-3 bg-[#996AFA]'></span> </span></div> </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-center font-extralight leading-1 text-xl'>Streamline tax management across multiple locations with ease. Our unified platform provides real-time tracking, <br/> comprehensive reporting, and robust control, empowering admins and managers to monitor and optimize revenue and tax <br/> performance efficiently, ensuring compliance and boosting profitability.</p>

        <div>
          {/* <Link href={"http://localhost:3000/signup"}>
            <Button className='bg-black font-monospace rounded-[30px] text-xl py-7 px-6 text-white mt-10'>
              Get Started
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

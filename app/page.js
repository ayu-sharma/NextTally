"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import logol from '../public/images/logol.svg';
import Dropdownbtn from '../components/ui/Dropdownbtn';
import HandleModals from '../components/handlemodals';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (type) => {
    setSelectedMenu(type);
    toggleComponent();
  };

  const menuItems = [
    { label: 'For Admin', action: () => handleMenuClick("Admin") },
    { label: 'For User', action: () => handleMenuClick("User") },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <div className=" flex flex-col justify-between ">
      <div className={`flex justify-between items-center py-8 px-9`}>
        <div className='pb-4'>
          <Image src={logol} alt='NextTally Logo' height={44} />
        </div>
        <div className='md:block hidden'>
        <Navbar />
        </div>
        <div className='md:block hidden'>
        <Dropdownbtn 
          className="text-white bg-black px-4 py-2 rounded-md text-lg font-bold hover:bg-gray-900" 
          buttonName="Login" 
          menuItems={menuItems}
        />
        </div>
      </div>
      <div className='my-32 px-4'>
        <div className='flex flex-col items-center gap-8 max-w-6xl mx-auto'>
          <div>
            <h1 className='text-4xl md:text-6xl lg:text-[5rem] -tracking-[0.022em] font-medium text-center leading-[1.1] whitespace-pre-wrap'>
              <span>
              Effortlessly manage </span>
              <br/>
              <span className='bg-gradient-to-b from-[#185FF6] to-[#1B45A6] bg-clip-text text-transparent'>
              Taxes, Revenue and Profits </span>
            </h1>
        
        <h2 className='font-inter text-slate-800 font-[350] text-xl md:text-2xl -tracking-[0.017em] md:-tracking-[0.019em] antialiased max-w-5xl text-center mt-4 mx-auto'>
          Streamline tax management with real-time tracking, reports, and controls to optimize revenue <br/> and compliance
          across locations.
        </h2>
        </div>
          <button 
            className='rounded-lg text-xl py-2 px-6 text-white font-bold hover:opacity-90 bg-black hover:bg-gray-900 flex items-center mx-auto' 
            onClick={() => handleMenuClick("Signup")}
          >
            Get Started
          </button>
          </div>
      </div>
      {/* Fullscreen Overlay when SigninAdmin is open */}
      <HandleModals 
        toggleComponent={toggleComponent} 
        isOpen={isOpen} 
        selectedMenu={selectedMenu} 
      />
    </div>
  );
}

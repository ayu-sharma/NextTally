"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import logol from '../public/images/logol.svg';
import Dropdownbtn from '../components/ui/Dropdownbtn';
import Button from '../components/ui/Button';
import Handlemodals from '../components/handlemodals';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('')
  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (type) => {
    setSelectedMenu(type)
    toggleComponent();
  }
  console.log("this is", selectedMenu == "Admin")
  const menuItems = [
    { label: 'For Admin', action: () => handleMenuClick("Admin") },
    { label: 'For User', action: () => handleMenuClick("User") },
  ];
  // {console.log("this is menuitem.label",menuItems[0].label)}
  useEffect(() => {
    // Conditionally add/remove the overflow-hidden class on the body
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup when the component unmounts
    // return () => {
    //   document.body.classList.remove('overflow-hidden');
    // };
  }, [isOpen]);

  return (
    <div className="">
      <div className={`flex justify-between items-center py-8 px-9 `}>
        <div className='pb-4'>
          <Image src={logol} alt='NextTally Logo' height={44} />
        </div>

        <div className="">
          <Navbar />
        </div>
        <Dropdownbtn className="text-white bg-black px-4 py-2 rounded-md text-lg font-bold hover:opacity-90" buttonName="Login" menuItems={menuItems} />
      </div>
      <div className='my-20'>
        <div className='text-center text-bold text-7xl'>Effortlessly manage <span className='relative'>Taxes<span className='absolute left-0 right-0 bottom-0 h-3 bg-[#CBE64E]'></span></span>, <br /><div className='mt-8'><span className='relative'>Revenue<span className='absolute left-0 right-0 bottom-0 h-3 bg-[#CBE64E]'></span></span> and <span className='relative'> Profits <span className='absolute left-0 right-0 -bottom-0 h-3 bg-[#996AFA]'></span> </span></div> </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-center font-extralight leading-1 text-xl'>
          Streamline tax management with real-time tracking, reports, and controls to optimize revenue and compliance
          <br />across locations.
        </p>

        <div>
          <Link href={"http://localhost:3000/signup"}>
            <Button className='rounded-lg text-xl py-4 px-6 text-white my-10 font-bold hover:opacity-90' btnName="Get Started" />
          </Link>
        </div>
      </div>
      {/* Fullscreen Overlay when SigninAdmin is open */}
      <Handlemodals toggleComponent={toggleComponent} isOpen={isOpen} selectedMenu={selectedMenu} menuItems={menuItems} />
    </div>
  );
}

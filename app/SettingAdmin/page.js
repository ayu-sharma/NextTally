"use client"
import React, {useState} from 'react';
import logol from '../../public/images/logol.svg';
import Image from 'next/image';
export default function managerSetUp() {
    const[showAdminName, setAdminName] = useState('Admin')  //admin name will be save here
    return(
        <>
        <div className={`flex justify-between items-center py-8 px-9`}>
        <div className='pb-4'>
          <Image src={logol} alt='NextTally Logo' height={44} />
        </div>
        <div className='italic text-xl'>
            Hey, <span className='font-bold not-italic'> {showAdminName} </span>
        </div>
        </div>
        </>
    )
}
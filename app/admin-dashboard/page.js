"use client"
import React, {useState} from "react";
import Image from "next/image";
import logol from "../../public/images/logol.svg";

export default function adminDashboard() {
    const [isSelectedOption, setIsSelectedOption] = useState()
  return (
    <>
      <div className="home-navbar-color h-screen w-full max-w-xs">
        <div className={`py-4`}>
          <Image
            className="pl-6"
            src={logol}
            alt="NextTally Logo"
            height={38}
          />
          <div className="flex flex-col mt-10 gap-2">
            <div className={`flex flex-row items-center gap-3 cursor-pointer px-6 py-2`}>
              <Image
                className="bg-white p-2 rounded-md"
                src={{}}
                alt="Signup Logo"
                height={5}
                width={5}
              />
              <h1 className="">Dashboard</h1>
            </div>
            <div className={`flex flex-row items-center gap-3 cursor-pointer px-6 py-2`}>
              <Image
                className="bg-white p-2 rounded-md"
                src={{}}
                alt="Signup Logo"
                height={10}
                width={10}
              />
              <h1 className="">Tax Calculation</h1>
            </div>
            <div className={`flex flex-row items-center gap-3 cursor-pointer px-6 py-2`}>
              <Image
                className="bg-white p-2 rounded-md"
                src={{}}
                alt="Signup Logo"
                height={10}
                width={10}
              />
              <h1 className="">Branch Details</h1>
            </div>
            <div className={`flex flex-row items-center gap-3 cursor-pointer px-6 py-2`}>
              <Image
                className="bg-white p-2 rounded-md"
                src={{}}
                alt="Signup Logo"
                height={10}
                width={10}
              />
              <h1 className="">Settings</h1>
            </div>
            <div className={`flex flex-row items-center gap-3 cursor-pointer px-6 py-2`}>
              <Image
                className="bg-white p-2 rounded-md"
                src={{}}
                alt="Signup Logo"
                height={10}
                width={10}
              />
              <h1 className="">Help Center</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

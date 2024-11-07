"use client";
import React, { use, useState, useEffect } from "react";
import Signup_cmp from "../../components/Singup_cmp";
import Link from "next/link";
import logol from "../../public/images/logol.svg";
import Image from "next/image";
import signuplogo from "../../public/images/signup_logo.svg";
import Branch_cmp from "../../components/Branch_cmp";
import Assign_mngr from "../../components/Assign_mngr";
export default function Signin_admin() {
  const [page, setPage] = useState(1);

  const renderPage = (e) => {
    console.log("clicked");
    if (page < 3) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="w-full overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="flex-1 flex items-center flex-row w-full">
            <div className="home-navbar-color h-screen w-full max-w-xs">
              <div className={`py-4`}>
                <Image
                  className="pl-6"
                  src={logol}
                  alt="NextTally Logo"
                  height={38}
                />
                <div className="flex flex-col mt-10 gap-3">
                  <div
                    className={`flex flex-row items-center gap-3 cursor-pointer px-6 py-3 ${
                      page === 1
                        ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
                        : "bg-none"
                    }`}
                  >
                    <Image
                      className="bg-white p-2 rounded-md"
                      src={signuplogo}
                      alt="Signup Logo"
                      height={30}
                      width={30}
                    />
                    <h1 className="">Admin Signup</h1>
                  </div>
                  <div
                    className={`flex flex-row items-center gap-3 cursor-pointer px-6 py-3 ${
                      page === 2
                        ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
                        : "bg-none"
                    }`}
                  >
                    <Image
                      className="bg-white p-2 rounded-md"
                      src={signuplogo}
                      alt="Signup Logo"
                      height={30}
                      width={30}
                    />
                    <h1 className="">Branch Details</h1>
                  </div>
                  <div
                    className={`flex flex-row items-center gap-3 cursor-pointer  px-6 py-3 ${
                      page === 3
                        ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
                        : "bg-none"
                    }`}
                  >
                    <Image
                      className="bg-white p-2 rounded-md"
                      src={signuplogo}
                      alt="Signup Logo"
                      height={30}
                      width={30}
                    />
                    <h1 className="">Assign Manager</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:px-4 px-4 max-w-md mx-auto">
              {page === 1 && <Signup_cmp renderPage={renderPage} />}
              {page === 2 && <Branch_cmp renderPage={renderPage} />}
              {page === 3 && <Assign_mngr renderPage={renderPage} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

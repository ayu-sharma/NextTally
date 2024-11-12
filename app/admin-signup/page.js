"use client";
import React, { useState, useEffect } from "react";
import Signup_cmp from "../../components/Singup_cmp";
import logol from "../../public/images/logol.svg";
import Image from "next/image";
import signuplogo from "../../public/images/signup_logo.svg";
import Branch_cmp from "../../components/Branch_cmp";
import Assign_mngr from "../../components/Assign_mngr";

export default function Signin_admin() {
  const [page, setPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [signupData, setSignupData] = useState({
    adminname: "",
    email: "",
    password: "",
    branchname: "",
    branchlocation: "",
  });


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const selectedPage = localStorage.getItem("selectedPage");
      if (selectedPage) {
        setPage(parseInt(selectedPage, 10));
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("selectedPage", page);
    }
  }, [page, isClient]);

  const resetLocalStorage = () => {
    localStorage.removeItem("selectedPage");
  };


  const renderPage = () => {
    if (page < 3) {
      setPage((prevPage) => prevPage + 1);
    } else {
      resetLocalStorage();
      setPage(1);
    }
  };

  if (!isClient) return null; 

  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col w-full">
        <div className="flex-1 flex items-center flex-row w-full">
          <div className="home-navbar-color h-screen w-full max-w-[16rem]">
            <div className="py-4">
              <Image
                className="pl-6"
                src={logol}
                alt="NextTally Logo"
                height={38}
              />
              <div className="flex flex-col mt-10 gap-3">
                <div
                  className={`flex flex-row items-center gap-3 cursor-pointer rounded-lg mx-4 my-2 py-2 px-6 ${
                    page === 1
                      ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
                      : ""
                  }`}
                >
                  <Image
                    className="bg-white p-2 rounded-md"
                    src={signuplogo}
                    alt="Signup Logo"
                    height={30}
                    width={30}
                  />
                  <h1>Admin Signup</h1>
                </div>
                <div
                  className={`flex flex-row items-center gap-3 cursor-pointer rounded-lg mx-4 my-2 py-2 px-6 ${
                    page === 2
                      ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
                      : ""
                  }`}
                >
                  <Image
                    className="bg-white p-2 rounded-md"
                    src={signuplogo}
                    alt="Signup Logo"
                    height={30}
                    width={30}
                  />
                  <h1>Branch Details</h1>
                </div>
                <div
                  className={`flex flex-row items-center gap-3 cursor-pointer rounded-lg mx-4 my-2 py-2 px-6 ${
                    page === 3
                      ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
                      : ""
                  }`}
                >
                  <Image
                    className="bg-white p-2 rounded-md"
                    src={signuplogo}
                    alt="Signup Logo"
                    height={30}
                    width={30}
                  />
                  <h1>Assign Manager</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:px-4 px-4 max-w-md mx-auto">
            {page === 1 && (
              <Signup_cmp
                renderPage={renderPage}
                signupData={signupData}
                setSignupData={setSignupData}
              />
            )}
            {page === 2 && (
              <Branch_cmp
                renderPage={renderPage}
                signupData={signupData}
                setSignupData={setSignupData}
              />
            )}
            {page === 3 && (
              <Assign_mngr
                renderPage={renderPage}
                signupData={signupData}
                setSignupData={setSignupData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

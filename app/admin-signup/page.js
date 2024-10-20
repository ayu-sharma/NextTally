import React from "react";
import Signup_cmp from "../../components/Singup_cmp";
import Link from "next/link";
import logol from "../../public/images/logol.svg";
import Image from "next/image";
import signuplogo from "../../public/images/signup_logo.svg";
export default function Signin_admin({ onClose }) {
  return (
    <>
      <div className="w-full overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="flex-1 flex items-center flex-row w-full">
            <div className="home-navbar-color h-screen w-full max-w-xs">
              <div className="py-5 pl-6">
                <Image src={logol} alt="NextTally Logo" height={38} />
                {/* <div className="flex flex-col"> */}
                  <div className="flex flex-row items-center pt-10 gap-4">
                  <Image className="bg-white p-3 rounded-md" src={signuplogo} alt="Signup Logo" height={30} width={30}/>
                  <h1 className="">Admin Signup</h1>
                {/* </div> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:px-4 px-4 max-w-md mx-auto">
              <Signup_cmp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

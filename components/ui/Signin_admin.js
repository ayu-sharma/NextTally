import React, { useState, useEffect } from "react";
import Button from "./ButtonCmp";
import Image from "next/image";
import googlelogo from "../../public/images/googlelogo.svg";
import close from "../../public/images/modalclose.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Signin_admin({ onClose }) {
  const [isScreenLarge, setIsScreenLarge] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 774) {
        setIsScreenLarge(true);
      } else {
        setIsScreenLarge(false);
        router.push("/admin-login");
      }
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (!isScreenLarge) {
    return null;
  }

  return (
    <>
      <div
        className="absolute top-4 right-4 md:top-4 md:right-4 p-2 cursor-pointer hover:bg-neutral-100 rounded-lg z-10 bg-white"
        onClick={onClose}
      >
        <Image src={close} alt="Admin Signin Button" />
      </div>
      <div className="w-full overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="flex-1 items-start flex flex-row w-full">
            <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-[33rem] max-w-xl w-full lg:flex hidden flex-col pt-20 pl-10">
              <div className="text-white font-bold text-2xl">
                The Simplest way to manage <br /> your revenue
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:pt-24 pt-16 lg:px-20 px-10">
              <div className="font-inter font-medium text-2xl md:text-[2rem] leading-[1.2] antialiased text-primary -tracking-[0.019em] md:-tracking-[0.021em] ">
                Access Your Dashboard
              </div>
              <div className="text-black text-xs">
                Enter you credentials to access your account
              </div>
              <div className="pt-6 w-full flex flex-col">
                <input
                  type="email"
                  placeholder="Email Address.."
                  className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
                />
              </div>
              <Link href= "/admin-dashboard" className="w-full">
                <Button
                
                  className="cursor-pointer studio-primary-gradient font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group w-full"
                  btnName="Login"
                />
              </Link>
              <div className="text-black font-light text-xs mt-2">
                Don&apos;t have an account yet? No problem!{" "}
                <a className="text-blue-700" href="#">
                  Create one now
                </a>
                .
              </div>
              <a href="#" className="font-light text-xs mt-1 text-blue-700">
                Forgotten Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Button from "../components/ui/ButtonCmp";
import Image from "next/image";
import googlelogo from "../public/images/googlelogo.svg";
export default function Signup_cmp({ renderPage }) {
  const handleClick = (e) => {
    renderPage();
  };

  return (
    <div>
      <div className="flex flex-col justify-center w-full md:pt-16 pt-16 md:pb-10 md:px-4 px-4 max-w-md mx-auto">
        <div className="font-inter font-medium text-2xl md:text-[2rem] leading-[1.2] antialiased text-primary -tracking-[0.019em] md:-tracking-[0.021em]">
          Get Started
        </div>
        <div className="text-black text-xs">
          Create an Account to Begin Your Journey With Us
        </div>
        <div className="pt-6 w-full flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
          />

          {/* <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
                /> */}
        </div>
        <div className="w-full">
          <Button
            className="cursor-pointer studio-primary-gradient font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group w-full"
            btnName="Next"
            onClick={() => handleClick()}
          />
        </div>
        <div className=" relative w-full h-0 border border-gray-300 border-opacity-60 transform -rotate-0.5 mt-10">
          <div className="relative flex justify-center">
            <div className="absolute bg-[#E1E9EF] p-2 -top-5">Or</div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center justify-center gap-3 border border-slate-300 hover:border-studio-gradient-start text-primary antialiased rounded-lg py-2.5 md:py-3 px-6 md:px-8 mt-9">
          <div>
            <Image src={googlelogo} alt="Google Logo Image" />
          </div>
          <div className="text-sm">Log in with Google</div>
        </div>
      </div>
    </div>
  );
}

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
          Who’s the Manager?
        </div>
        <div className="text-black text-xs">
          Ready to Assign a Manager? Let’s Get Started!
        </div>
        <div className="pt-6 w-full flex flex-col">
          <input
            type="email"
            placeholder="Enter manager's email address"
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
          />

          <input
            type="password"
            placeholder="Enter first password"
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
          />
        </div>
        <div className="w-full">
          <Button
            className="cursor-pointer studio-primary-gradient font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group w-full"
            btnName="Next"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Button from "../../components/ui/ButtonCmp";
import { CircleAlert } from 'lucide-react';

export default function SignupCmp() {
  const [adminData, setAdminData] = useState({
    adminName: "",
    adminEmail: "",
    adminPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = () => {
    console.log("clicked....");
    if (
      !adminData.adminName ||
      !adminData.adminEmail ||
      !adminData.adminPassword
    ) {
      setErrorMessage("Please enter the required details before continuing.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(adminData.adminEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
    setErrorMessage("");
  };
  console.log(adminData);
  return (
    <div className="flex item-center">
      <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-screen max-w-xl w-full hidden lg:flex flex-col pt-20 pl-10">
        <div className="text-white font-bold text-2xl">
          Make your journey truly incredible <br /> with us!
        </div>
      </div>
      <div className="flex flex-col justify-center h-[100vh] w-full max-w-lg mx-auto px-10">
        <div className="font-inter font-medium text-2xl md:text-[2rem] leading-[1.2] antialiased text-primary -tracking-[0.019em] md:-tracking-[0.021em]">
          Get Started
        </div>
        <div className="text-black text-xs">
          Create an Account to Begin Your Journey With Us
        </div>
        <div className="pt-6 w-full flex flex-col">
          <input
            type="text"
            name="adminName"
            id="adminName"
            placeholder="Name"
            onChange={handleInput}
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300  mb-4 placeholder:font-[350]"
          />
          <input
            type="email"
            name="adminEmail"
            id="adminEmail"
            placeholder="Email Address"
            onChange={handleInput}
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 mb-4 placeholder:font-[350]"
          />
          <input
            type="password"
            name="adminPassword"
            id="adminPassword"
            placeholder="Password"
            onChange={handleInput}
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 mb-4 placeholder:font-[350]"
          />
        </div>
        <div className="w-full">
          <Button
            className="cursor-pointer studio-primary-gradient font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group w-full"
            btnName="Signup"
            onClick={handleSubmit}
          />
          <div className="h-3 mt-3">
          {errorMessage &&  <div className="text-sm flex items-center gap-1 text-red-500 tracking-wide leading-3"> <CircleAlert size={15}/> {errorMessage}</div>}
        </div>
        </div>
      </div>
    </div>
  );
}

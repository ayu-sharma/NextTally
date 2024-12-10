import React, { useState } from "react";
import Button from "./ui/ButtonCmp";

export default function SignupCmp({ renderPage, signupData, setSignupData }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputs = () => {
    if (
      !signupData.adminName ||
      !signupData.adminEmail ||
      !signupData.adminPassword
    ) {
      setErrorMessage("Please enter all required fields");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(signupData.adminEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleClick = () => {
    if (handleInputs()) {
      renderPage();
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
    setErrorMessage("")
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
            onChange={handleInput}
            placeholder="Email Address"
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 mb-4 placeholder:font-[350]"
          />
          <input
            type="password"
            name="adminPassword"
            id="adminPassword"
            onChange={handleInput}
            placeholder="Password"
            className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 mb-4 placeholder:font-[350]"
          />
        </div>
        <div className="w-full">
          <Button
            className="cursor-pointer studio-primary-gradient font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group w-full"
            btnName="Next"
            onClick={handleClick}
          />
          {errorMessage && (
            <div className="text-red-500 text-xs">{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
}

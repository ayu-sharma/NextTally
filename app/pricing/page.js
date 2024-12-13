"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Slabpricing from "../../components/ui/Slabpricing";

export default function Pricing() {
  const [selected, setIsSelected] = useState("12 Months");

  const handleClick = (id) => {
    setIsSelected(id);
  };

  const designButton = (id) => {
    return id === selected ? "bg-black text-white" : "bg-none text-black";
  };

  const options = [
    { id: "12 Months", label: "12 Months" },
    { id: "6 Months", label: "6 Months" },
    { id: "3 Months", label: "3 Months" },
  ];

  
  return (
    <>
      <Navbar />
      <div className="my-12 px-4">
        <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
          <h1 className="text-slate-600 text-lg antialiased font-[450] uppercase tracking-widest">
            PRICING
          </h1>
          <p className="font-inter font-medium text-5xl md:text-7xl antialiased text-primary -tracking-[0.022em] mt-4 text-center">
            Calculate with confidence <br />
            <span className="website-color-scheme-text"> UNLOCK PRO.</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto my-16 w-full">
          <div className="grid grid-cols-3 max-w-fit border border-slate-500 rounded-lg overflow-hidden divide-x divide-slate-500">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleClick(option.id)}
                className={`px-6 py-2 text-xs md:text-sm md:-tracking-[0.006em] font-medium antialiased flex items-center justify-center capitalize ${designButton(
                  option.id
                )}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <Slabpricing selected={selected} />
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import logol from "../public/images/logol.svg";
import HandleModals from "../components/HandleModals";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (type) => {
    setSelectedMenu(type);
    toggleComponent();
  };
  const menuItems = [
    { label: "For Admin", action: () => handleMenuClick("Admin") },
    { label: "For User", action: () => handleMenuClick("User") },
  ];
 
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" flex flex-col justify-between ">
      <div className="">
        <Navbar menuItems={menuItems}/>
      </div>

      <div className="my-32 px-4">
        <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] -tracking-[0.022em] font-medium text-center leading-[1.1] whitespace-pre-wrap">
              <span>Effortlessly manage </span>
              <br />
              <span className="website-color-scheme-text">
                Taxes, Revenue and Profits{" "}
              </span>
            </h1>

            <h2 className="font-inter text-slate-800 font-[350] text-xl md:text-2xl -tracking-[0.017em] md:-tracking-[0.019em] antialiased max-w-5xl text-center mt-4 mx-auto">
              Streamline tax management with real-time tracking, reports, and
              controls to optimize revenue <br /> and compliance across
              locations.
            </h2>
          </div>
          <Link href="/AdminSignup">
            <button className="rounded-lg text-lg py-2 px-6 text-white font-bold hover:opacity-90 bg-black hover:bg-gray-900 flex items-center mx-auto">
              Get Started
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center max-w-5xl md:mx-auto gap-32 mt-32">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // 0.5 triggers at 50% of element in viewport
            variants={fadeVariants}
            transition={{ duration: 0.6 }}
            className="font-[450] md:text-6xl text-xl leading-[1.1] antialiased text-primary -tracking-[0.022em] text-center"
          >
            NextTally: Your theater's financial assistant,{" "}
            <span className="website-color-scheme-text">
              simplified
            </span>
            .
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[450] md:text-6xl text-xl leading-[1.1] antialiased text-primary -tracking-[0.022em] text-center"
          >
            Confident Theater Calculations
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeVariants}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-[450] md:text-6xl text-xl leading-[1.1] antialiased text-primary -tracking-[0.022em] text-center"
          >
            Profit, Loss, Tax-handled in a click.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeVariants}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-inter font-[450] text-lg md:text-5xl md:leading-[1.15] antialiased text-primary -tracking-[0.021em] md:-tracking-[0.022em] text-center"
          >
            Maximize Theater Financial Clarity.
          </motion.p>
        </div>
      </div>
      {/* Fullscreen Overlay when SigninAdmin is open */}
      <HandleModals
        toggleComponent={toggleComponent}
        isOpen={isOpen}
        selectedMenu={selectedMenu}
      />
    </div>
  );
}

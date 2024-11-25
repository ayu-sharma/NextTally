// "use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logol from "../public/images/logol.svg";
import Dropdownbtn from "../components/ui/Dropdownbtn";
import { HiMenu, HiX } from "react-icons/hi";
import modalclose from "../public/images/modalclose.svg";
import CloseButton from "./ui/closeButton";
const Navbar = ({menuItems}) => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  



  return (
    <>
      <nav className="p-4">
        <div
          className={`flex justify-between items-center md:pt-2 py-4 px-4 md:px-9`}
        >
          <div className="">
            <Image src={logol} alt="NextTally Logo" height={44} />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-between gap-7 space-x-4 text-sm">
            <Link href="/">
              <div className="text-black font-monospace">Home</div>
            </Link>
            <Link href="/howitworks">
              <div className="text-black font-monospace">How it Works</div>
            </Link>
            <Link href="/Pricing">
              <div className="text-black font-monospace">Pricing</div>
            </Link>
          </div>
          <div className="md:block hidden">
            <Dropdownbtn
              className="text-white bg-black px-4 py-2 rounded-md text-lg font-bold hover:bg-gray-900"
              buttonName="Login"
              menuItems={menuItems}
            />
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? <CloseButton /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white p-6 transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <HiX size={30} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 text-md mt-4">
          <Link href="/" onClick={toggleMenu}>
            <div className="text-black font-monospace hover:">Home</div>
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            <div className="text-black font-monospace">How it Works</div>
          </Link>
          <Link href="/pricing" onClick={toggleMenu}>
            <div className="text-black font-monospace">Pricing</div>
          </Link>
        </div>
        <Dropdownbtn
          className="text-white bg-black px-4 py-2 rounded-md text-lg  font-bold hover:bg-gray-900"
          buttonName="Login"
          menuItems={menuItems}
        />
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;

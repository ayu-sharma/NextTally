"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  HandCoins,
  LayoutDashboard,
  GitBranch,
  Settings,
  HandHelping,
  LogOut,
} from "lucide-react";
import AdminDashboardCmp from "../../components/ui/AdminDashboardCmp";
import TaxCalc from "../../components/ui/TaxCalc";
import logol from "../../public/images/logol.svg";
import { HiX, HiMenu } from "react-icons/hi";
const SidebarItem = ({ id, label, icon, isSelected, onClick }) => (
  <div
    onClick={() => onClick(id)}
    className={`flex items-center gap-3 cursor-pointer rounded-lg mx-4 my-1 py-2 px-6 ${
      isSelected
        ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
        : ""
    }`}
  >
    <div className={`p-1 rounded-md ${isSelected ? " text-white" : ""}`}>
      {icon}
    </div>
    <h1>{label}</h1>
  </div>
);

export default function AdminDashboard() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedOption = localStorage.getItem("selectedOption");
    if (storedOption) {
      setSelectedOption(storedOption);
    }
  }, []);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      router.push("/AdminLogin");
    } else {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false);
  }, [router]);

  useEffect(() => {
    localStorage.setItem("selectedOption", selectedOption);
  }, [selectedOption]);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };
  if (isCheckingAuth) return null;
  if (!isAuthenticated) return null;

  const renderContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return <AdminDashboardCmp />;
      case "Tax Calculation":
        return <TaxCalc />;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const sidebarItems = [
    { id: "Dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { id: "Tax Calculation", label: "Tax Calculation", icon: <HandCoins /> },
    { id: "Branch Details", label: "Branch Details", icon: <GitBranch /> },
    { id: "Settings", label: "Settings", icon: <Settings /> },
    { id: "Help Center", label: "Help Center", icon: <HandHelping /> },
  ];

  return (
    <div className="flex w-screen h-screen overflow-auto">
      {/* Sidebar */}
      <nav className='lg:hidden'>
      <button
              onClick={toggleButton}
              className="focus:outline-none pt-7 pl-4"
            >
              { isOpen ? "" : <HiMenu size={30} />}
            </button>
    </nav>
      <div className={`home-navbar-color min-h-screen w-[16rem] hidden lg:flex flex-col justify-between fixed`}>
        <div>
          <Image
            className="my-1 mt-3 mx-4 py-1"
            src={logol}
            alt="NextTally Logo"
            height={35}
          />


          {/* <div className="text-xs text-[#8B8686] my-1 mx-4 py-1">
            {selectedOption}
          </div> */}


          <div className="flex flex-col gap-4 mt-6">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                isSelected={selectedOption === item.id}
                onClick={setSelectedOption}
              />
            ))}
          </div>
        </div>
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 cursor-pointer rounded-lg mx-4 my-1 mb-3 py-1 px-6 hover:bg-transparent bg-black border-black border hover:border-black hover:border hover:text-black text-white"
        >
          <div className=" p-1 rounded-md">
            <LogOut />
          </div>
          <h1 className=" font-bold py-2">Logout</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow h-full lg:ml-[16rem] px-4">
        <div className="mt-3 w-full flex flex-col">
        <Image
            className="my-1 mt-3 mx-10 py-1 lg:hidden relative"
            src={logol}
            alt="NextTally Logo"
            height={35}
          />
        <div className="lg:block hidden">
          <div className="font-bold text-2xl ">Hey, Admin</div>
          <div className="text-xs text-[#959697]">{date}</div>
          </div>
          <div className="mt-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

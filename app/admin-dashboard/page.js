"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logol from "../../public/images/logol.svg";
import {
  HandCoins,
  LayoutDashboard,
  GitBranch,
  Settings,
  HandHelping,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import AdminDashboardCmp from "../../components/ui/Admindashboardcmp";
import TaxCalc from "../../components/ui/TaxCalc";

export default function AdminDashboard() {
  const [isSelectedOption, setIsSelectedOption] = useState(null);
  const [isClient, setIsClient] = useState(false); // Flag to check if client-side
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Set to true on client-side mount
  }, []);

  useEffect(() => {
    if (isClient) {
      // Only run if client-side
      const storedOption = localStorage.getItem("selectedOption");
      if (storedOption) {
        setIsSelectedOption(storedOption);
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("selectedOption", isSelectedOption);
    }
  }, [isSelectedOption, isClient]);

  const handleClick = (id) => {
    setIsSelectedOption(id);
  };

  const handlelogout = () => {
    localStorage.removeItem("selectedOption");
    router.push("/");
  };

  const renderElement = () => {
    switch (isSelectedOption) {
      case "Dashboard":
        return <AdminDashboardCmp />;
      case "Tax Calculation":
        return <TaxCalc />;
      default:
        return null;
    }
  };

  if (!isClient) return null; 

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="home-navbar-color min-h-screen w-[16rem] flex flex-col justify-between fixed">
        <div>
          <Image
            className="my-1 mt-3 mx-4 py-1"
            src={logol}
            alt="NextTally Logo"
            height={35}
          />
          <div className="text-xs text-[#8B8686] my-1 mx-4 py-1">
            {isSelectedOption}
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {[
              {
                id: "Dashboard",
                icon: <LayoutDashboard />,
                label: "Dashboard",
              },
              {
                id: "Tax Calculation",
                icon: <HandCoins />,
                label: "Tax Calculation",
              },
              {
                id: "Branch Details",
                icon: <GitBranch />,
                label: "Branch Details",
              },
              {
                id: "Settings",
                icon: <Settings />,
                label: "Settings",
              },
              {
                id: "Help Center",
                icon: <HandHelping />,
                label: "Help Center",
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`flex items-center gap-3 cursor-pointer rounded-lg mx-4 my-1 py-2 px-6 ${
                  isSelectedOption === item.id
                    ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
                    : ""
                }`}
              >
                <div
                  className={`p-1 rounded-md ${
                    isSelectedOption === item.id
                      ? "bg-[#EDF3F5] text-[#185FF6]"
                      : "bg-white"
                  }`}
                >
                  {item.icon}
                </div>
                <h1>{item.label}</h1>
              </div>
            ))}
          </div>
        </div>
        <div
          onClick={handlelogout}
          className="flex items-center gap-3 cursor-pointer rounded-lg mx-4 my-1 mb-3 py-1 px-6 bg-black hover:bg-[#212121]"
        >
          <div className="bg-white p-1 rounded-md">
            <LogOut />
          </div>
          <h1 className="text-white font-bold py-2">Logout</h1>
        </div>
      </div>
      <div className="flex-grow h-full overflow-y-auto ml-[16rem] px-4">
        {renderElement()}
      </div>
    </div>
  );
}

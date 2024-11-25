"use client";

import React, { useState, useEffect } from "react";
import Signup_cmp from "../../components/SignupCmp";
import Branch_cmp from "../../components/BranchCmp";
import Assign_mngr from "../../components/AssignMngr";
import Image from "next/image";
import logol from "../../public/images/logol.svg";
import signuplogo from "../../public/images/signup_logo.svg";
import adminSignup from "../api/authenticateadminapi";

export default function SignupAdmin() {
  const [page, setPage] = useState(1);
  const [signupData, setSignupData] = useState({
    adminName: "",
    adminEmail: "",
    adminPassword: "",
    branchName: "",
    branchLocation: "",
    managerName: "",
    managerEmail: "",
    managerPassword: "",
  });

  // Persist page state in localStorage
  useEffect(() => {
    const savedPage = localStorage.getItem("selectedPage");
    if (savedPage) {
      setPage(parseInt(savedPage, 10));
    }
    const handlePopState = () => localStorage.removeItem("selectedPage");
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedPage", page);
  }, [page]);

  const addSignupDetails = async () => {
    try {
      const response = await adminSignup(signupData);
      if (!response.error) {
        console.log("Signup successful");
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("adminName", response.admin.name);
        resetSignupFlow();
      } else {
        console.error("Signup failed", response.message);
      }
    } catch (err) {
      console.error("Error during signup:", err);
    }
  };

  const resetSignupFlow = () => {
    localStorage.removeItem("selectedPage");
    setPage(1);
  };

  const renderPage = () => {
    setPage((prev) => (prev < 3 ? prev + 1 : 1));
  };

  const isActive = (currentPage) =>
    page === currentPage
      ? "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white"
      : "";

  const SidebarItem = ({ label, currentPage }) => (
    <div
      className={`flex flex-row items-center gap-3 cursor-pointer rounded-lg mx-4 my-2 py-2 px-6 ${isActive(
        currentPage
      )}`}
    >
      <Image
        className="bg-white p-2 rounded-md"
        src={signuplogo}
        alt={`${label} Logo`}
        height={30}
        width={30}
      />
      <h1>{label}</h1>
    </div>
  );

  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col w-full">
        <div className="flex-1 flex items-center flex-row w-full">
          {/* Sidebar */}
          <div className="home-navbar-color h-screen w-full max-w-[16rem]">
            <div className="py-4">
              <Image
                className="pl-6"
                src={logol}
                alt="NextTally Logo"
                height={38}
              />
              <div className="flex flex-col mt-10 gap-3">
                <SidebarItem label="Admin Signup" currentPage={1} />
                <SidebarItem label="Branch Details" currentPage={2} />
                <SidebarItem label="Assign Manager" currentPage={3} />
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="flex flex-col w-full md:px-4 px-4 max-w-md mx-auto">
            {page === 1 && (
              <Signup_cmp
                renderPage={renderPage}
                signupData={signupData}
                setSignupData={setSignupData}
              />
            )}
            {page === 2 && (
              <Branch_cmp
                renderPage={renderPage}
                signupData={signupData}
                setSignupData={setSignupData}
              />
            )}
            {page === 3 && (
              <Assign_mngr
                renderPage={renderPage}
                signupData={signupData}
                setSignupData={setSignupData}
                addSignupDetails={addSignupDetails}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

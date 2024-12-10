"use client";

import React, { useState, useEffect } from "react";
import Signup_cmp from "../../components/SignupCmp";
import Branch_cmp from "../../components/BranchCmp";
import Assign_mngr from "../../components/AssignMngr";
import adminSignup from "../api/authenticateadminapi";
import AdminSignupBar from "../../components/ui/AdminSignupBar";
import { useRouter } from "next/navigation";
import AuthSpinner from "../../components/ui/AuthSpinner";

export default function SignupAdmin() {
  const [page, setPage] = useState(1);
  const[isLoading, setIsLoading] = useState(false)
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
  const router = useRouter();
  const addSignupDetails = async () => {
    setIsLoading(true)
    try {
      const response = await adminSignup(signupData);
      if (!response.error) {
        console.log("Signup successful");
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("adminName", response.admin.name);
        resetSignupFlow();
        setIsLoading(false);
        router.push("/AdminDashboard");
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
  if (isLoading) {
    return <div><AuthSpinner/></div>;
  }
  
  return (
    <div className="flex flex-col">
      <AdminSignupBar
      page = {page}
      setPage = {setPage}
      />
      <div className="flex flex-col w-full md:px-4 px-4 max-w-lg mx-auto">
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
  );
}

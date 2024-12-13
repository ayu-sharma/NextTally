"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Signup_cmp from "../../components/SignupCmp";
import Branch_cmp from "../../components/BranchCmp";
import Assign_mngr from "../../components/AssignMngr";
import AdminSignupBar from "../../components/ui/AdminSignupBar";
import AuthSpinner from "../../components/ui/AuthSpinner";
import adminSignup from "../api/authenticateadminapi";

export default function SignupAdmin() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  const resetSignupFlow = () => {
    sessionStorage.removeItem("page");
    setPage(1);
    setSignupData({
      adminName: "",
      adminEmail: "",
      adminPassword: "",
      branchName: "",
      branchLocation: "",
      managerName: "",
      managerEmail: "",
      managerPassword: "",
    });
  };

  const addSignupDetails = async () => {
    setIsLoading(true);
    setErrorMessage("");
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
        setErrorMessage(response.message || "Signup failed. Please try again.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setErrorMessage("An error occurred during signup. Please try again.");
      setIsLoading(false);
    }
  };

  const renderPage = () => {
    const newPage = page < 3 ? page + 1 : 1;
    sessionStorage.setItem("page", newPage);
    setPage(newPage);
  };

  useEffect(() => {
    const savedPage = sessionStorage.getItem("page");
    if (savedPage) {
      setPage(parseInt(savedPage));
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <AuthSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <AdminSignupBar page={page} setPage={(newPage) => {
        sessionStorage.setItem("page", newPage);
        setPage(newPage);
      }} />
      <div className="flex flex-col w-full md:px-4 px-4 max-w-lg mx-auto">
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
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

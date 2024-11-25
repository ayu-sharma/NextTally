import React, { useState } from "react";
import Button from "./ButtonCmp";
import Image from "next/image";
import close from "../../public/images/modalclose.svg";
import { useRouter } from "next/navigation";
import { adminLogin } from "../../app/api/authenticateadminapi";

export default function Signin_admin({ onClose }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await adminLogin(details);
      console.log(response);
      if (!error.success) {
        console.log("Logged In Successfully", response);
        onClose();
        router.push("/admin-dashboard");
      } else {
        setError(response.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="absolute top-4 right-4 md:top-4 md:right-4 p-2 cursor-pointer hover:bg-neutral-100 rounded-lg z-10 bg-white"
        onClick={onClose}
      >
        <Image src={close} alt="Admin Signin Button" />
      </div>
      <div className="w-full overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="flex-1 items-start flex flex-row w-full">
            <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-[33rem] max-w-xl w-full flex flex-col pt-20 pl-10">
              <div className="text-white font-bold text-2xl">
                The Simplest way to manage <br /> your revenue
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:pt-24 pt-16 lg:px-20 px-10">
              <div className="font-inter font-medium text-2xl md:text-[2rem] leading-[1.2] antialiased text-primary -tracking-[0.019em] md:-tracking-[0.021em] ">
                Access Your Dashboard
              </div>
              <div className="text-black text-xs">
                Enter your credentials to access your account
              </div>
              <div className="pt-6 w-full flex flex-col">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  value={details.email}
                  placeholder="Email Address.."
                  className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
                />

                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInput}
                  value={details.password}
                  placeholder="Password"
                  className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
                />
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <Button
                onClick={handleLogin}
                disabled={loading}
                className="cursor-pointer studio-primary-gradient font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group w-full"
                btnName={loading ? "Logging in..." : "Login"}
              />
              <div className="text-black font-light text-xs mt-2">
                Don&apos;t have an account yet? No problem!{" "}
                <a className="text-blue-700" href="/signup">
                  Create one now
                </a>
                .
              </div>
              <a href="/forgot-password" className="font-light text-xs mt-1 text-blue-700">
                Forgotten Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

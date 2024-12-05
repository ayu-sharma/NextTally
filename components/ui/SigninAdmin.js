import React, { useState } from "react";
import Button from "./ButtonCmp";
import Image from "next/image";
import close from "../../public/images/modalclose.svg";
import { useRouter } from "next/navigation";
import { adminLogin } from "../../app/api/authenticateadminapi";
import { EyeOff, Eye } from "lucide-react";

export default function SigninAdmin({ onClose }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    if (error) setError("");
  };

  const handleLogin = async () => {
    if (!details.email || !details.password) {
      setError("Email and password are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(details.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const response = await adminLogin(details);
      console.log("tihs is this", response.success);
      if (response.success) {
        localStorage.setItem("authToken", response.token);
        await router.push("/AdminDashboard");
        onClose();
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {

    }
  };


  
  isFinite();
  return (
    <>
      <div
        className="absolute top-4 right-4 md:top-4 md:right-4 p-2 cursor-pointer hover:bg-neutral-100 rounded-lg z-10 bg-white"
        onClick={onClose}
        aria-label="Close Sign-In Modal"
      >
        <Image src={close} alt="Close" />
      </div>

      <div className="w-full overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="flex-1 items-start flex flex-row w-full">
            <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-[33rem] max-w-xl w-full hidden lg:flex flex-col pt-20 pl-10">
              <div className="text-white font-bold text-2xl">
                The Simplest way to manage <br /> your revenue
              </div>
            </div>

            <div className="flex flex-col justify-center w-full lg:pt-24 py-16 lg:px-20 px-10">
              <div className="font-inter font-medium text-2xl md:text-[2rem] leading-[1.2] antialiased text-primary">
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
                  className="w-full px-6 rounded-lg text-primary font-normal py-3 border border-slate-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 mb-4 placeholder-gray-400"
                  aria-label="Email Address"
                />
                <div className="relative inline-block">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={handleInput}
                    value={details.password}
                    placeholder="Password"
                    className="w-full px-6 pr-10 rounded-lg text-primary font-normal py-3 border border-slate-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 mb-1 placeholder-gray-400"
                    aria-label="Password"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className={`absolute right-3 top-[25%] cursor-pointer translate-Y-[-50%] ${
                      showPassword ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </span>
                </div>
              </div>
              <div className="h-6">
                {error && <div className="text-red-500 text-xs">{error}</div>}
              </div>

              <Button
                onClick={handleLogin}
                disabled={loading}
                className="studio-primary-gradient text-white font-medium rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center w-full"
                btnName={loading ? "Logging in..." : "Login"}
                aria-label="Login Button"
              />

              <div className="text-black font-light text-xs mt-2">
                Don&apos;t have an account yet? No problem!{" "}
                <a className="text-blue-700" href="/signup">
                  Create one now
                </a>
                .
              </div>
              <a
                href="/forgot-password"
                className="font-light text-xs mt-1 text-blue-700"
              >
                Forgotten Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import react from "react";
import Button from "./ButtonCmp";
import Image from "next/image";
import googlelogo from "../../public/images/googlelogo.svg";
import close from "../../public/images/modalclose.svg";
import Link from "next/link";
export default function Signin_admin({ onClose }) {
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
          <div className="flex-1 flex items-start flex-row w-full">
            <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-screen max-w-xl w-full flex flex-col justify-center items-center">
              <div className="text-white font-bold text-2xl">Come Join Us</div>
              <div className="text-white font-normal text-md text-center px-5">
                Streamline tax management across locations with our unified
                platform. Enjoy real-time tracking, comprehensive reporting, and
                robust control to optimize revenue and boost profitability.
              </div>
              <div>
                <button className="bg-white text-black text-sm py-2.5 rounded-lg mt-4 px-5 cursor-default">
                  Already have an account?{" "}
                  <span onClick={{}} className="text-blue-600 cursor-pointer">
                    {" "}
                    Login here
                  </span>
                  .
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full pt-24 lg:px-20 px-10">
              <div className="text-2xl font-bold">Get Started</div>
              <div className="text-black text-xs">
                Create an Account to Begin Your Journey With Us
              </div>
              <div className="pt-6 w-full flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 border-gray-300 rounded-md py-2.5 px-6 w-full mt-1 text-xs"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-2 border-gray-300 rounded-md py-2.5 px-6 w-full text-xs mt-4"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="border-2 border-gray-300 rounded-md py-2.5 px-6 w-full mt-4 text-xs"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border-2 border-gray-300 rounded-md py-2.5 px-6 w-full text-xs mt-4"
                />
              </div>
              <div className="w-full">
                <Link href="/setting-manager" className="w-full">
                  <Button
                    className="rounded-lg text-sm py-2.5 px-4 text-white mt-5 font-bold hover:opacity-90 max-w-lg w-full"
                    btnName="Signup"
                  />
                </Link>
              </div>
              <div className=" relative w-full h-0 border border-gray-300 border-opacity-60 transform -rotate-0.5 mt-14">
                <div className="relative flex justify-center">
                  <div className="absolute bg-white p-2 -top-5">Or</div>
                </div>
              </div>
              <div className="flex justify-center cursor-pointer hover:bg-neutral-100 items-center px-4 py-1 border rounded-xl mx-auto mt-9 gap-2">
                <div>
                  <Image src={googlelogo} alt="Google Logo Image" />
                </div>
                <div className="text-sm">Log in with Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

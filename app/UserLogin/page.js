import react from "react";
import Button from "../../components/ui/ButtonCmp";
// import { Image } from 'next/image';
export default function Signin_admin({ onClose }) {
  return (
    <>
      <div className="w-full overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="flex-1 items-center flex flex-row w-full">
            <div className="hidden md:flex bg-gradient-to-b from-[#185FF6] to-[#1B45A6] h-[38rem] max-w-xl w-full flex-col pt-20 pl-10">
              <div className="font-inter font-semibold md:text-[2rem] leading-[1.2] antialiased text-primary -tracking-[0.019em] md:-tracking-[0.021em] text-white ">
                Effortless Revenue Management <br /> Made Simple
              </div>
            </div>
            <div className="flex flex-col relative items-start max-w-md mx-auto justify-center w-full h-full py-12 px-4">
              <div className="font-inter font-medium text-2xl md:text-[2rem] leading-[1.2] antialiased text-primary -tracking-[0.019em] md:-tracking-[0.021em] ">
                Access Theater Operations
              </div>
              <div className="text-black text-xs">
                Enter you credentials to access your account
              </div>
              <div className="mt-10 w-full flex flex-col">
                <input
                  type="email"
                  placeholder="Email Address.."
                  className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-6 rounded-lg antialiased text-primary font-normal focus:outline-none py-3 border border-slate-300 focus:border-studio-gradient-start/60 focus:ring-1 focus:ring-studio-gradient-start/60 mb-4 placeholder:font-[350]"
                />
              </div>
              <div className="w-full">
                <Button
                  className="cursor-pointer studio-primary-gradient font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group w-full"
                  btnName="Login"
                />
              </div>
              <div className="text-black font-bold text-xs mt-1">
                Don&apos;t have an account yet? No problem!{" "}
                <a className="text-blue-700" href="#">
                  Create one now
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

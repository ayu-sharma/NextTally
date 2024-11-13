import React from "react";

export default function Slabpricing({ selected }) {
  return (
    <div className="w-full">
      {selected === "12 Months" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] rounded-2xl p-0.5 relative">
              <div className="bg-[#E1E9EF] p-8 rounded-[0.875rem] w-full h-full">
                <div className="md:h-[7rem]">
                  <h1 className="antialiased font-semibold text-lg -tracking-[0.014em] bg-gradient-to-b from-[#185FF6] to-[#1B45A6] bg-clip-text box-decoration-clone text-transparent">
                    PRO
                  </h1>
                  <p className="mt-2 text-primary antialiased font-semibold text-2xl -tracking-[0.019em]">
                    XXXX
                  </p>
                  <p className="mt-1 text-base text-primary antialiased font-normal -tracking-[0.011em]">
                    xxx/m
                  </p>
                </div>
                <button className="cursor-pointer website-color-scheme font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group mt-3 w-full">
                  Unlock PRO
                </button>
              </div>
            </div>
            <div className="bg-gray-400 rounded-2xl p-0.5 relative">
              <div className="bg-[#E1E9EF] p-8 rounded-[0.875rem] w-full h-full">
                <div className="md:h-[7rem]">
                  <h1 className="antialiased font-semibold text-lg -tracking-[0.014em] box-decoration-clone">FREE</h1>
                </div>
                <button className="cursor-pointer border-black border font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-black font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group mt-3 w-full hover:bg-black hover:text-white">
                  Get Started for Free
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {selected === "6 Months" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] rounded-2xl p-0.5 relative">
              <div className="bg-[#E1E9EF] p-8 rounded-[0.875rem] w-full h-full">
                <div className="md:h-[7rem]">
                  <h1 className="antialiased font-semibold text-lg -tracking-[0.014em] bg-gradient-to-b from-[#185FF6] to-[#1B45A6] bg-clip-text box-decoration-clone text-transparent">
                    PRO
                  </h1>
                  <p className="mt-2 text-primary antialiased font-semibold text-2xl -tracking-[0.019em]">
                    XXXX
                  </p>
                  <p className="mt-1 text-base text-primary antialiased font-normal -tracking-[0.011em]">
                    xxx/m
                  </p>
                </div>
                <button className="cursor-pointer website-color-scheme font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group mt-3 w-full">
                  Unlock PRO
                </button>
              </div>
            </div>
            <div className="bg-gray-400 rounded-2xl p-0.5 relative">
              <div className="bg-[#E1E9EF] p-8 rounded-[0.875rem] w-full h-full">
                <div className="md:h-[7rem]">
                  <h1 className="antialiased font-semibold text-lg -tracking-[0.014em] box-decoration-clone">FREE</h1>
                </div>
                <button className="cursor-pointer border-black border font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-black font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group mt-3 w-full hover:bg-black hover:text-white">
                  Get Started for Free
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {selected === "3 Months" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-gradient-to-b from-[#185FF6] to-[#1B45A6] rounded-2xl p-0.5 relative">
              <div className="bg-[#E1E9EF] p-8 rounded-[0.875rem] w-full h-full">
                <div className="md:h-[7rem]">
                  <h1 className="antialiased font-semibold text-lg -tracking-[0.014em] bg-gradient-to-b from-[#185FF6] to-[#1B45A6] bg-clip-text box-decoration-clone text-transparent">
                    PRO
                  </h1>
                  <p className="mt-2 text-primary antialiased font-semibold text-2xl -tracking-[0.019em]">
                    XXXX
                  </p>
                  <p className="mt-1 text-base text-primary antialiased font-normal -tracking-[0.011em]">
                    xxx/m
                  </p>
                </div>
                <button className="cursor-pointer website-color-scheme font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-white font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group mt-3 w-full">
                  Unlock PRO
                </button>
              </div>
            </div>
            <div className="bg-gray-400 rounded-2xl p-0.5 relative">
              <div className="bg-[#E1E9EF] p-8 rounded-[0.875rem] w-full h-full">
                <div className="md:h-[7rem]">
                  <h1 className="antialiased font-semibold text-lg -tracking-[0.014em] box-decoration-clone">FREE</h1>
                </div>
                <button className="cursor-pointer border-black border font-inter text-sm md:text-base -tracking-[0.006em] md:-tracking-[0.011em] text-black font-medium antialiased rounded-lg py-2.5 px-6 md:px-8 flex items-center justify-center group mt-3 w-full hover:bg-black hover:text-white">
                  Get Started for Free
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

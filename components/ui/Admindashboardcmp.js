import React from "react";
import { Theater } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { Album } from "lucide-react";
import { Percent } from "lucide-react";
import { VenetianMask } from 'lucide-react';
export default function adminDashboardCmp() {
  
  return (
    <>
      <div className="">
        <div className="mt-16 px-5 py-4 bg-[#f8f9f9] rounded-lg flex gap-2 items-center">
          <div className="rounded-full bg-[#EDF3F5] p-2 border-[.25px] border-[#8B8686]">
            <VenetianMask/>
          </div>
        <div>
        <p className="text-md font-semibold ">Powering Your Finances, One Tally at a Time – Simplify, Track, and Grow with NextTally!</p>
        <p className="text-xs pt-2">Unlock seamless financial insights and make every tally count.</p>
</div>
        </div>
        
        <div className="flex flex-wrap gap-5 w-full mt-12">
          {[
            {
              title: "Theaters",
              value: 0,
              icon: <Theater />,
            },
            {
              title: "Movies",
              value: 0,
              icon: <Clapperboard />,
            },
            {
              title: "Bookings",
              value: 0,
              icon: <Album />,
            },
            {
              title: "Revenue",
              value: 0,
              icon: <Percent />,
            },
          ].map((items) => (
            <div
              key={items.id}
              className="bg-[#f8f9f9] w-full max-w-xs mx-auto px-7 rounded-xl py-5 pb-3"
            >
              <p className="pb-5">{items.title}</p>
              <div className="flex gap-3 items-center">
                <div className="bg-[#EDF3F5] rounded-full p-2 border-[#8B8686] border-[.25px]">
                  {items.icon}
                </div>
                <p className="text-2xl font-bold">{items.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-evenly flex-wrap gap-6 w-full my-12">
          <div className="flex flex-col justify-between gap-6 max-w-md rounded-lg bg-gradient-to-b from-[#F8F8F8] to-[#F4F8F7] w-full p-4">
            <div className="bg-white px-3 py-2 rounded-lg">hi</div>
            <div className="bg-white px-3 py-2 rounded-lg">hi</div>
            <div className="bg-white px-3 py-2 rounded-lg">hi</div>
            <div className="bg-white px-3 py-2 rounded-lg">hi</div>
          </div>
          <div className="rounded-lg bg-gradient-to-b from-[#F8F8F8] to-[#F4F8F7]  max-w-md w-full flex justify-center items-center">
            Coming Soon!
          </div>
        </div>
      </div>
    </>
  );
}
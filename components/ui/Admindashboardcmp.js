import React from "react";
import { Theater } from "lucide-react";
import { Clapperboard } from "lucide-react";
export default function adminDashboardCmp() {
  return (
    <>
      <div className="mt-3 w-full">
        <div className="font-bold text-2xl">Hey, Admin</div>
        <div className="text-xs text-[#959697]">Month Date, Day</div>
        <div className="flex gap-8 w-full mt-20">
          <div className="bg-[#F8F9FA] w-full max-w-xs px-4 rounded-xl py-5 pb-3">
            <p className="pb-5">Total Theaters</p>
            <div className="flex gap-3 items-center">
              <div className="bg-[#EDF3F5] rounded-full p-3 border-[#8B8686] border-[.25px]">
                <Theater />
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
          <div className="bg-[#F8F9FA] max-w-xs w-full px-4 rounded-xl py-5 pb-3">
            <p className="pb-5">Total Movies</p>
            <div className="flex gap-3 items-center">
              <div className="bg-[#EDF3F5] rounded-full p-3 border-[#8B8686] border-[.25px]">
                <Clapperboard />
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
          <div className="bg-[#F8F9FA] max-w-xs w-full px-4 rounded-xl py-5 pb-3">
            <p className="pb-5">Total Bookings</p>
            <div className="flex gap-3 items-center">
              <div className="bg-[#EDF3F5] rounded-full p-3 border-[#8B8686] border-[.25px]">
                <Theater />
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
          <div className="bg-[#F8F9FA] max-w-xs w-full px-4 rounded-xl py-5 pb-3">
            <p className="pb-5">Total Revenue</p>
            <div className="flex gap-3 items-center">
              <div className="bg-[#EDF3F5] rounded-full p-3 border-[#8B8686] border-[.25px]">
                <Theater />
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 max-w-md rounded-lg bg-gradient-to-b from-[#F8F8F8] to-[#F4F8F7] w-full mt-12 p-4">
          <div className="bg-white px-3 py-2 rounded-lg">hi</div>
          <div className="bg-white px-3 py-2 rounded-lg">hi</div>
          <div className="bg-white px-3 py-2 rounded-lg">hi</div>
          <div className="bg-white px-3 py-2 rounded-lg">hi</div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Theater } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { Album } from "lucide-react";
import { Percent } from "lucide-react";
import { VenetianMask } from "lucide-react";
export default function adminDashboardCmp() {
  return (
    <>
      <div className="">
        <div className="mt-16 px-5 py-4 bg-[#f8f9f9] rounded-lg flex gap-2 items-center">
          <div className="rounded-full bg-[#EDF3F5] p-2 border-[.25px] border-[#8B8686]">
            <VenetianMask />
          </div>
          <div>
            <p className="text-md font-semibold ">
              Powering Your Finances, One Tally at a Time – Simplify, Track, and
              Grow with NextTally!
            </p>
            <p className="text-xs pt-2">
              Unlock seamless financial insights and make every tally count.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 w-full mt-12">
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
              className="bg-[#f8f9f9] mx-auto px-7 w-full rounded-xl py-5 pb-3"
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
        <div className=" my-9">
          <div className="flex flex-col overflow-hidden h-[21rem] justify-between gap-6 max-w-md rounded-lg bg-gradient-to-b from-[#F8F8F8] to-[#F4F8F7] w-full p-4">
            <div className="text-semibold leading-4 px-3 ">On going Movies</div>
            {[
              {
                icon: "",
                movieName: "Jab we met",
                comment: "Top performing movie this week",
              },
              {
                icon: "",
                movieName: "Avengers: Endgame",
                comment: "Revenue better than yesterday",
              },
              {
                icon: "",
                movieName: "The Avengers",
                comment: "Great performance",
              },
            ].map((movies) => (
              <div className="bg-gradient-to-b from-[#F8F8F8] to-[#F4F8F7] shadow-md px-3 py-4 rounded-lg">
                <div className="flex">
                  <div className="">{movies.icon}</div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">{movies.movieName}</p>
                    <p className="text-xs">{movies.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex flex-col">
          <div className="rounded-lg bg-gradient-to-b from-[#F8F8F8] to-[#F4F8F7]  max-w-lg w-full flex justify-center items-center">
            Coming Soon!
          </div>
          <div>
            Top perrformance
          </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

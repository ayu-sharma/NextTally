import React from "react";
export default function AdminSignupBar({page, setPage}) {

  const isActive = (currentPage) => {
    if (page === currentPage) {
      return "bg-[#185FF6] ease-linear text-white transition-all duration-1000"
    }
    if(page > currentPage) {
        return "bg-gradient-to-b from-[#185FF6] to-[#1B45A6] text-white transition-all duration-500"
    }
    else
    return "bg-[#EDF3F5] text-gray-500"
  }
  const SidebarItem = ({ label, currentPage }) => (
    <div
      className={`flex flex-row items-center gap-3 cursor-pointer rounded-2xl my-2 py-2 px-6 ${isActive(
        currentPage
      )}`}
    >
      <h1>{label}</h1>
    </div>
  );
  const steps = 3; 
  const percentage = ((page - 1) / (steps - 1)) * 100;
  return (
    <>
      <div className="flex justify-between items-center mx-8 mt-4 relative">
      <div className="h-0.5 w-full bg-gray-300 absolute mx-auto z-[-1]">
          <div
            className="h-0.5 bg-gradient-to-b from-[#185FF6] to-[#1B45A6] absolute z-10 transition-all duration-100"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <SidebarItem label="Admin Signup" currentPage={1} />
        <SidebarItem label="Branch Details" currentPage={2} />
        <SidebarItem label="Assign Manager" currentPage={3} />
        </div>
    </>
  );
}

import React from "react";
import { Button } from "@headlessui/react";

export default function ButtonCmp({ btnName, className, style, onClick }) {
  return (
    <div>
      <Button
        style={{ backgroundColor: "black", ...style }}
        className={`bg-gradient-to-r from-[#185FF6] to-[#1B45A6] via-[#185FF6] bg-[18%_91%] ${className}`}
        onClick={onClick}
      >
        {btnName}
      </Button>
    </div>
  );
}

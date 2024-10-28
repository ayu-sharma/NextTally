import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function check_ScreenSize(redirectPath) {
  const [isScreenLarge, setIsScreenLarge] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setIsScreenLarge(true);
      } else {
        setIsScreenLarge(false);
        router.push(redirectPath);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [router, redirectPath]);

  return isScreenLarge;
}

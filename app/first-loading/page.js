"use client";

import { useTheme } from "next-themes";
import LogoSepsupriatnaaWhite from "/public/images/sepsupriatnaa_white.png";
import LogoSepsupriatnaa from "/public/images/favicon.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const LoadingFirst = () => {
  const [showLogo, setShowLogo] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000);
  }, []);

  return (
    <>
      {showLogo && (
        <div
          className={`${
            theme === "dark" ? "dark:bg-slate-900" : 0
          } flex justify-center items-center overflow-hidden w-full h-screen fixed bg-slate-100
           z-[999999]`}
        >
          <div className="animate-spin">
            {theme === "light" ? (
              <Image
                src={LogoSepsupriatnaa}
                alt="sepsupriatna logo"
                width={60}
              />
            ) : (
              ""
            )}
            {theme === "dark" ? (
              <Image
                src={LogoSepsupriatnaaWhite}
                alt="sepsupriatna logo"
                width={60}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingFirst;

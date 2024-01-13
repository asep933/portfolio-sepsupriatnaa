"use client";

import LogoSepsupriatnaaWhite from "/public/images/sepsupriatnaa_white.png";
import LogoSepsupriatnaa from "/public/images/favicon.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const LoadingFirst = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [logoBig, setLogoBig] = useState(false);

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
            showLogo ? "dark:bg-slate-900" : 0
          } flex justify-center items-center overflow-hidden w-full h-screen fixed bg-slate-100
           z-[999999]`}
        >
          <div className="animate-spin">
            {showLogo ? (
              <Image
                src={LogoSepsupriatnaa}
                alt="sepsupriatna logo"
                width={60}
              />
            ) : (
              ""
            )}
            {/* {showLogo ? (
              <Image
                src={LogoSepsupriatnaaWhite}
                alt="sepsupriatna logo"
                width={60}
              />
            ) : (
              ""
            )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingFirst;

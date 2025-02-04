"use client";

import { Bebas_Neue } from "next/font/google";
import { useState, useEffect } from "react";
import ButtonMusic from "../components/button-music/page";
import Logo from "../components/Logo";
import Humberger from "../components/Humberger";
import MenuMobile from "../components/MenuMobile";
import MenuPc from "../components/MenuPc";

const bebas_neue = Bebas_Neue({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const [addHumberger, setAddHumberger] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleAnimate = () => {
    setAddHumberger(!addHumberger);
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    if (addHumberger && showMenu) {
      setAddHumberger(false);
      setShowMenu(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.querySelector("#menu");
      const hamburgerButton = document.querySelector("#humberger");

      if (
        !menuElement.contains(event.target) &&
        !hamburgerButton.contains(event.target)
      ) {
        handleClose();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [addHumberger, showMenu]);

  return (
    <nav>
      <div
        className={`bg-nav shadow-nav fixed z-50 w-full text-primary backdrop-blur-md dark:bg-slate-200 
        dark:bg-opacity-75`}
      >
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-around">
          <div className="flex items-center gap-3 max-[820px]:gap-1">
            {/* button music start*/}
            <ButtonMusic />
            {/* button music end*/}

            {/* logo */}
            <Logo bebas_neue={bebas_neue} />
            {/* logo */}
          </div>

          <div className="flex items-center gap-3 max-[820px]:gap-1">
            {/* humberger */}
            <Humberger
              addHumberger={addHumberger}
              handleAnimate={handleAnimate}
            />
            {/* humberger */}

            {/* Menu Pc Start */}
            <MenuPc handleClose={handleClose} />
            {/* Menu Pc end */}
          </div>
        </div>
        {/* Menu Mobile start */}
        <MenuMobile showMenu={showMenu} handleClose={handleClose} />
        {/* Menu Mobile end */}
      </div>
    </nav>
  );
};

export default Navbar;

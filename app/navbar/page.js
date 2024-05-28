"use client";

import { Bebas_Neue } from "next/font/google";
import { useState, useEffect, use } from "react";
import GitHub from "../components/link-github/page";
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
  const [scrollTop, setScrollTop] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
    return  setScrollTop(document.documentElement.scrollTop);
    
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop]);

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
        className={`${scrollTop > 30 ? "bg-nav" : ""} shadow-nav fixed z-50 w-full dark:bg-slate-200 
        dark:bg-opacity-75`}
      >
        <div className="flex w-full items-center justify-around">
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

            {/* Link ke GitHub start */}
            <GitHub />
            {/* Link ke GitHub end */}
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

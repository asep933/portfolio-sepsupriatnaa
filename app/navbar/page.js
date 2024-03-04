"use client";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { useState, useEffect } from "react";
import GitHub from "../components/link-github/page";
import ToggleDark from "../components/toggle-dark/page";
import ButtonMusic from "../components/button-music/page";

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
        className="bg-nav shadow-nav fixed z-50 flex
      w-full items-center bg-transparent p-2 backdrop-blur-sm dark:bg-slate-200 dark:bg-opacity-75 lg:justify-between"
      >
        {/* button music start*/}
        <ButtonMusic />
        {/* button music end*/}

        {/* logo */}
        <div className="ml-5 block px-4 text-2xl text-green-900 lg:absolute lg:-left-10 lg:ml-40">
          <Link className={`mx-5 ${bebas_neue.className}`} href={"/"}>
            sepsupriatn
            <span className="text-orange-400 dark:text-orange-500">aa</span>
          </Link>
        </div>
        {/* logo */}

        {/* humberger */}
        <div
          id="humberger"
          className="absolute right-0 flex scale-150 transform items-center px-4 lg:hidden"
        >
          <button
            onClick={handleAnimate}
            id="humberger"
            className="mr-4 space-y-1"
          >
            <span
              className={`humberger-line origin-top-left transition duration-300 ease-in-out dark:bg-slate-600 ${
                addHumberger ? "rotate-45" : ""
              }`}
            ></span>
            <span
              className={`humberger-line transition  duration-300 ease-in-out dark:bg-slate-600 ${
                addHumberger ? "scale-0" : ""
              }`}
            ></span>
            <span
              className={`humberger-line origin-bottom-left  transition duration-300 ease-in-out dark:bg-slate-600 ${
                addHumberger ? "-rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
        {/* humberger */}

        {/* Link ke GitHub start */}
        <GitHub />
        {/* Link ke GitHub end */}

        {/* Menu Mobile start */}
        <div
          id="menu"
          className={`${
            showMenu ? "scale-100" : 0
          } t-10 absolute right-5 top-16 z-20 w-2/4 scale-0 rounded-lg bg-slate-100 bg-opacity-75 p-10 shadow-lg backdrop-blur-md
              transition duration-500 ease-in-out dark:bg-slate-400 dark:bg-opacity-90 dark:text-white lg:right-32 lg:top-0 lg:flex lg:justify-end lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <div className="flex flex-col items-center justify-center space-y-4 font-normal lg:mt-3 lg:block lg:translate-x-8 lg:space-x-5">
            <Link
              onClick={handleClose}
              id="linkMenu"
              className=" hover:text-orange-500 dark:hover:text-slate-900 lg:hidden"
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className="hover:text-orange-500 dark:hover:text-slate-900 lg:hidden"
              href={"/about"}
            >
              About
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className="hover:text-orange-500 dark:hover:text-slate-900 lg:hidden"
              href={"/portfolio"}
            >
              Portfolio
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className=" hover:text-orange-500 dark:hover:text-slate-900 lg:hidden"
              href={"/blog"}
            >
              Blog
            </Link>
            <div className="lg:hidden">
              <ToggleDark />
            </div>
          </div>
        </div>
        {/* Menu Mobile end */}

        {/* Menu Pc Start */}
        <div
          id="menu"
          className="t-10 relative right-5 top-16 z-20 hidden w-2/4 rounded-lg bg-slate-100 p-10 shadow-lg transition
              duration-300 ease-in-out lg:right-32 lg:top-0 lg:ml-[50.5rem] lg:flex lg:justify-end lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none"
        >
          <div className="pb-3 dark:text-black lg:mt-3 lg:flex lg:translate-x-8 lg:items-center lg:space-x-5 lg:font-normal">
            <Link
              onClick={handleClose}
              id="linkMenu"
              className="hover:text-orange-500 dark:hover:text-slate-50"
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className="hover:text-orange-500 dark:hover:text-slate-50"
              href={"/about"}
            >
              About
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className="hover:text-orange-500 dark:hover:text-slate-50"
              href={"/portfolio"}
            >
              Portfolio
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className=" hover:text-orange-500 dark:hover:text-slate-50"
              href={"/blog"}
            >
              Blog
            </Link>

            <div className="hidden lg:block">
              <ToggleDark />
            </div>
          </div>
        </div>
        {/* Menu Pc end */}
      </div>
    </nav>
  );
};

export default Navbar;

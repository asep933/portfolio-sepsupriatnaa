"use client";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { useState, useEffect } from "react";
import GitHub from "../components/link-github/page";
import ToggleDark from "../components/toggle-dark/page";

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
    <div>
      <div className="dark:bg-slate-200 dark:bg-opacity-75 flex justify-between bg-nav bg-nav shadow-nav w-full items-center p-2 bg-transparent fixed z-50 backdrop-blur-sm">
        {/* logo */}
        <div className="block text-green-900 text-2xl px-4 lg:ml-32">
          <Link className={`mx-5 ${bebas_neue.className}`} href={"/"}>
            sepsupriatn
            <span className="dark:text-orange-500 text-orange-400">aa</span>
          </Link>
        </div>
        {/* logo */}

        {/* humberger */}
        <div
          id="humberger"
          className="flex items-center px-4 transform scale-150 lg:hidden"
        >
          <button
            onClick={handleAnimate}
            id="humberger"
            className="mr-4 space-y-1"
          >
            <span
              className={`humberger-line dark:bg-slate-600 transition duration-300 ease-in-out origin-top-left ${
                addHumberger ? "rotate-45" : ""
              }`}
            ></span>
            <span
              className={`humberger-line dark:bg-slate-600  transition duration-300 ease-in-out ${
                addHumberger ? "scale-0" : ""
              }`}
            ></span>
            <span
              className={`humberger-line dark:bg-slate-600  transition duration-300 ease-in-out origin-bottom-left ${
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
        {showMenu && (
          <div
            id="menu"
            className="dark:bg-slate-400 dark:text-white absolute bg-slate-100 w-2/4 z-20 t-10 top-16 right-5 rounded-lg shadow-lg p-10
              transition duration-300 ease-in-out lg:top-0 lg:right-32 lg:shadow-none lg:bg-transparent lg:flex lg:justify-end lg:p-0 lg:rounded-none"
          >
            <div className="flex flex-col justify-center items-center space-y-4 font-normal lg:block lg:space-x-5 lg:translate-x-8 lg:mt-3">
              <Link
                onClick={handleClose}
                id="linkMenu"
                className=" hover:text-orange-500 lg:hidden dark:hover:text-orange-300"
                href={"/"}
              >
                Home
              </Link>
              <Link
                onClick={handleClose}
                id="linkMenu"
                className="hover:text-orange-500 lg:hidden dark:hover:text-orange-300"
                href={"/about"}
              >
                About
              </Link>
              <Link
                onClick={handleClose}
                id="linkMenu"
                className=" hover:text-orange-500 lg:hidden dark:hover:text-orange-300"
                href={"/blog"}
              >
                Blog
              </Link>
              <div className="lg:hidden">
                <ToggleDark />
              </div>
            </div>
          </div>
        )}
        {/* Menu Mobile end */}

        {/* Menu Pc Start */}
        <div
          id="menu"
          className="hidden relative bg-slate-100 w-2/4 z-20 t-10 top-16 right-5 rounded-lg shadow-lg p-10
              transition duration-300 ease-in-out lg:top-0 lg:right-32 lg:shadow-none lg:bg-transparent lg:flex lg:justify-end lg:p-0 lg:rounded-none"
        >
          <div className="dark:text-black lg:font-normal lg:flex lg:items-center lg:space-x-5 lg:translate-x-8 lg:mt-3 pb-3">
            <Link
              onClick={handleClose}
              id="linkMenu"
              className=" hover:text-orange-500"
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className="hover:text-orange-500"
              href={"/about"}
            >
              About
            </Link>
            <Link
              onClick={handleClose}
              id="linkMenu"
              className=" hover:text-orange-500"
              href={"/blog"}
            >
              Blog
            </Link>

            <div className="lg:block hidden">
              <ToggleDark />
            </div>
          </div>
        </div>
        {/* Menu Pc end */}
      </div>
    </div>
  );
};

export default Navbar;

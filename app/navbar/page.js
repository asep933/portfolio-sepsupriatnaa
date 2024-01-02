"use client"
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { useState, useEffect } from "react";

const bebas_neue = Bebas_Neue({
  display: 'swap',
  weight: '400',
  subsets: ['latin']
});

const Navbar = () => {
  const [addHumberger, setAddHumberger] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleAnimate = () => {
    setAddHumberger(!addHumberger)
    setShowMenu(!showMenu)
  }
  
  const handleClose = () => {
    if (addHumberger && showMenu) {
      setAddHumberger(false);
      setShowMenu(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.querySelector("#menu");
      const hamburgerButton = document.querySelector("#humberger");

      if (!menuElement.contains(event.target) && !hamburgerButton.contains(event.target)) {
        handleClose();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [addHumberger, showMenu]);


  
    return (
      <>
          <div className="flex justify-between shadow-nav w-full items-center p-2 bg-transparent sticky top-0 z-50 backdrop-blur-sm" style={{backgroundColor: 'rgba(255, 191, 219, 0.4)'}}>
              <div className="block text-green-900 text-2xl px-4 lg:ml-32">
                <Link className={`mx-5 ${bebas_neue.className}`} href={"/"}>sepsupriatn<span className="text-orange-400">aa</span></Link>
              </div>

              <div id="humberger" className="flex items-center px-4 transform scale-150 lg:hidden">
                <button onClick={handleAnimate} id="humberger" className="mr-4 space-y-1">
                  <span className={`humberger-line transition duration-300 ease-in-out origin-top-left ${addHumberger?'rotate-45':''}`}></span>
                  <span className={`humberger-line transition duration-300 ease-in-out ${addHumberger?'scale-0':''}`}></span>
                  <span className={`humberger-line transition duration-300 ease-in-out origin-bottom-left ${addHumberger?'-rotate-45':''}`}></span>
                </button>
              </div>

              {showMenu && (<div id="menu" className="absolute bg-slate-100 w-2/4 z-20 t-10 top-16 right-5 rounded-lg shadow-lg p-10
              transition duration-300 ease-in-out lg:top-0 lg:right-32 lg:shadow-none lg:bg-transparent lg:flex lg:justify-end lg:p-0 lg:rounded-none">
                <div className="flex flex-col justify-center items-center space-y-4 lg:block lg:space-x-5 lg:translate-x-8 lg:mt-3">
                  <Link onClick={handleClose} id="linkMenu" className=" hover:text-orange-500" href={"/"}>Home</Link>
                  <Link onClick={handleClose} id="linkMenu" className="hover:text-orange-500" href={"/about"}>About</Link>
                  <Link onClick={handleClose} id="linkMenu" className=" hover:text-orange-500" href={"/blog"}>Blog</Link>
                </div>
              </div>)}

              <div id="menu" className="hidden absolute bg-slate-100 w-2/4 z-20 t-10 top-16 right-5 rounded-lg shadow-lg p-10
              transition duration-300 ease-in-out lg:top-0 lg:right-32 lg:shadow-none lg:bg-transparent lg:flex lg:justify-end lg:p-0 lg:rounded-none">
                <div className="flex flex-col justify-center items-center space-y-4 lg:block lg:space-x-5 lg:translate-x-8 lg:mt-3">
                  <Link onClick={handleClose} id="linkMenu" className=" hover:text-orange-500" href={"/"}>Home</Link>
                  <Link onClick={handleClose} id="linkMenu" className="hover:text-orange-500" href={"/about"}>About</Link>
                  <Link onClick={handleClose} id="linkMenu" className=" hover:text-orange-500" href={"/blog"}>Blog</Link>
                </div>
              </div>
          </div>
      </>
    );
}

export default Navbar;

import Link from "next/link";
import ToggleDark from "../toggle-dark/page";

const MenuMobile = ({ showMenu, handleClose }) => {
  return (
    <div className="relative w-full">
      <div
        className={`${
          showMenu ? "scale-100" : 0
        } t-10 absolute right-5 top-16 z-20 w-1/2 scale-0 rounded-lg bg-primary bg-opacity-90 p-10 shadow-lg backdrop-blur-md
              transition duration-500 ease-in-out dark:bg-slate-400 dark:bg-opacity-90 dark:text-white lg:right-32 lg:top-0 lg:flex 
              lg:justify-end lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        <div
          title="Menu"
          className="flex flex-col items-center justify-center space-y-4 font-normal lg:mt-3 lg:block lg:translate-x-8 lg:space-x-5"
        >
          <Link
            onClick={handleClose}
            id="linkMenu"
            className=" hover:text-fourth dark:hover:text-slate-900 lg:hidden"
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={handleClose}
            id="linkMenu"
            className="hover:text-fourth dark:hover:text-slate-900 lg:hidden"
            href={"/about"}
          >
            About
          </Link>
          <Link
            onClick={handleClose}
            id="linkMenu"
            className="hover:text-fourth dark:hover:text-slate-900 lg:hidden"
            href={"/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            onClick={handleClose}
            id="linkMenu"
            className=" hover:text-fourth dark:hover:text-slate-900 lg:hidden"
            href={"/blog"}
          >
            Blog
          </Link>
          <div className="lg:hidden">
            <ToggleDark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;

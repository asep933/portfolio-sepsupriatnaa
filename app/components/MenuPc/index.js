import Link from "next/link";
import ToggleDark from "../toggle-dark/page";

const MenuPc = ({ handleClose }) => {
  return (
    <div id="menu" className="hidden lg:block">
      <div className="pb-3 dark:text-black lg:mt-3 lg:flex lg:items-center lg:space-x-5 lg:font-normal">
        <Link
          onClick={handleClose}
          id="linkMenu"
          className="hover:text-third dark:hover:text-slate-50"
          href={"/"}
        >
          Home
        </Link>
        <Link
          onClick={handleClose}
          id="linkMenu"
          className="hover:text-third dark:hover:text-slate-50"
          href={"/about"}
        >
          About
        </Link>
        <Link
          onClick={handleClose}
          id="linkMenu"
          className="hover:text-third dark:hover:text-slate-50"
          href={"/portfolio"}
        >
          Portfolio
        </Link>
        <Link
          onClick={handleClose}
          id="linkMenu"
          className=" hover:text-third dark:hover:text-slate-50"
          href={"/blog"}
        >
          Blog
        </Link>

        <div className="hidden lg:block">
          <ToggleDark />
        </div>
      </div>
    </div>
  );
};

export default MenuPc;

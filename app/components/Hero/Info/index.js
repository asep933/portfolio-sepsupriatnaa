import Link from "next/link";
import Contact from "../../contact/page";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <div
      data-aos="fade-right"
      className="mx-auto block max-w-screen-xl text-base dark:text-white
         lg:flex lg:flex-col lg:justify-center lg:text-lg"
    >
      <p className="fade-in">Hello,</p>

      <div className="inline-flex">
        <h1 className="fade-in mr-2 text-2xl font-bold lg:text-4xl">
          Frontend{" "}
        </h1>
        <motion.div
          animate={{ transition: "easeOut" }}
          className="transform text-2xl font-bold dark:bg-slate-600 dark:text-white lg:text-4xl"
        >
          Web
        </motion.div>
      </div>

      <p className="fade-in text-sm text-black dark:text-orange-500">
        INTRODUCTION
      </p>

      <p className="fade-in">
        I am Asep Supriatna, a programmer with 2 years <br /> experience, My
        expertise includes HTML, CSS, JS, React, Next and Laravel.
      </p>

      <Contact />

      <Link href="#pageDua">
        <motion.div
          whileTap={{ scale: 1.1 }}
          className="fade-in lg:text-md rounded-sm bg-fourth p-1 py-0 text-center text-primary shadow-sm transition duration-300 ease-in-out hover:bg-third
              dark:bg-slate-600 dark:text-white dark:hover:opacity-80 lg:w-44 lg:rounded-md lg:text-center"
        >
          Learn More
        </motion.div>
      </Link>
    </div>
  );
};

export default Info;

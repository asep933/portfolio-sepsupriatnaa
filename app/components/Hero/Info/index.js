import Link from "next/link";
import Contact from "../../contact/page";

const Info = () => {
  return (
    <div
      data-aos="fade-right"
      className="block text-base dark:text-white
         lg:flex lg:flex-col lg:justify-center lg:text-lg"
    >
      <p className="fade-in">Hello,</p>

      <h1 className="fade-in text-2xl font-bold lg:text-4xl">
        Frontend{" "}
        <span className="rotate-3 transform dark:bg-slate-600 dark:text-white">
          Web
        </span>
      </h1>

      <p className="fade-in text-sm text-black dark:text-orange-500">
        INTRODUCTION
      </p>

      <p className="fade-in">
        I am Asep Supriatna, a programmer with 2 years <br /> experience, My
        expertise includes HTML, CSS, JS, React, Next and Laravel.
      </p>

      <Contact />

      <Link
        href="#pageDua"
        className="fade-in lg:text-md rounded-sm bg-fourth p-1 py-0 text-primary shadow-sm transition duration-300 ease-in-out hover:bg-third dark:bg-slate-600
            dark:text-white dark:hover:opacity-80 lg:w-44 lg:rounded-md lg:text-center"
      >
        Learn More
      </Link>
    </div>
  );
};

export default Info;

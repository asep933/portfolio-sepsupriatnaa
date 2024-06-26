import Link from "next/link";
import Contact from "../../contact/page";

const Info = () => {
  return (
    <div
      data-aos="fade-right"
      className="block px-5 text-base dark:text-white
         lg:flex lg:flex-col lg:justify-center lg:text-lg"
    >
      <p className="fade-in">Hello👋...</p>

      <h1 className="fade-in text-2xl font-bold lg:text-4xl">
        Frontend{" "}
        <span className="rotate-3 transform bg-third dark:bg-slate-600 dark:text-white">
          Web
        </span>
      </h1>

      <p className="fade-in text-sm text-third dark:text-orange-500">
        INTRODUCTION
      </p>

      <p className="fade-in">
        I am Asep Supriatna, a programmer with 2 years <br /> experience, My
        expertise includes HTML, CSS, JS, React and Next.
      </p>

      <Contact />

      <Link
        href="#pageDua"
        className="fade-in lg:text-md bg-secondary p-1 py-0 shadow-sm transition duration-300 ease-in-out hover:bg-third dark:bg-slate-600
            dark:text-white dark:hover:opacity-80 lg:w-44 lg:text-center"
      >
        Learn More
      </Link>
    </div>
  );
};

export default Info;

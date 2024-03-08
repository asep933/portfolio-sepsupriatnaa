import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-full w-full space-y-3 bg-slate-200 
        bg-contain bg-fixed bg-no-repeat bg-blend-soft-light backdrop-blur-md dark:bg-slate-900 
        dark:bg-[url('/bg-space.jpg')] sm:dark:bg-[url('/bg-spacelg.jpg')] md:dark:bg-[url('/bg-spacelg.jpg')] lg:h-screen
        lg:bg-transparent lg:bg-cover lg:dark:bg-[url('/bg-spacelg.jpg')]"
    >
      <div
        data-aos="zoom-in-up"
        className="mb-32 mt-32 block w-full px-5 text-base dark:text-white
         lg:flex lg:flex-col lg:justify-center lg:px-36 lg:text-2xl"
      >
        <p className="fade-in">Hello👋...</p>

        <h1 className="fade-in text-2xl font-bold lg:text-4xl">
          Frontend{" "}
          <span className="rotate-3 transform bg-orange-200 dark:bg-slate-600 dark:text-white">
            Web
          </span>
        </h1>

        <p className="fade-in text-sm text-orange-500 dark:text-orange-500">
          INTRODUCTION
        </p>

        <p className="fade-in pb-4">
          I am Asep Supriatna, a programmer with 2 years <br /> experience, My
          expertise includes HTML, CSS, JS, React and Next.
        </p>

        <Link
          href="#pageDua"
          className="fade-in lg:text-md bg-orange-200 p-1 py-0 shadow-sm hover:bg-orange-300 dark:bg-slate-600 dark:text-white
            dark:hover:opacity-80 lg:w-44 lg:text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;

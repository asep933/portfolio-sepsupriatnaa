"use client";
import Image from "next/image";
import Link from "next/link";
import Form from "./components/form/page";
import Line from "./components/line/page";
import Contact from "./components/contact/page";
import imageSatu from "../public/image_1.png";
import imageDua from "../public/image_2.png";
import imageTiga from "../public/image_3.png";
import imageEmpat from "../public/image_4.png";
import imageLima from "../public/image_5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`relative w-full`}>
      {/* hero section start */}
      <div
        id="home"
        className="dark:bg-slate-900 bg-slate-200 flex h-full w-full lg:h-screen"
      >
        <div
          data-aos="zoom-in-up"
          className="dark:text-white block w-full space-y-3 px-5 mt-32 mb-32 text-base
         lg:flex lg:justify-center lg:px-36 lg:flex-col lg:text-2xl"
        >
          <p className="fade-in">Hello👋...</p>

          <h1 className="fade-in text-2xl font-bold lg:text-4xl">
            Frontend{" "}
            <span className="bg-orange-200 dark:text-white dark:bg-slate-600 transform rotate-3">
              Web
            </span>
          </h1>

          <p className="dark:text-orange-500 fade-in text-orange-500 text-sm">
            INTRODUCTION
          </p>

          <p className="fade-in pb-4">
            I am Asep Supriatna, a programmer with 2 years <br /> experience, My
            expertise includes HTML, CSS, JS, React and Next.
          </p>

          <Link
            href="#pageDua"
            className="dark:bg-slate-600 dark:hover:opacity-80 fade-in py-0 dark:text-white bg-orange-200 shadow-sm hover:bg-orange-300 p-1
            lg:w-44 lg:text-center lg:text-md"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* hero section end */}

      {/* service section start */}
      <div
        id="pageDua"
        className="dark:bg-slate-600 bg-white flex flex-wrap w-full items-center pt-16 pb-16
        lg:pt-32 lg:pb-32 lg:px-32"
      >
        <div className="dark:text-white fade-in lg:text-2xl w-full px-5 space-y-3">
          <h1
            data-aos="zoom-in-up"
            className="mx-auto font-bold lg:text-4xl text-2xl mb-8"
          >
            My Services
          </h1>
          <p data-aos="zoom-in-up">Here are some of my services including:</p>

          <div className="lg:grid xl:grid-cols-3 py-16 text-black lg:grid-flow-row lg:gap-12 text-center flex flex-col text-xl">
            <div
              data-aos="zoom-in-up"
              className="lg:p-20 mt-3 bg-slate-300 lg:transform lg:hover:rotate-2 w-full lg:rounded-full"
            >
              Web Developer
            </div>
            <div
              data-aos="zoom-in-up"
              className="lg:p-20 mt-3 bg-slate-300 lg:transform lg:hover:rotate-2 w-full lg:rounded-full"
            >
              Prompt Engineer
            </div>
            <div
              data-aos="zoom-in-up"
              className="lg:p-20 mt-3 bg-slate-300 lg:transform lg:hover:rotate-2 w-full lg:rounded-full"
            >
              UI/UX
            </div>
          </div>
        </div>
      </div>
      {/* service section end */}

      <Line />

      {/* portfolio section start*/}
      <div
        className="dark:bg-slate-600 bg-white flex flex-wrap items-center w-full pb-16 pt-16 text-base
      lg:pt-32 lg:pb-32 lg:px-32 font-semibold"
      >
        <div className="dark:text-white fade-in lg:text-2xl w-full px-5">
          <h1
            data-aos="zoom-in-up"
            className="lg:text-4xl text-2xl font-bold mb-8"
          >
            My Collection
          </h1>

          <p data-aos="zoom-in-up" className="mb-6 font-normal">
            The following is a list of photos that were generated using Stable
            Diffusion
          </p>

          <div className="dark:text-black flex flex-wrap px-5 mt-16">
            <div className="dark:bg-slate-300 bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-5 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
              <Image
                src={imageSatu}
                width={200}
                className="w-full rounded-lg mb-5"
                data-aos="zoom-in-up"
              />

              <p data-aos="zoom-in-up">
                A graceful woman is one who carries herself with poise and
                elegance.
              </p>
            </div>
            <div className="dark:bg-slate-300 bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-5 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
              <Image
                src={imageEmpat}
                width={200}
                className="w-full rounded-lg mb-5"
                data-aos="zoom-in-up"
              />

              <p data-aos="zoom-in-up">
                Blue-eyed woman with captivating charm. Her eyes, like two
                sparkling gems, create a mysterious gleam.
              </p>
            </div>
            <div className="dark:bg-slate-300 bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-5 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
              <Image
                src={imageLima}
                width={200}
                className="w-full rounded-lg mb-5"
                data-aos="zoom-in-up"
              />

              <p data-aos="zoom-in-up">
                A cowboy thief, clad in rugged attire, deftly maneuvers through
                the shadows with a larcenous intent.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio section end */}

      {/* feedback start */}
      <div className="bg-slate-200 w-full flex justify-center items-center flex-col">
        <Form />
      </div>
      {/* feedback end */}

      {/* contact start */}
      <Contact />
      {/* contact end */}
    </div>
  );
};

export default Page;

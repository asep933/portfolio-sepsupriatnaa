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
import { useState, useEffect, useRef } from "react";
import Description from "./components/description/page";

const Page = () => {
  const [web, setWeb] = useState(false);
  const [prompt, setPrompt] = useState(false);
  const [uiux, setUiux] = useState(false);
  const [backBlur, setBackBlur] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {backBlur && (
        <div
          onClick={() => {
            setBackBlur(false);
            setPrompt(false);
            setWeb(false);
            setUiux(false);
          }}
          id="blur"
          className="fixed z-10 h-screen w-full bg-transparent bg-opacity-20 backdrop-blur-sm"
        ></div>
      )}

      {/* hero section start */}
      <div
        id="home"
        className="relative flex h-full w-full space-y-3 bg-slate-200 
        bg-contain bg-fixed bg-no-repeat backdrop-blur-md dark:bg-slate-900 dark:bg-[url('/bg-space.jpg')] 
        sm:dark:bg-[url('/bg-spacelg.jpg')] md:dark:bg-[url('/bg-spacelg.jpg')] lg:h-screen lg:bg-transparent
        lg:bg-cover lg:dark:bg-[url('/bg-spacelg.jpg')]"
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
      {/* hero section end */}

      {/* service section start */}
      <div
        id="pageDua"
        className="relative flex w-full flex-wrap items-center bg-white pb-16 pt-16 dark:bg-slate-600
        lg:px-32 lg:pb-32 lg:pt-32"
      >
        <div className="fade-in w-full space-y-3 px-5 dark:text-white lg:text-2xl">
          <h1
            data-aos="zoom-in-up"
            className="mx-auto mb-8 text-2xl font-bold lg:text-4xl"
          >
            My Services
          </h1>
          <p data-aos="zoom-in-up">Here are some of my services including:</p>

          <div className="flex flex-col py-16 text-center text-xl text-black lg:grid lg:grid-flow-row lg:gap-12 xl:grid-cols-3">
            <button
              onClick={() => {
                setWeb(!web);
                setBackBlur(!backBlur);
              }}
              data-aos="zoom-in-up"
              className="mt-3 w-full bg-slate-300 hover:bg-opacity-80 lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
            >
              Web Developer
            </button>
            <button
              data-aos="zoom-in-up"
              className="mt-3 w-full bg-slate-300 hover:bg-opacity-80 lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
              onClick={() => {
                setPrompt(!prompt);
                setBackBlur(!backBlur);
              }}
            >
              Prompt Engineer
            </button>
            <button
              data-aos="zoom-in-up"
              className="mt-3 w-full bg-slate-300 hover:bg-opacity-80 lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
              onClick={() => {
                setUiux(!uiux);
                setBackBlur(!backBlur);
              }}
            >
              UI/UX
            </button>
          </div>
        </div>
        {web && (
          <Description
            backBlur={backBlur}
            setBackBlur={setBackBlur}
            web={web}
            setWeb={setWeb}
            title={"is Web Devlopment?"}
            paragraph={
              "Web development is the process of creating and maintaining a website or web application. It involves using various programming languages, technologies, and tools to create interactive and responsive user experiences on the web."
            }
          />
        )}
        {prompt && (
          <Description
            backBlur={backBlur}
            setBackBlur={setBackBlur}
            prompt={prompt}
            setPrompt={setPrompt}
            title={"is Prompt Engineer?"}
            paragraph={
              "A prompt engineer is a professional responsible for developing and maintaining computer systems or programs designed to provide responses to specific commands or inputs."
            }
          />
        )}
        {uiux && (
          <Description
            backBlur={backBlur}
            setBackBlur={setBackBlur}
            uiux={uiux}
            setUiux={setUiux}
            title={"is UI/UX?"}
            paragraph={
              "A UI/UX designer is a professional who specializes in creating and enhancing the user interface and user experience of digital products. UI (User Interface) design focuses on the visual elements."
            }
          />
        )}
      </div>
      {/* service section end */}

      <Line />

      {/* portfolio section start*/}
      <div
        className="flex w-full flex-wrap items-center bg-white pb-16 pt-16 text-base font-semibold
      dark:bg-slate-600 lg:px-32 lg:pb-32 lg:pt-32"
      >
        <div className="fade-in w-full px-5 dark:text-white lg:text-2xl">
          <h1
            data-aos="zoom-in-up"
            className="mb-8 text-2xl font-bold lg:text-4xl"
          >
            My Collection
          </h1>

          <p data-aos="zoom-in-up" className="mb-6 font-normal">
            The following is a list of photos that were generated using Stable
            Diffusion
          </p>

          <div className="mt-16 flex flex-wrap px-5 dark:text-black">
            <div className="mt-8 w-full space-y-2 rounded-lg bg-orange-200 p-5 text-base shadow-lg dark:bg-slate-300 lg:w-2/4 lg:scale-75 lg:text-lg">
              <Image
                src={imageSatu}
                width={200}
                className="mb-5 w-full rounded-lg"
                data-aos="zoom-in-up"
              />

              <p data-aos="zoom-in-up">
                A graceful woman is one who carries herself with poise and
                elegance.
              </p>
            </div>
            <div className="mt-8 w-full space-y-2 rounded-lg bg-orange-200 p-5 text-base shadow-lg dark:bg-slate-300 lg:w-2/4 lg:scale-75 lg:text-lg">
              <Image
                src={imageEmpat}
                width={200}
                className="mb-5 w-full rounded-lg"
                data-aos="zoom-in-up"
              />

              <p data-aos="zoom-in-up">
                Blue-eyed woman with captivating charm. Her eyes, like two
                sparkling gems, create a mysterious gleam.
              </p>
            </div>
            <div className="mt-8 w-full space-y-2 rounded-lg bg-orange-200 p-5 text-base shadow-lg dark:bg-slate-300 lg:w-2/4 lg:scale-75 lg:text-lg">
              <Image
                src={imageLima}
                width={200}
                className="mb-5 w-full rounded-lg"
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
      <div className="flex w-full flex-col items-center justify-center bg-slate-200">
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

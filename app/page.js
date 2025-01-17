"use client";

import Form from "./components/form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import PortfolioDashboard from "@/app/components/PorfolioDashboard";
import Hero from "./components/Hero";
import Service from "./components/ServiceComponents";
import Skills from "./components/Skills";

const Page = () => {
  const [web, setWeb] = useState(false);
  const [prompt, setPrompt] = useState(false);
  const [uiux, setUiux] = useState(false);
  const [backBlur, setBackBlur] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: "1000",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {backBlur && (
        <div
          onClick={() => {
            setBackBlur(false);
            setPrompt(false);
            setWeb(false);
            setUiux(false);
          }}
          id="blur"
          className="fixed z-50 h-screen w-full cursor-pointer bg-black
          bg-opacity-40 blur-md backdrop-filter"
        ></div>
      )}

      {/* hero section start */}
      <Hero />
      {/* hero section end */}

      {/* service section start */}
      <Service
        web={web}
        prompt={prompt}
        uiux={uiux}
        setWeb={setWeb}
        setPrompt={setPrompt}
        setUiux={setUiux}
        backBlur={backBlur}
        setBackBlur={setBackBlur}
      />
      {/* service section end */}

      {/* Skills */}
      <Skills />
      {/* Skills */}

      {/* portfolio section start*/}
      <div
        className="flex w-full flex-wrap items-center pb-16 pt-16 text-base font-semibold
      dark:bg-slate-600 lg:px-32 lg:pb-32 lg:pt-32"
      >
        <div className="fade-in w-full px-5 dark:text-white lg:text-2xl">
          <PortfolioDashboard />
        </div>
      </div>
      {/* portfolio section end */}

      {/* feedback */}
      <div
        className="flex w-full flex-col items-center justify-center bg-fourth
      lg:rounded-tr-[50%] dark:bg-transparent"
      >
        <Form />
      </div>
      {/* feedback */}
    </>
  );
};

export default Page;

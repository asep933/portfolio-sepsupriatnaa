"use client";

import Icon from "../Icons/Icon";
import Html from "/public/html.svg";
import Css from "/public/css.svg";
import Javascript from "/public/javascript.svg";
import React_ from "/public/react.svg";
import Laravel from "/public/laravel.svg";
import Tailwind from "/public/tailwind.svg";
import AOS from "aos";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div
        className="flex h-screen w-full items-center justify-center gap-6 bg-fourth px-4 
        py-16 capitalize text-primary dark:bg-slate-900 dark:text-slate-50 lg:rounded-br-full
        lg:rounded-tr-full lg:px-32"
      >
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col-reverse items-center justify-center gap-8 lg:flex-row">
          <div
            data-aos="fade-right"
            className="flex items-center justify-center gap-8 rounded-md bg-primary p-16 dark:bg-slate-200
        lg:w-1/2 lg:rounded-full"
          >
            <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
              <Icon path={Html} alt={"icon html"} width={90} />
              <Icon path={Css} alt={"icon Css"} width={90} />
              <Icon path={Javascript} alt={"icon javascript"} width={90} />
              <Icon path={React_} alt={"icon react"} width={90} />
              <Icon path={Laravel} alt={"icon laravel"} width={90} />
              <Icon path={Tailwind} alt={"icon tailwind"} width={90} />
            </div>
          </div>

          <h1 data-aos="fade-left" className="text-2xl font-bold lg:text-5xl">
            my skills
          </h1>
        </div>
      </div>
    </>
  );
};

export default Skills;

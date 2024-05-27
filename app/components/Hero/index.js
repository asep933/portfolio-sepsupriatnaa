import Info from "./Info";
import Photo from "./ImageHero";
import Aksen from "@/public/aksen-hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-[36rem] w-full items-center justify-center overflow-hidden bg-[url('/bg-hero.png')] bg-cover
        bg-no-repeat pt-28 backdrop-blur-md dark:bg-slate-900 dark:bg-[url('/bg-space.jpg')] max-[820px]:h-auto
        max-[820px]:flex-col-reverse max-[820px]:items-center sm:dark:bg-[url('/bg-spacelg.jpg')]
        md:dark:bg-[url('/bg-spacelg.jpg')] lg:bg-transparent lg:pt-0 lg:dark:bg-[url('/bg-spacelg.jpg')]"
    >
      <div className="flex flex-col-reverse px-4 lg:flex-row lg:justify-around">
        <Photo />
        <Info />
      </div>

      <img
        src="../../aksen-hero.png"
        alt="aksen hero"
        width="340"
        className="absolute bottom-5 right-1 z-[999999999999999] animate-bounce transition duration-1000 ease-out"
      />
    </div>
  );
};

export default Hero;

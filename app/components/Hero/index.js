import Info from "./Info";
import Photo from "./ImageHero";
import Aksen from "@/public/aksen-hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-1/2 w-full items-center justify-center overflow-hidden bg-[url('/bg-hero.png')] bg-cover bg-no-repeat
        backdrop-blur-md dark:bg-slate-900 dark:bg-[url('/bg-space.jpg')] max-[820px]:flex-col-reverse
        max-[820px]:items-center sm:dark:bg-[url('/bg-spacelg.jpg')] md:dark:bg-[url('/bg-spacelg.jpg')]
        lg:h-[36rem] lg:bg-transparent lg:dark:bg-[url('/bg-spacelg.jpg')]"
    >
      <div className="flex flex-col-reverse justify-normal overflow-hidden px-4 pt-[8rem] sm:pt-[10rem] md:pt-[12rem] lg:flex-row lg:justify-around lg:pt-0">
        <Photo />
        <Info />
      </div>

      <img
        src="../../aksen-hero.png"
        alt="aksen hero"
        width="340"
        className="absolute bottom-5 right-1 z-[999999999999999] animate-bounce transition duration-1000 ease-out dark:hidden max-[820px]:hidden"
      />
    </div>
  );
};

export default Hero;

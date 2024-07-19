import Info from "./Info";
import Photo from "./Photo";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex h-screen w-full flex-col gap-8 backdrop-blur-md dark:bg-slate-900 
      lg:h-screen lg:flex-row lg:items-center lg:gap-0 lg:pb-0"
    >
      <div
        className="flex w-full px-4 pt-[8rem] sm:pt-[10rem] md:pt-[12rem] 
        lg:w-1/2 lg:flex-row lg:px-32 lg:pt-0"
      >
        <Info />
      </div>

      <div className="h-full w-full px-4 lg:w-1/2 lg:px-0">
        <Photo />
      </div>
    </div>
  );
};

export default Hero;

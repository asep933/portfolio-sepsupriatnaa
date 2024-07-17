import Info from "./Info";
import Photo from "./Photo";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-1/2 w-full flex-col items-center overflow-hidden bg-cover bg-no-repeat pb-4 backdrop-blur-md dark:bg-slate-900 lg:h-screen
      lg:flex-row lg:pb-0"
    >
      <div
        className="flex w-full flex-col justify-normal overflow-hidden px-4 pt-[8rem] sm:pt-[10rem] md:pt-[12rem] 
        lg:w-1/2 lg:flex-row lg:justify-around lg:px-32 lg:pt-0"
      >
        <Info />
      </div>

      <div className="h-full w-full lg:w-1/2">
        <Photo />
      </div>
    </div>
  );
};

export default Hero;

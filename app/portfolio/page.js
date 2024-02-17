import Link from "next/link";

const Portfolio = () => {
  return (
    <Link
      href="https://calculator-dusky-nu.vercel.app/"
      target="_blank"
      className="flex h-screen w-full flex-col justify-center space-y-10 overflow-hidden overflow-y-hidden px-5 pb-12 pt-20
    lg:flex lg:items-center lg:justify-center lg:pt-20"
    >
      <div
        className="flex w-full flex-col items-center overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-700
      lg:flex-row lg:justify-evenly lg:py-6"
      >
        <iframe
          className="h-[29rem] w-full overflow-hidden lg:w-1/3 lg:rounded-xl"
          src="https://calculator-dusky-nu.vercel.app/"
        />
        <Link href="https://calculator-dusky-nu.vercel.app/" target="_blank">
          <h2 className="py-4 text-2xl">Caclculator App Web</h2>
        </Link>
      </div>
    </Link>
  );
};

export default Portfolio;

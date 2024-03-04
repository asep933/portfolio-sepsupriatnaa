import Link from "next/link";
import Image from "next/image";

const Portfolio = ({ image, alt, title, link }) => {
  return (
    <Link
      data-aos="zoom-in-up"
      href={`${link}`}
      target="_blank"
      className="mb-6 flex flex-col
     lg:mt-16 lg:max-h-full lg:w-full lg:items-center"
    >
      <div
        className="flex w-auto flex-col items-center overflow-hidden rounded-xl bg-slate-50
      dark:bg-slate-700 lg:h-full lg:w-4/5"
      >
        <Image
          className="object-cover object-center transition duration-300 ease-out hover:scale-110 lg:h-3/4"
          src={image}
          alt={`${alt}`}
          width={3000}
          height={3000}
        />

        <h2 className="py-4 text-xl">{title}</h2>
      </div>
    </Link>
  );
};

export default Portfolio;

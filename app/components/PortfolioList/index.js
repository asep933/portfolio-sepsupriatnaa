import Link from "next/link";
import Image from "next/image";

const Portfolio = ({ image, alt, title, link }) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-col overflow-hidden rounded-md bg-white shadow-lg
      dark:text-black lg:items-center"
    >
      <Link href={`${link}`} target="_blank">
        <figure className="overflow-hidden">
          <Image
            className="h-64 overflow-hidden object-cover object-center 
            transition duration-300 ease-out hover:scale-110"
            src={image}
            alt={`${alt}`}
            width={3000}
            height={3000}
          />
        </figure>
      </Link>

      <div className="flex w-full items-center justify-center py-3">
        <h1 className="text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default Portfolio;

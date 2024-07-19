import Image from "next/image";

const Icon = ({ path, alt, width, className }) => {
  return (
    <Image
      src={path}
      alt={alt}
      width={width}
      className={`${className} transition duration-300 ease-in-out hover:scale-110`}
    />
  );
};

export default Icon;

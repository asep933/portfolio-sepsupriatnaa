import Image from "next/image";

const Icon = ({ path, alt, width, className }) => {
  return (
    <div>
      <Image src={path} alt={alt} width={width} className={`${className}`} />
    </div>
  );
};

export default Icon;

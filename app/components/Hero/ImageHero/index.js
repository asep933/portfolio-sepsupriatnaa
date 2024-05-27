import Image from "next/image";
import PpGua from "@/public/pp_gua.png";

const Photo = () => {
  return (
    <div className="flex lg:pt-64" data-aos="zoom-out">
      <Image
        src={PpGua}
        alt="profile gua"
        className="w-[45rem] flex-shrink-0"
      />
    </div>
  );
};

export default Photo;

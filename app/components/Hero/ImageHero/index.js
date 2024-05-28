import Image from "next/image";
import PpGua from "@/public/pp_gua.png";

const Photo = () => {
  return (
    <div className="lg:pt-64" data-aos="zoom-out">
      <Image
        src={PpGua}
        alt="profile gua"
        width={3000}
        className="lg:w-[45rem]"
      />
    </div>
  );
};

export default Photo;

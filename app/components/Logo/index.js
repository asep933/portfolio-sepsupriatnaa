import Sepsupriatnaa from "@/public/sepsupriatnaa.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ bebas_neue }) => {
  return (
    <Link
      title="sepsupriatnaa"
      className={`${bebas_neue.className} flex items-center text-xl text-green-900`}
      href={"/"}
    >
      <Image src={Sepsupriatnaa} alt="logo sepsupriatnaa" width={60} />
      {/* <div className="hidden lg:block">
        sepsupriatn
        <span className="text-yellow-400 dark:text-fourth">aa</span>
      </div> */}
    </Link>
  );
};

export default Logo;

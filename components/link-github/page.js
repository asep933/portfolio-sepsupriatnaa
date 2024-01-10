import React from "react";
import Image from "next/image";
import Link from "next/link";
import github from "/public/github-image.svg";

const GitHub = () => {
  return (
    <div className="absolute right-20 lg:right-12 top-[12.5px]">
      <Link
        href="https://github.com/asep933/portfolio-sepsupriatnaa"
        target="_blank"
      >
        <Image src={github} alt="github image" width={25} height={25} />
      </Link>
    </div>
  );
};

export default GitHub;

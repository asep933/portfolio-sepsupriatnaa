"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Medsos = ({ pathGithub, imageOne, imageTwo, alt }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link
      href={`${pathGithub}`}
      target="_blank"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <div>
        {isMouseOver ? (
          <Image src={imageOne} alt={alt} width={26} />
        ) : (
          <Image src={imageTwo} alt={alt} width={26} />
        )}
      </div>
    </Link>
  );
};

export default Medsos;

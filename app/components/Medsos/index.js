"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Medsos = ({ path, imageOne, imageTwo, alt, ...props }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link
      {...props}
      href={`${path}`}
      target="_blank"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <motion.div whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }}>
        {isMouseOver ? (
          <Image src={imageOne} alt={alt} width={26} />
        ) : (
          <Image src={imageTwo} alt={alt} width={26} />
        )}
      </motion.div>
    </Link>
  );
};

export default Medsos;

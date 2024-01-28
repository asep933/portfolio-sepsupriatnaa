"use client";
import Link from "next/link";
import Image from "next/image";
import backToTop from "/public/back-top.svg";
import { useState, useEffect } from "react";

const Back = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    function handleBack() {
      let isScroll = window.scrollY;
      setShow(isScroll > 400);
    }

    window.addEventListener("scroll", handleBack);

    return () => {
      window.removeEventListener("scroll", handleBack);
    };
  }, []);
  return (
    <div className="dark">
      <Link
        href="#home"
        className={`${
          show ? "block" : "hidden"
        } fixed bottom-16 right-4 z-[99] rotate-90 rounded-full shadow-sm
        transition duration-300 ease-in-out hover:scale-110 lg:right-8`}
      >
        <Image src={backToTop} alt="back to top image" width={40} />
      </Link>
    </div>
  );
};

export default Back;

"use client"
import Link from "next/link";
import Image from "next/image";
import backToTop from "/public/back-top.svg"
import { useState, useEffect } from "react";

const Back = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        function handleBack() {
            let isScroll = window.scrollY;
            setShow(isScroll > 400)
        }

        window.addEventListener("scroll", handleBack);

        return () => {
            window.removeEventListener("scroll", handleBack);
        }
    }, [])
    return (
        <Link href='#home' className={`${show ? 'block' : 'hidden'} fixed z-[99] rotate-90 transition ease-in-out duration-300 hover:scale-110
        rounded-full shadow-sm right-4 bottom-16 lg:right-8`}>
            <Image 
                src={backToTop}
                alt="back to top image"
                width={40}
            />
        </Link>
    );
}

export default Back;

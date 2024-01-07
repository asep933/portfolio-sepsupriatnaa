import Link from "next/link";
import Image from "next/image";
import backToTop from "/public/back-top.svg"

const Back = () => {
    return (
        <Link href='#home' className='fixed z-[99] rotate-90 transition ease-in-out duration-300 hover:scale-110
        rounded-full shadow-sm right-4 bottom-16 lg:right-8'>
            <Image 
                src={backToTop}
                alt="back to top image"
                width={40}
            />
        </Link>
    );
}

export default Back;

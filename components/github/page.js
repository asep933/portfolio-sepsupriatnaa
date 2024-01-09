import Link from "next/link";
import github from "/public/github-image.svg"
import Image from "next/image";

const GitHub = () => {
    return (
        <div className="absolute right-20 lg:right-12 top-[13.1px]">
            <Link href='https://github.com/asep933/portfolio-sepsupriatnaa' target="_blank">
                <Image 
                src={github}
                alt="gitHub Image"
                className="hover:scale-105 transition duration-300 ease-in-out"
                />
            </Link>
        </div>
    );
}

export default GitHub;

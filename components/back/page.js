import Link from "next/link";

const Back = () => {
    return (
        <Link href='#home' className='fixed bg-orange-200 hover:bg-orange-300 p-3 z-[99] rounded-full shadow-md right-4 bottom-16'>
            Top
        </Link>
    );
}

export default Back;

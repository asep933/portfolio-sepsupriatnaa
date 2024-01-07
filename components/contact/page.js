import Link from "next/link";
import Image from "next/image";
import email from "/public/email.svg";
import instagram from "/public/instagram.svg";
import whatsapp from "/public/whatsapp.svg";

const Contact = () => {
  return (
    <>
      <div className="bg-white pt-16 pb-32 px-4 w-full flex justify-center items-center flex-col">
        <h1 className="text-lg font-semibold bg-orange-200 p-2 transform -rotate-2 hover:rotate-0 mb-12">
          Social Media
        </h1>

        <div className="flex">
          <Link href="mailto:asep93339@gmail.com">
            <Image
              src={email}
              alt={"image email"}
              width={50}
              className="m-8 lg:mx-12 hover:scale-110 transition duration-300 ease-in-out hover:rotate-12"
            />
          </Link>

          <Link href="https://www.instagram.com/sepsupriatnaa/" target="_blank">
            <Image
              src={instagram}
              alt={"image instagram"}
              width={50}
              className="m-8 lg:mx-12 hover:scale-110 transition duration-300 ease-in-out"
            />
          </Link>

          <Link href="https://wa.me/6285872256552" target="_blank">
            <Image
              src={whatsapp}
              alt={"image whatsapp"}
              width={50}
              className="m-8 lg:mx-12 hover:scale-110 transition duration-300 ease-in-out"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;

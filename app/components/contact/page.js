import Link from "next/link";
import Image from "next/image";
import email from "/public/email.svg";
import instagram from "/public/instagram.svg";
import whatsapp from "/public/whatsapp.svg";

const Contact = () => {
  return (
    <>
      <div
        className="flex w-full flex-col items-center justify-center bg-white px-4
      pb-16 pt-16 dark:bg-slate-900 dark:text-black lg:pb-32 lg:pt-32"
      >
        <h1
          data-aos="zoom-in-up"
          className="fade-in mb-12 -rotate-2 transform bg-orange-200 p-2 text-lg font-semibold hover:rotate-0 dark:bg-slate-400"
        >
          Social Media
        </h1>

        <div className="fade-in flex">
          <Link data-aos="zoom-in-up" href="mailto:asep93339@gmail.com">
            <Image
              src={email}
              alt={"image email"}
              width={50}
              className="m-8 transition duration-300 ease-in-out hover:rotate-12 hover:scale-110 lg:mx-12"
            />
          </Link>

          <Link
            data-aos="zoom-in-up"
            href="https://www.instagram.com/sepsupriatnaa/"
            target="_blank"
          >
            <Image
              src={instagram}
              alt={"image instagram"}
              width={50}
              className="m-8 transition duration-300 ease-in-out hover:scale-110 lg:mx-12"
            />
          </Link>

          <Link
            data-aos="zoom-in-up"
            href="https://wa.me/6285872256552"
            target="_blank"
          >
            <Image
              src={whatsapp}
              alt={"image whatsapp"}
              width={50}
              className="m-8 transition duration-300 ease-in-out hover:scale-110 lg:mx-12"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;

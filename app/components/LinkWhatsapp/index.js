"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

const LinkWhatsapp = () => {
  return (
    <Link
      title="whatsapp"
      href={"https://wa.me/6285872256552"}
      target="_blank"
      className="fixed bottom-16 right-3 z-[99] rounded-full shadow-sm
    transition duration-300 ease-in-out hover:scale-110 lg:right-7"
    >
      <WhatsappLogo size={48} color="#25d366" />
    </Link>
  );
};

export default LinkWhatsapp;

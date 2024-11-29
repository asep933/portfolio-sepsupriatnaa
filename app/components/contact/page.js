"use client";

import linkedIn from "/public/linkedin-icon.svg";
import linkedInWhite from "/public/linkedin-icon-white.svg";
import linkGithub from "/public/github-image.svg";
import linkGithubWhite from "/public/github-image-white.svg";
import Medsos from "../Medsos";
import { ReadCvLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mb-3 mt-2 flex flex-row items-center gap-3 lg:mb-6 lg:ml-1">
      <Medsos
        title="linkedin"
        path={`https://www.linkedin.com/in/sepsupriatnaa/`}
        imageOne={linkedIn}
        imageTwo={linkedInWhite}
        alt={"image linkedin"}
      />
      <Medsos
        title="github"
        path={`https://github.com/asep933/`}
        imageOne={linkGithub}
        imageTwo={linkGithubWhite}
        alt={"image github"}
      />
      <motion.a
        whileTap={{ scale: 1.1 }}
        whileHover={{ rotate: -20 }}
        title="cv"
        href="/Asep-Supriatna-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <ReadCvLogo size={28} />
      </motion.a>
    </div>
  );
};

export default Contact;

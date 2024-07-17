"use client";

import Link from "next/link";
import { useState } from "react";
import linkedIn from "/public/linkedin-icon.svg";
import linkedInWhite from "/public/linkedin-icon-white.svg";
import linkGithub from "/public/github-image.svg";
import linkGithubWhite from "/public/github-image-white.svg";
import Image from "next/image";

const Contact = () => {
  const [linkedin, setLinkedin] = useState(false);
  const [github, setGithub] = useState(false);

  return (
    <div className="mb-3 mt-2 flex flex-row items-center gap-3 lg:mb-6 lg:ml-1">
      <Link
        href={"https://www.linkedin.com/in/sepsupriatnaa/"}
        target="_blank"
        onMouseOver={() => setLinkedin(true)}
        onMouseOut={() => setLinkedin(false)}
      >
        <div className="lg:scale-125">
          {linkedin ? (
            <Image src={linkedIn} alt="linkedin icon" width={20} />
          ) : (
            <Image src={linkedInWhite} alt="linkedin white icon" width={20} />
          )}
        </div>
      </Link>

      <Link
        href={"https://github.com/asep933"}
        target="_blank"
        onMouseOver={() => setGithub(true)}
        onMouseOut={() => setGithub(false)}
      >
        <div>
          {github ? (
            <Image src={linkGithub} alt="linkedin icon" width={28} />
          ) : (
            <Image src={linkGithubWhite} alt="linkedin white icon" width={28} />
          )}
        </div>
      </Link>
    </div>
  );
};

export default Contact;

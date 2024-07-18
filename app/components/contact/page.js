"use client";

import linkedIn from "/public/linkedin-icon.svg";
import linkedInWhite from "/public/linkedin-icon-white.svg";
import linkGithub from "/public/github-image.svg";
import linkGithubWhite from "/public/github-image-white.svg";
import Medsos from "../Medsos";

const Contact = () => {
  return (
    <div className="mb-3 mt-2 flex flex-row items-center gap-3 lg:mb-6 lg:ml-1">
      <Medsos
        path={`https://www.linkedin.com/in/sepsupriatnaa/`}
        imageOne={linkedIn}
        imageTwo={linkedInWhite}
        alt={"image linkedin"}
      />
      <Medsos
        path={`https://github.com/asep933`}
        imageOne={linkGithub}
        imageTwo={linkGithubWhite}
        alt={"image github"}
      />
    </div>
  );
};

export default Contact;

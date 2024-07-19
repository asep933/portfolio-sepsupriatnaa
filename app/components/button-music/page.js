"use client";

import { useState } from "react";
import useSound from "use-sound";
import { ReactSVG } from "react-svg";

const ButtonMusic = () => {
  const [showButton, setShowButton] = useState(true);
  const [playbackRate, setPlaybcakRate] = useState(0);
  const [volume, setVolume] = useState(0.25);
  const [play, { pause }] = useSound("../../musik-latar.mp3", {
    playbackRate,
    volume,
  });

  const handlePlay = () => {
    setShowButton(!showButton);
    showButton ? play() : pause();

    if (showButton === true) {
      setInterval(() => {
        play();
      }, 128410);
    } else {
      pause();
    }
  };

  return (
    <>
      <button className="relative" onClick={handlePlay}>
        <ReactSVG
          src="../../logo-music.svg"
          beforeInjection={(svg) => {
            svg.classList.add("w-4");
            svg.classList.add("h-4");
            svg.classList.add("hover:scale-110");
            svg.classList.add("hover:-rotate-12");
            svg.classList.add("hover:duration-300");
            svg.classList.add("lg:hover:scale-110");
            svg.classList.add("lg:hover:-rotate-12");
            svg.classList.add("lg:hover:duration-300");
          }}
        />
      </button>
    </>
  );
};

export default ButtonMusic;

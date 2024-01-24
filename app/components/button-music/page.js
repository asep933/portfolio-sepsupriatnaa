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
    soundEnabled: true,
  });

  const handlePlay = () => {
    setShowButton(!showButton);
    showButton ? play() : pause();
  };

  return (
    <>
      <div className="absolute left-9 -top-[2.5px] lg:left-[7.6rem] lg:top-[0.3rem] z-[2222]">
        <button onClick={handlePlay}>
          <ReactSVG
            className="h-4 absolute lg:scale-110 z-10
            "
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

          <div
            className={`${
              !showButton ? "scale-0" : "scale-100"
            } bg-slate-600 p-[1.2px] w-5 -rotate-45 absolute top-[25.8px] -left-[4.5px] lg:-left-[3.8px] transition duration-500 ease-in-out`}
          ></div>
        </button>
      </div>
    </>
  );
};

export default ButtonMusic;

"use client";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import { ReactSVG } from "react-svg";

const ButtonMusic = () => {
  //durasi dalam milidetik 128400
  const [showButton, setShowButton] = useState(true);
  const [playbackRate, setPlaybcakRate] = useState(0);
  const [volume, setVolume] = useState(0.25);
  const [play, { pause }] = useSound("../../musik-latar.mp3", {
    playbackRate,
    volume,
  });

  // useEffect(() => {

  // }, []);

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
          className=""
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

        {/* <div
          className={`${
            !showButton ? "scale-0" : "scale-100"
          } absolute -left-[4.5px] top-[25.8px] w-5 -rotate-45 bg-slate-600 p-[1.2px] transition duration-500 ease-in-out lg:-left-[3.8px]`}
        ></div> */}
      </button>
    </>
  );
};

export default ButtonMusic;

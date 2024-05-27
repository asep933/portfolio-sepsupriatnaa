"use client";

import { X } from "@phosphor-icons/react";

const Description = ({
  title,
  paragraph,
  web,
  setWeb,
  prompt,
  setPrompt,
  uiux,
  setUiux,
  backBlur,
  setBackBlur,
}) => {
  return (
    <div className="relative w-full px-5">
      <div
        id="description"
        className="center-element bg-primary fixed z-20 h-[20rem] w-[18rem]
    rounded-md bg-opacity-75 p-5 shadow-md dark:bg-slate-300 dark:bg-opacity-90 lg:h-[24rem] lg:w-[38rem] lg:px-12 lg:shadow-lg"
      >
        <div className="space-y-3 dark:text-black">
          {web && (
            <button
              onClick={() => {
                setWeb(!web);
                setBackBlur(!backBlur);
              }}
              className="absolute right-4 top-3 z-30"
            >
              <X size={32} />
            </button>
          )}
          {prompt && (
            <button
              onClick={() => {
                setPrompt(!prompt);
                setBackBlur(!backBlur);
              }}
              className="absolute right-4 top-3 z-30"
            >
              <X size={32} />
            </button>
          )}
          {uiux && (
            <button
              onClick={() => {
                setUiux(!uiux);
                setBackBlur(!backBlur);
              }}
              className="absolute right-4 top-3 z-30"
            >
              <X size={32} />
            </button>
          )}

          <div className="lg:space-y-3 lg:pt-16">
            <h1 className=" text-xl font-semibold lg:text-2xl">{title}</h1>
            <p className="mt-2 px-4 lg:text-lg">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// //button close
// const ButtonClose = () => {
//   <>
//     <div className="z-[9999]">
//       <button>
//         <span className="block h-2 w-8 bg-slate-900 p-2"></span>
//       </button>
//     </div>
//   </>;
// };

export default Description;

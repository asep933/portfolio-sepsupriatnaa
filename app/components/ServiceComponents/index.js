import { Browser } from "@phosphor-icons/react/dist/ssr";
import Description from "../description/page";
import { Command, FigmaLogo } from "@phosphor-icons/react";

const Service = ({
  web,
  prompt,
  uiux,
  setWeb,
  setPrompt,
  setUiux,
  backBlur,
  setBackBlur,
}) => {
  return (
    <div
      id="pageDua"
      className="relative flex w-full flex-wrap items-center bg-white pb-16 pt-16 dark:bg-slate-600
        lg:px-32 lg:pb-32 lg:pt-32"
    >
      <div className="fade-in w-full space-y-3 px-5 dark:text-white lg:text-2xl">
        <h1
          data-aos="zoom-in-up"
          className="mx-auto mb-8 text-2xl font-bold lg:text-4xl"
        >
          My Services
        </h1>
        <p data-aos="zoom-in-up">Here are some of my services including:</p>

        <div className="flex flex-col py-16 text-center text-xl text-black lg:grid lg:grid-flow-row lg:gap-12 xl:grid-cols-3">
          <button
            title="Web Development"
            onClick={() => {
              setWeb(!web);
              setBackBlur(!backBlur);
            }}
            data-aos="zoom-in-up"
            className="mt-3 flex w-full justify-center bg-slate-300 hover:bg-opacity-80 lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
          >
            <Browser size={32} />
          </button>
          <button
            title="Prompt AI"
            data-aos="zoom-in-up"
            className="mt-3 flex w-full justify-center bg-slate-300 hover:bg-opacity-80 lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
            onClick={() => {
              setPrompt(!prompt);
              setBackBlur(!backBlur);
            }}
          >
            <Command size={32} />
          </button>
          <button
            title="Ui/Ux"
            data-aos="zoom-in-up"
            className="mt-3 flex w-full justify-center bg-slate-300 hover:bg-opacity-80 lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
            onClick={() => {
              setUiux(!uiux);
              setBackBlur(!backBlur);
            }}
          >
            <FigmaLogo size={32} />
          </button>
        </div>
      </div>
      {web && (
        <Description
          backBlur={backBlur}
          setBackBlur={setBackBlur}
          web={web}
          setWeb={setWeb}
          title={"is Web Devlopment?"}
          paragraph={
            "Web development is the process of creating and maintaining a website or web application. It involves using various programming languages, technologies, and tools to create interactive and responsive user experiences on the web."
          }
        />
      )}
      {prompt && (
        <Description
          backBlur={backBlur}
          setBackBlur={setBackBlur}
          prompt={prompt}
          setPrompt={setPrompt}
          title={"is Prompt Engineer?"}
          paragraph={
            "A prompt engineer is a professional responsible for developing and maintaining computer systems or programs designed to provide responses to specific commands or inputs."
          }
        />
      )}
      {uiux && (
        <Description
          backBlur={backBlur}
          setBackBlur={setBackBlur}
          uiux={uiux}
          setUiux={setUiux}
          title={"is UI/UX?"}
          paragraph={
            "A UI/UX designer is a professional who specializes in creating and enhancing the user interface and user experience of digital products. UI (User Interface) design focuses on the visual elements."
          }
        />
      )}
    </div>
  );
};

export default Service;

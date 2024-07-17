import Description from "../description/page";
import { FigmaLogo, Gear, Stack } from "@phosphor-icons/react";

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
      className="relative flex w-full flex-wrap items-center py-16 dark:bg-slate-600
        lg:px-32 lg:py-28"
    >
      <div className="fade-in w-full space-y-3 px-5 text-black dark:text-white lg:text-2xl">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="mx-auto mb-8 text-2xl font-bold lg:text-4xl"
        >
          What is role of web development?
        </h1>

        <div className="flex flex-col py-16 text-center text-xl text-black lg:grid lg:grid-flow-row lg:gap-12 xl:grid-cols-3">
          <button
            title="Frontend"
            onClick={() => {
              setWeb(!web);
              setBackBlur(!backBlur);
            }}
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mt-3 flex w-full justify-center bg-white shadow-md transition duration-300 ease-in-out hover:bg-third lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
          >
            <FigmaLogo size={32} />
          </button>
          <button
            title="Backend"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mt-3 flex w-full justify-center bg-white shadow-md transition duration-300 ease-in-out hover:bg-third lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
            onClick={() => {
              setPrompt(!prompt);
              setBackBlur(!backBlur);
            }}
          >
            <Gear size={32} />
          </button>
          <button
            title="Fullstack"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mt-3 flex w-full justify-center bg-white shadow-md transition duration-300 ease-in-out hover:bg-third lg:transform lg:rounded-full lg:p-20 lg:hover:rotate-2"
            onClick={() => {
              setUiux(!uiux);
              setBackBlur(!backBlur);
            }}
          >
            <Stack size={32} />
          </button>
        </div>
      </div>
      {web && (
        <Description
          backBlur={backBlur}
          setBackBlur={setBackBlur}
          web={web}
          setWeb={setWeb}
          title={"What is Web Frontend?"}
          paragraph={
            "Frontend development typically includes working with HTML, CSS, and JavaScript to create responsive and interactive elements that users can engage with. It focuses on how the application looks and feels."
          }
        />
      )}
      {prompt && (
        <Description
          backBlur={backBlur}
          setBackBlur={setBackBlur}
          prompt={prompt}
          setPrompt={setPrompt}
          title={"What is Web Backend?"}
          paragraph={
            "Backend, on the other hand, is the server-side of a software application or website. It involves managing and processing data, ensuring the functionality and logic behind the scenes."
          }
        />
      )}
      {uiux && (
        <Description
          backBlur={backBlur}
          setBackBlur={setBackBlur}
          uiux={uiux}
          setUiux={setUiux}
          title={"What is Web Fullstack?"}
          paragraph={
            "Fullstack development involves working on both the frontend and backend of a software application, covering the entire development stack."
          }
        />
      )}
    </div>
  );
};

export default Service;

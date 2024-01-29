"use client";

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
    <div className="max-w-full px-5">
      <div
        id="description"
        className="center-element fixed z-[9999] h-[20rem] w-[18rem] rounded-md
    bg-slate-300 bg-opacity-75 p-5 shadow-md dark:bg-slate-300 dark:bg-opacity-90 lg:h-[24rem] lg:w-[38rem] lg:px-12 lg:shadow-lg"
      >
        <div className="space-y-3 dark:text-black">
          {web && (
            <button
              onClick={() => {
                setWeb(!web);
                setBackBlur(!backBlur);
              }}
              className="absolute right-6 top-2 text-3xl transition duration-300 ease-in-out hover:scale-110"
            >
              x
            </button>
          )}
          {prompt && (
            <button
              onClick={() => {
                setPrompt(!prompt);
                setBackBlur(!backBlur);
              }}
              className="absolute right-6 top-2 text-3xl transition duration-300 ease-in-out hover:scale-110"
            >
              x
            </button>
          )}
          {uiux && (
            <button
              onClick={() => {
                setUiux(!uiux);
                setBackBlur(!backBlur);
              }}
              className="absolute right-6 top-2 text-3xl transition duration-300 ease-in-out hover:scale-110"
            >
              x
            </button>
          )}

          <div className="lg:space-y-3 lg:pt-16">
            <h1 className=" text-xl font-semibold lg:text-2xl">{title}</h1>
            <p className="px-4 lg:text-lg">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

"use client";

const ToggleDark = ({ dark, setDark }) => {
  function handleStatus() {
    setDark(!dark);
  }

  return (
    <div className="flex flex-row">
      <p>{dark ? "Light" : "Dark"}</p>

      <button onClick={handleStatus}>
        <div className="flex items-center ml-2 p-1 w-[32px] bg-white rounded-md relative">
          <span
            className={`absolute left-0 p-[8px] w-1 h-1 transition duration-300 ease-in-out bg-slate-500 rounded-full ${
              dark ? "translate-x-[16px]" : ""
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default ToggleDark;

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ToggleDark = () => {
  const [dark, setDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setDark(true);
  }, []);

  if (!dark) {
    return null;
  }

  function handleStatus() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex flex-row">
      <p>{theme === "dark" ? "Light" : "Dark"}</p>

      <button onClick={handleStatus}>
        <div className="flex items-center ml-2 p-1 w-[32px] bg-white rounded-md relative">
          <span
            className={`absolute left-0 p-[8px] w-1 h-1 transition duration-300 ease-in-out bg-slate-500 rounded-full ${
              theme === "dark" ? "translate-x-[16px]" : ""
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default ToggleDark;

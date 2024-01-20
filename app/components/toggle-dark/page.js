"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ToggleDark = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row">
      <p>{theme === "dark" ? "Light" : "Dark"}</p>

      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
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

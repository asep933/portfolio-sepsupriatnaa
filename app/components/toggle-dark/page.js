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
        <div className="relative ml-2 flex w-[32px] items-center rounded-md bg-white p-1">
          <span
            className={`absolute left-0 h-1 w-1 rounded-full bg-slate-500 p-[8px] transition duration-300 ease-in-out ${
              theme === "dark" ? "translate-x-[16px]" : ""
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default ToggleDark;

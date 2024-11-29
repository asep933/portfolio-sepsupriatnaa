"use client";
import { motion } from "framer-motion";
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
      <p
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </p>

      <motion.div whileTap={{ scale: 1.1 }}>
        <button
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          <div className="relative ml-2 flex w-[32px] items-center rounded-md bg-primary p-1 dark:bg-slate-200">
            <span
              className={`absolute left-0 h-1 w-1 rounded-full bg-secondary p-[8px] transition duration-300 ease-in-out dark:bg-slate-500 ${
                theme === "dark" ? "translate-x-[16px]" : ""
              }`}
            ></span>
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default ToggleDark;

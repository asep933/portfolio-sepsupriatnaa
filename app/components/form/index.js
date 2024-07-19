"use client";

import { useEffect, useState } from "react";

const Form = () => {
  const [isSubmit, setIsSubmit] = useState("no-submit");
  const [input, setInput] = useState({
    name: "",
    email: "",
    text: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setIsSubmit("no-submit");
    }, 3000);
  }, [isSubmit]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsSubmit("submit");
    setInput({
      name: null,
      email: null,
      text: null,
    });
  };

  return (
    <div className="w-full items-center justify-center">
      <div
        className="flex min-w-full flex-col items-center justify-center py-28
      dark:bg-slate-900 dark:text-black lg:py-32"
      >
        <h1 className="mb-8 text-2xl font-bold text-primary dark:text-white">
          Contact Me
        </h1>

        <form
          onSubmit={handleClick}
          className="mt-0 flex w-full flex-col flex-wrap px-5 text-base font-semibold dark:text-white lg:px-[24rem]"
        >
          <label htmlFor="nama" className="text-primary">
            Name
          </label>
          <input
            required
            onChange={(e) => setInput({ name: e.target.value })}
            value={input.name}
            name="nama"
            placeholder="Name..."
            className="mb-3 mt-1 w-full rounded-sm p-2 font-normal shadow-sm focus:outline-third dark:bg-slate-100 dark:text-black dark:focus:outline-slate-700"
          />

          <label htmlFor="email" className="text-primary">
            Email
          </label>
          <input
            required
            type="email"
            onChange={(e) => setInput({ email: e.target.value })}
            value={input.email}
            name="email"
            placeholder="Email..."
            className="mb-5 mt-1 w-full rounded-sm p-2 font-normal shadow-sm focus:outline-third dark:bg-slate-100 dark:text-black dark:focus:outline-slate-700"
          />

          <label htmlFor="pesan" className="text-primary">
            Message
          </label>
          <textarea
            required
            onChange={(e) => setInput({ text: e.target.value })}
            value={input.text}
            placeholder="Message..."
            type="text"
            name="pesan"
            className="mt-1 h-40 w-full rounded-sm font-normal focus:outline-third dark:bg-slate-100 dark:text-black dark:focus:outline-slate-700"
          ></textarea>

          {isSubmit === "submit" && (
            <p className="mt-1 text-green-500">*success sending!</p>
          )}

          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-third p-2 shadow-sm hover:opacity-80 dark:bg-slate-600 dark:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

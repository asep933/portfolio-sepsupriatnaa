"use client";

import { useEffect, useState } from "react";

const Form = () => {
  const [isSubmit, setIsSubmit] = useState("no submit");
  const [input, setInput] = useState({
    name: "",
    email: "",
    text: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setIsSubmit("no submit");
    }, 3000);
  }, [isSubmit]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsSubmit("submit");
    setInput({
      name: "",
      email: "",
      text: "",
    });
  };

  return (
    <>
      <div
        className="fade-in flex min-w-full flex-col items-center pb-16 pt-16
      dark:bg-slate-900 dark:text-black lg:pb-32 lg:pt-32"
      >
        <h1
          data-aos="zoom-in-up"
          className="mb-8 text-2xl font-bold dark:text-white"
        >
          Contact Me
        </h1>

        <form
          onSubmit={handleClick}
          className="mt-0 flex w-full flex-col flex-wrap px-5 text-base font-semibold dark:text-white lg:translate-x-80"
        >
          <label data-aos="zoom-in-up" htmlFor="nama">
            Name
          </label>
          <input
            onChange={(e) => setInput({ name: e.target.value })}
            value={input.name}
            data-aos="zoom-in-up"
            name="nama"
            placeholder="Name..."
            className="mb-3 mt-1 w-full rounded-sm p-2 font-normal shadow-sm focus:outline-orange-300 dark:bg-slate-100 dark:text-black dark:focus:outline-slate-700 lg:w-2/4"
          />

          <label data-aos="zoom-in-up" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setInput({ email: e.target.value })}
            value={input.email}
            data-aos="zoom-in-up"
            name="email"
            placeholder="Email..."
            className="mb-5 mt-1 w-full rounded-sm p-2 font-normal shadow-sm focus:outline-orange-300 dark:bg-slate-100 dark:text-black dark:focus:outline-slate-700 lg:w-2/4"
          />

          <label data-aos="zoom-in-up" htmlFor="pesan">
            Message
          </label>
          <textarea
            onChange={(e) => setInput({ text: e.target.value })}
            value={input.text}
            data-aos="zoom-in-up"
            placeholder="Message..."
            type="text"
            name="pesan"
            className="mt-1 h-40 w-full rounded-sm font-normal focus:outline-orange-300 dark:bg-slate-100 dark:text-black dark:focus:outline-slate-700 lg:w-2/4"
          ></textarea>

          {isSubmit === "submit" && (
            <p className="mt-1 text-green-500">*success sending!</p>
          )}

          <button
            data-aos="zoom-in-up"
            type="submit"
            className="mt-8 w-full rounded-lg bg-orange-200 p-2 shadow-sm hover:opacity-80 dark:bg-slate-600 dark:text-white lg:w-2/4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;

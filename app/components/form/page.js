const Form = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-black pt-16 pb-16 fade-in flex items-center flex-col min-w-full">
        <h1
          data-aos="zoom-in-up"
          className="dark:text-white text-2xl font-bold mb-8"
        >
          Contact Me
        </h1>

        <form className="dark:text-white flex flex-wrap flex-col mt-0 w-full px-5 text-base lg:translate-x-80 font-semibold">
          <label data-aos="zoom-in-up" htmlFor="nama">
            Name
          </label>
          <input
            data-aos="zoom-in-up"
            name="nama"
            placeholder="Name..."
            className="dark:bg-slate-100 dark:focus:outline-slate-700 mb-3 mt-1 rounded-sm p-2 font-normal shadow-sm w-full lg:w-2/4 focus:outline-orange-300"
          />

          <label data-aos="zoom-in-up" htmlFor="email">
            Email
          </label>
          <input
            data-aos="zoom-in-up"
            name="email"
            placeholder="Email..."
            className="dark:bg-slate-100 dark:focus:outline-slate-700 mb-5 mt-1 rounded-sm p-2 font-normal shadow-sm w-full lg:w-2/4 focus:outline-orange-300"
          />

          <label data-aos="zoom-in-up" htmlFor="pesan">
            Message
          </label>
          <textarea
            data-aos="zoom-in-up"
            placeholder="Message..."
            type="text"
            name="pesan"
            className="dark:bg-slate-100 dark:focus:outline-slate-700 rounded-sm mt-1 font-normal w-full lg:w-2/4 focus:outline-orange-300 h-40"
          ></textarea>
          <button
            data-aos="zoom-in-up"
            type="submit"
            className="dark:bg-slate-600 dark:text-white mt-8 bg-orange-200 rounded-lg p-2 w-full shadow-sm hover:opacity-80 lg:w-2/4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;

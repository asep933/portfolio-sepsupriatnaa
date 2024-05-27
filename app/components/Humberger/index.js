const Humberger = ({ addHumberger, handleAnimate }) => {
  return (
    <div id="humberger" className="lg:hidden">
      <button
        title="Menu"
        onClick={handleAnimate}
        id="humberger"
        className="mr-4 space-y-1"
      >
        <span
          className={`humberger-line origin-top-left transition duration-300 ease-in-out dark:bg-slate-600 ${
            addHumberger ? "rotate-45" : ""
          }`}
        ></span>
        <span
          className={`humberger-line transition  duration-300 ease-in-out dark:bg-slate-600 ${
            addHumberger ? "scale-0" : ""
          }`}
        ></span>
        <span
          className={`humberger-line origin-bottom-left  transition duration-300 ease-in-out dark:bg-slate-600 ${
            addHumberger ? "-rotate-45" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Humberger;

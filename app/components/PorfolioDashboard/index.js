import Portfolio from "../PortfolioList";
import ssMovie from "/public/ss-movie.png";
import ssBatik from "/public/batik-1.PNG";
import ssAnime from "/public/ss-animetop.png";

const PortfolioDashboard = () => {
  return (
    <>
      <div className="mt-16 px-5 dark:text-white">
        <div>
          <h1
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mb-8 text-2xl font-bold lg:text-4xl"
          >
            Highlight Portfolio
          </h1>

          <p
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mb-6 font-normal"
          >
            Below are some of the projects that have been worked on:
          </p>
        </div>

        <div className="flex flex-wrap lg:grid lg:grid-cols-2">
          <div className="mt-8 w-full space-y-2 rounded-lg bg-third p-5 text-base shadow-lg transition duration-300 ease-in-out hover:bg-fourth dark:bg-slate-300 lg:scale-75 lg:text-lg">
            <Portfolio
              image={ssMovie}
              alt={"movie ss"}
              title={"Movie"}
              link={"https://movie-flash.vercel.app/"}
            />

            <p
              data-aos="zoom-in-up"
              className="text-center dark:text-black lg:px-4"
            >
              a website with a modern appearance that can search for various
              kinds of films
            </p>
          </div>
          <div className="mt-8 w-full space-y-2 rounded-lg bg-third p-5 text-base shadow-lg transition duration-300 ease-in-out hover:bg-fourth dark:bg-slate-300 lg:scale-75 lg:text-lg">
            <Portfolio
              image={ssAnime}
              alt={"anime ss"}
              title={"Anime Top"}
              link={"https://anime-top-theta.vercel.app/"}
            />

            <p
              data-aos="zoom-in-up"
              className="text-center dark:text-black lg:px-4"
            >
              a web app where users can search for all anime from the newest to
              the most popular
            </p>
          </div>
          <div className="mt-8 w-full space-y-2 rounded-lg bg-third p-5 text-base shadow-lg transition duration-300 ease-in-out hover:bg-fourth dark:bg-slate-300 lg:scale-75 lg:text-lg">
            <Portfolio
              image={ssBatik}
              alt={"batik ss"}
              title={"Batik Nasional"}
              link={"https://batik-sandy.vercel.app/"}
            />

            <p
              data-aos="zoom-in-up"
              className="text-center dark:text-black lg:px-4"
            >
              a website landing page with a simple appearance, with features
              order and order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDashboard;

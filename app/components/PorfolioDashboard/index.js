import Portfolio from "../PortfolioList";
import ssMovie from "/public/ss-movie.png";
import ssShopStar from "/public/ss-shop-star.png";
import ssAnime from "/public/ss-animetop.png";

const PortfolioDashboard = () => {
  return (
    <>
      <div className="mt-16 flex flex-wrap px-5 dark:text-white">
        <div>
          <h1
            data-aos="zoom-in-up"
            className="mb-8 text-2xl font-bold lg:text-4xl"
          >
            Portfolio
          </h1>

          <p data-aos="zoom-in-up" className="mb-6 font-normal">
            Below are some of the projects that have been worked on:
          </p>
        </div>

        <div className="mt-8 w-full space-y-2 rounded-lg bg-orange-200 p-5 text-base shadow-lg dark:bg-slate-300 lg:w-2/4 lg:scale-75 lg:text-lg">
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
            a website with a modern appearance that can search for various kinds
            of films
          </p>
        </div>
        <div className="mt-8 w-full space-y-2 rounded-lg bg-orange-200 p-5 text-base shadow-lg dark:bg-slate-300 lg:w-2/4 lg:scale-75 lg:text-lg">
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
        <div className="mt-8 w-full space-y-2 rounded-lg bg-orange-200 p-5 text-base shadow-lg dark:bg-slate-300 lg:w-2/4 lg:scale-75 lg:text-lg">
          <Portfolio
            image={ssShopStar}
            alt={"ecommece ss"}
            title={"ecommerce"}
            link={"https://ecommerce-shop-star.vercel.app/"}
          />

          <p
            data-aos="zoom-in-up"
            className="text-center dark:text-black lg:px-4"
          >
            a website landing page with a simple appearance, with features order
            and checkout with fake data
          </p>
        </div>
      </div>
    </>
  );
};

export default PortfolioDashboard;

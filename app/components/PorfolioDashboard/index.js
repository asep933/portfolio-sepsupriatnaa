import Portfolio from "../PortfolioList";
import ssMovie from "/public/ss-movie.png";
import ssBatik from "/public/batik-1.PNG";
import ssAnime from "/public/ss-animetop.png";
import ssMemor from "/public/memor-ease.png";

const PortfolioDashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-3 px-5 dark:text-white lg:gap-6">
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

        <div className="flex flex-wrap gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
          <Portfolio
            image={ssBatik}
            alt={"batik ss"}
            title={"Batik Nasional"}
            link={"https://batik-sandy.vercel.app/"}
            pathGithub={"https://github.com/asep933/batik.git"}
          />

          <Portfolio
            image={ssMemor}
            alt={"memor ease ss"}
            title={"Memor Ease"}
            link={"https://memor-ease.vercel.app/"}
            pathGithub={"https://github.com/asep933/memor-ease.git"}
          />

          <Portfolio
            image={ssMovie}
            alt={"movie ss"}
            title={"Movie"}
            link={"https://movie-flash.vercel.app/"}
            pathGithub={"https://github.com/asep933/MovieFlash.git"}
          />

          <Portfolio
            image={ssAnime}
            alt={"anime ss"}
            title={"Anime Top"}
            link={"https://anime-top-theta.vercel.app/"}
            pathGithub={"https://github.com/asep933/AnimeTop.git"}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioDashboard;

import Portfolio from "../components/PortfolioList";
import ssAnime from "/public/ss-animetop.png";
import ssCalculator from "/public/ss-calculator.png";
import ssShopStar from "/public/ss-shop-star.png";
import ssMovie from "/public/ss-movie.png";
import ssBatik from "/public/batik-1.PNG";
import ssMemor from "/public/memor-ease.png";
import ssReelInsight from "/public/reelinsight-1.png";
import ssCat from "/public/cat-1.png";

const page = () => {
  return (
    <div
      className="mx-auto flex h-auto w-full max-w-screen-xl flex-col gap-8 px-5 pb-16 pt-32 text-lg 
    lg:h-auto lg:px-0 lg:pb-36 lg:pt-20"
    >
      <h1
        data-aos="zoom-in-up"
        className="mx-auto mb-8 text-2xl font-bold lg:mb-0 lg:ml-32 lg:mt-8 lg:text-4xl"
      >
        Portfolio List
      </h1>

      <div className="grid gap-4 lg:grid-cols-2 lg:gap-8 lg:px-32">
        <Portfolio
          image={ssBatik}
          alt={"batik ss"}
          title={"Batik Nasional"}
          link={"https://batik-sandy.vercel.app/"}
          pathGithub={"https://github.com/asep933/batik.git"}
        />
        <Portfolio
          image={ssMemor}
          alt={"memor ss"}
          title={"MemorEase"}
          link={"https://memor-ease.vercel.app/"}
          pathGithub={"https://github.com/asep933/memor-ease.git"}
        />
        <Portfolio
          image={ssAnime}
          alt={"anime ss"}
          title={"Anime Top"}
          link={"https://anime-top-theta.vercel.app/"}
          pathGithub={"https://github.com/asep933/AnimeTop.git"}
        />
        <Portfolio
          image={ssReelInsight}
          alt={"reelinsight ss"}
          title={"ReelInsight"}
          link={"https://github.com/asep933/reelinsight.git"}
          pathGithub={"https://github.com/asep933/reelinsight.git"}
        />
        <Portfolio
          image={ssCat}
          alt={"image cat"}
          title={"Cats"}
          link={"https://github.com/asep933/cats.git"}
          pathGithub={"https://github.com/asep933/cats.git"}
        />
        <Portfolio
          image={ssCalculator}
          alt={"calculator ss"}
          title={"Calculator"}
          link={"https://calculator-dusky-nu.vercel.app/"}
          pathGithub={"https://github.com/asep933/calculator.git"}
        />
        <Portfolio
          image={ssShopStar}
          alt={"ecommece ss"}
          title={"ecommerce"}
          link={"https://ecommerce-shop-star.vercel.app/"}
          pathGithub={"https://github.com/asep933/ecommerce-shopStar.git"}
        />
        <Portfolio
          image={ssMovie}
          alt={"movie ss"}
          title={"Movie"}
          link={"https://movie-flash.vercel.app/"}
          pathGithub={"https://github.com/asep933/MovieFlash.git"}
        />
      </div>
    </div>
  );
};

export default page;

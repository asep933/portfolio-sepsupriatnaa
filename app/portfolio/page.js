import Portfolio from "../components/PortfolioList";
import ssAnime from "/public/ss-animetop.png";
import ssCalculator from "/public/ss-calculator.png";
import ssShopStar from "/public/ss-shop-star.png";
import ssMovie from "/public/ss-movie.png";
import ssBatik from "/public/batik-1.PNG";
import ssMemor from "/public/memor-ease.png";

const page = () => {
  return (
    <div
      className="flex h-auto w-full flex-col gap-8 px-5 pt-16 text-lg lg:h-auto lg:px-0 
    lg:pb-36 lg:pt-20"
    >
      <h1
        data-aos="zoom-in-up"
        className="mx-auto mb-8 text-2xl font-bold lg:mb-0 lg:ml-32 lg:mt-8 lg:text-4xl"
      >
        Portfolio List
      </h1>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:px-32">
        <Portfolio
          image={ssBatik}
          alt={"batik ss"}
          title={"Batik Nasional"}
          link={"https://batik-sandy.vercel.app/"}
        />
        <Portfolio
          image={ssMemor}
          alt={"memor ss"}
          title={"MemorEase"}
          link={"https://memor-ease.vercel.app/"}
        />
        <Portfolio
          image={ssAnime}
          alt={"anime ss"}
          title={"Anime Top"}
          link={"https://anime-top-theta.vercel.app/"}
        />
        <Portfolio
          image={ssCalculator}
          alt={"calculator ss"}
          title={"Calculator"}
          link={"https://calculator-dusky-nu.vercel.app/"}
        />
        <Portfolio
          image={ssShopStar}
          alt={"ecommece ss"}
          title={"ecommerce"}
          link={"https://ecommerce-shop-star.vercel.app/"}
        />
        <Portfolio
          image={ssMovie}
          alt={"movie ss"}
          title={"Movie"}
          link={"https://movie-flash.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default page;

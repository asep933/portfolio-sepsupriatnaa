import Portfolio from "../components/PortfolioList";
import ssAnime from "/public/ss-animetop.png";
import ssCalculator from "/public/ss-calculator.png";
import ssShopStar from "/public/ss-shop-star.png";

const page = () => {
  return (
    <div className="h-auto w-full px-5 pt-16  text-lg lg:h-screen lg:px-0 lg:pt-20">
      <h1
        data-aos="zoom-in-up"
        className="mx-auto mb-8 text-2xl font-bold lg:mb-0 lg:ml-32 lg:mt-8 lg:text-4xl"
      >
        Portfolio List
      </h1>

      <div className="lg:mx-32 lg:flex ">
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
      </div>
    </div>
  );
};

export default page;

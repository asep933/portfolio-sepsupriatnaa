import Portfolio from "../components/PortfolioList";
import ssAnime from "/public/ss-animetop.png";
import ssCalculator from "/public/ss-calculator.png";

const page = () => {
  return (
    <div className="h-screen w-full px-5  pt-16 text-lg lg:px-0 lg:pt-20">
      <h1 className="mb-4 text-xl font-medium lg:mb-0 lg:ml-32 lg:mt-8 lg:text-2xl">
        List My Portfolio
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
      </div>
    </div>
  );
};

export default page;

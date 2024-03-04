import ImageBeer from "../../assets/images/home/mobile/image-hero-coffeepress.jpg";
import Collections from "../../components/Header/Collections";
import { cofees } from "../../helpers/helper";

const Home = () => {
  return (
    <div className="home-introduce">
      <div
        className="w-82 mb-28 bg-no-repeat bg-cover rounded-[10px] flex flex-col items-center px-6 py-[100px] "
        style={{ backgroundImage: `url(${ImageBeer})` }}
      >
        <h2 className=" text-whiteText text-center  font-body-font1 text-[40px] font-extrabold leading-10">
          Great coffee made simple.
        </h2>
        <p className="text-whiteText text-center font-body-font2 text-[15px] leading-6  font-normal  mt-6 mb-10">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="w-54 h-14 rounded-md bg-specialGreen border-none text-whiteText text-center leading-6  font-body-font1 p-8 py-4 text-lg font-extrabold">
          Create your plan
        </button>
      </div>
      <Collections items={cofees} />
      <div className="why-choose-us">
        <article>
          <h2 className="text-2xl font-body-font1 text-darkBlue text-center"></h2>
          <p className="text-center text-darkBlue font-body-font2 font-normal text-[15px] leading-6"></p>
        </article>
        <div className="company-benefits">
          <div className="benefit1"></div>
          <div className="benefit2"></div>
          <div className="benefit3"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;

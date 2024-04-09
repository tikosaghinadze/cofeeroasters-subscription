import ImageBeer from "../../assets/images/home/mobile/image-hero-coffeepress.jpg";
import Collections from "../../components/home/Collections";
import Cards from "../../components/home/Cards";
import Steps from "../../components/home/Steps";
import { cardItems, cofees, stepItems } from "../../helpers/helper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ImageBeerTablet from "../../assets/images/home/tablet/image-hero-coffeepress.jpg";
const Home = () => {
  return (
    <div className="home-introduce">
      <div className="w-full h-[500px] rounded-[10px] home-poster-mobile bg-no-repeat bg-center bg-cover px-6 flex flex-col items-center justify-center md:home-poster-tablet md:items-start md:px-14 xl:home-poster-desktop">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className=" text-whiteText text-center  font-body-font1 text-[40px] font-extrabold leading-10 md:text-left  md:text-5xl md:leading-[48px] md:w-80 xl:text-7xl xl:leading-[72px] xl:w-[493px]">
            Great coffee made simple.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-whiteText text-center font-body-font2 text-[15px] leading-6  font-normal  mt-6 mb-10 md:w-96 md:text-left">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Link
            onClick={() => handleLinkClick()}
            to="/plan"
            className="w-54 h-14 rounded-md bg-specialGreen border-none text-whiteText text-center leading-6  font-body-font1 p-8 py-4 text-lg font-extrabold hover:bg-hovertBlue "
          >
            Create your plan
          </Link>
        </motion.div>
      </div>
      <Collections items={cofees} />
      <Cards items={cardItems} />
      <Steps items={stepItems} />
    </div>
  );
};
export default Home;

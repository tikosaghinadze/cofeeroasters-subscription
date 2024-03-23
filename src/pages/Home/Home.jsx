import ImageBeer from "../../assets/images/home/mobile/image-hero-coffeepress.jpg";
import Collections from "../../components/home/Collections";
import Cards from "../../components/home/Cards";
import Steps from "../../components/home/Steps";
import { cardItems, cofees, stepItems } from "../../helpers/helper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="home-introduce">
      <div
        className="w-82 mb-28 bg-no-repeat bg-cover rounded-[10px] flex flex-col items-center px-6 py-[100px] "
        style={{ backgroundImage: `url(${ImageBeer})` }}
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className=" text-whiteText text-center  font-body-font1 text-[40px] font-extrabold leading-10">
            Great coffee made simple.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-whiteText text-center font-body-font2 text-[15px] leading-6  font-normal  mt-6 mb-10">
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
            className="w-54 h-14 rounded-md bg-specialGreen border-none text-whiteText text-center leading-6  font-body-font1 p-8 py-4 text-lg font-extrabold"
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

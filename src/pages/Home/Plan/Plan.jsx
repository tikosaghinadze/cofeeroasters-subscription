import DarkSteps from "../../../components/Plan/DarkSteps";
import PlanQuestions from "../../../components/Plan/PlanQuestions";
import { questions, stepItems } from "../../../helpers/helper";
import { motion } from "framer-motion";
const Plan = () => {
  return (
    <div className="w-full flex flex-col items-center md:w-[689px] xl:w-[1280px]">
      <div className="w-full rounded-[10px] flex flex-col items-center h-[400px] bg-imageHeroBlackcup bg-cover bg-no-repeat px-6 pb-[136px] pt-[100px] md:items-start xl:pl-[85px]">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className=" text-light font-black font-body-font1 text-[40px] pb-[22px] xl:text-[72px]">
            Create a plan
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-light font-normal text-center  font-body-font2 leading-[25px] text-[15px] md:w-[385px] xl:text-left">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </motion.div>
      </div>
      <DarkSteps items={stepItems} />
      <PlanQuestions items={questions} />
    </div>
  );
};
export default Plan;

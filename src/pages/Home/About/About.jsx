import HeadQuarters from "../../../components/About/HeadQuarters";
import { headQuartersItems } from "../../../helpers/helper";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className=" px-6  pt-[111px] pb-[87px] w-full flex bg-aboutCofee rounded-[10px] flex-col justify-center items-center h-[400px] bg-no-repeat bg-cover md:w-[689px] md:pl-[85px] xl:w-[1280px] xl:items-start xl:pl:-[85px]">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="pb-6 font-body-font1 text-[28px] text-light font-black md:text-left xl:text-[40px]">
            About Us
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[15px] font-body-font2 text-light font-normal text-center md:text-left md:w-[398px]">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-center mt-[120px] md:flex-row md:w-[689px] md:gap-6 xl:w-[1000px] xl:gap-[125px]">
        <div className="w-full h-[400px] bg-aboutHero bg-cover bg-no-repeat rounded-[10px] md:h-[643px] md:w-[400px] "></div>
        <div className="w-full flex flex-col items-center pt-8 md:w-[399px]">
          <h3 className="font-body-font1 font-black text-[32px] text-darkBlue">
            Our commitment
          </h3>
          <p className="text-center text-darkBlue font-normal text-[15px] font-body-font2 pt-[30px] leading-7">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
      <div className="relative px-6 pt-[120px] w-full flex flex-col items-center h-[542px] bg-darkBlue opacity-2 rounded-[10px] mt-[198px] md:w-[689px] md:justify-center xl:w-[1280px] xl:pt-0 xl:items-start xl:h-[411px]">
        <div className="w-[279px] absolute top-0 -translate-y-[50%] bg-cover bg-no-repeat  h-[150px] bg-aboutCup rounded-[10px] xl:right-[90px] "></div>
        <div className="w-full flex flex-col items-center gap-6 xl:w-[588px] xl:pl-[85px] ">
          <h3 className="text-center font-normal font-body-font1 text-[28px] text-light xl:text-[40px]">
            {" "}
            Uncompromising quality
          </h3>
          <p className="text-center font-normal text-[15px] text-light font-body-font2 leading-[25px] xl:text-left ">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
      <HeadQuarters items={headQuartersItems} />
    </div>
  );
};
export default About;

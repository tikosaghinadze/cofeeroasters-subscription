import DarkSteps from "../../../components/Plan/DarkSteps";
import PlanQuestions from "../../../components/Plan/PlanQuestions";
import { questions, stepItems } from "../../../helpers/helper";

const Plan = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full rounded-[10px] flex flex-col items-center h-[400px] bg-imageHeroBlackcup bg-cover bg-no-repeat px-6 pb-[136px] pt-[100px]">
        <h2 className=" text-light font-black font-body-font1 text-[40px] pb-[22px]">
          Create a plan
        </h2>
        <p className="text-light font-normal text-center  font-body-font2 leading-[25px] text-[15px]">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <DarkSteps items={stepItems} />
      <PlanQuestions items={questions} />
    </div>
  );
};
export default Plan;

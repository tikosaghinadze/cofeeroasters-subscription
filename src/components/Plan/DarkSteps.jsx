import Step from "../home/Step";
const DarkSteps = (props) => {
  return (
    <ul className="w-[375px] px-6   bg-darkBlue rounded-[10px] list-none flex  flex-col items-center mt-20 gap-y-14 md:w-[768px] xl:w-[1280px] ">
      <div className="hidden md:flex w-full mt-10 items-center relative gap-x-52 xl:gap-x-[305px] md:gap-[201px] xl:pl-[85px]">
        <hr className="border-cream w-full absolute top-1/2 z-10 md:w-[467px] md:ml-[15px] xl:w-[676px]" />
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 "></span>
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 "></span>
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 "></span>
      </div>
      <ul className="w-[375px] px-6 pb-[80px]  bg-darkBlue rounded-[10px] list-none flex  flex-col items-center mt-20 gap-y-14 md:w-[768px] md:flex-row md:gap-[10px] md:mt-0 md:py-0 xl:w-[1104px] xl:gap-[116px]">
        {props.items.map((item) => {
          return (
            <Step
              color={"#fff"}
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </ul>
  );
};
export default DarkSteps;

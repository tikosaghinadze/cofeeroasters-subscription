import Step from "../home/Step";
const DarkSteps = (props) => {
  return (
    <ul className="w-[375px] px-6 py-[80px]  bg-darkBlue rounded-[10px] list-none flex  flex-col items-center mt-20 gap-y-14 w-full">
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
  );
};
export default DarkSteps;

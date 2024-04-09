import Step from "./Step";
import { Link } from "react-router-dom";
const Steps = (props) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="mt-[660px] w-full flex flex-col items-center md:mt-[405px] md:items-start ">
      <h2 className=" font-black font-body-font1 text-2xl text-gray">
        How it works
      </h2>
      <div className="hidden md:flex w-full mt-10 items-center relative gap-x-52 xl:gap-x-[305px]">
        <hr className="border-cream w-full absolute top-1/2 z-10" />
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 bg-white"></span>
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 bg-white"></span>
        <span className="w-8 h-8 rounded-full border-2 border-hulk z-20 bg-white"></span>
      </div>
      <ul className="list-none flex mb-10 flex-col items-center mt-20 gap-y-14 w-full md:flex-row md:gap-x-3 md:w-fit xl:gap-x-28">
        {props.items.map((item) => {
          return (
            <Step
              color={""}
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
      <Link
        to="/plan"
        className="no-underline font-body-font1 font-black text-lg leading-[25px] text-light px-8 py-4 rounded-md bg-hulk md:mt-11 hover:bg-hovertBlue "
      >
        <button onClick={handleLinkClick}>Create your plan</button>
      </Link>
    </div>
  );
};
export default Steps;

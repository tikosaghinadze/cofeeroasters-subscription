import Step from "./Step";
import { Link } from "react-router-dom";
const Steps = (props) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="mt-[660px] w-full flex flex-col items-center ">
      <h2 className=" font-black font-body-font1 text-2xl text-gray">
        How it works
      </h2>
      <ul className="list-none flex mb-10 flex-col items-center mt-20 gap-y-14 w-full">
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
        className="no-underline font-body-font1 font-black text-lg leading-[25px] text-light px-8 py-4 rounded-md bg-hulk md:mt-11"
      >
        <button onClick={handleLinkClick}>Create your plan</button>
      </Link>
    </div>
  );
};
export default Steps;

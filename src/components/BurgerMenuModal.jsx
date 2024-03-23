import { Link } from "react-router-dom";

const BurgerMenuModal = (props) => {
  return (
    <div className=" rounded-[10px] modalGradient h-[500px] fixed top-[333px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light w-[327px] flex justify-start items-center">
      <ul className=" w-full flex flex-col items-center justify-start gap-8">
        <Link
          className="text-2xl text-darkBlue font-body-font1"
          onClick={() => props.showBurgerMenuHandle()}
          to="/"
        >
          Home{" "}
        </Link>
        <Link
          className="text-2xl text-darkBlue font-body-font1"
          onClick={() => props.showBurgerMenuHandle()}
          to="/about"
        >
          About Us
        </Link>
        <Link
          className="text-2xl text-darkBlue font-body-font1"
          onClick={() => props.showBurgerMenuHandle()}
          to="/plan"
        >
          Create Your Plan
        </Link>
      </ul>
    </div>
  );
};
export default BurgerMenuModal;

import { Link } from "react-router-dom";

const BurgerMenuModal = (props) => {
  return (
    <div className=" w-full h-[400px] flex justify-center items-center">
      <ul className=" w-full flex flex-col items-center justify-center gap-8">
        <Link onClick={() => props.showBurgerMenuHandle()} to="/">
          Home{" "}
        </Link>
        <Link onClick={() => props.showBurgerMenuHandle()} to="/about">
          About Us
        </Link>
        <Link onClick={() => props.showBurgerMenuHandle()} to="/plan">
          Create Your Plan
        </Link>
      </ul>
    </div>
  );
};
export default BurgerMenuModal;

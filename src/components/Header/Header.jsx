import { useState } from "react";
import Logo from "../../assets/images/shared/desktop/logo.svg";
import Hamburger from "../../assets/images/shared/mobile/icon-hamburger.svg";
import CloseBtn from "../../assets/images/home/mobile/close.svg";
import BurgerMenuModal from "../BurgerMenuModal.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  

  const showBurgerMenuHandle = () => {
    setShowBurgerMenu(!showBurgerMenu);
    setShowModal(!showModal);
  };
  return (
    <header className=" w-full flex justify-between items-center mb-10 md:w-[689px]">
      <img
        className="w-40 h-4 md:w-[236px] md:h-[26px]"
        src={Logo}
        alt=" cofeeroasters logo"
      />
      <div className="md:flex gap-[33px] hidden ">
        <Link
          
          className="text-[12px]  uppercase leading-[15px] font-bold text-gray tracking-[0.923px] font-body-font2"
          to="/"
        >
          Home{" "}
        </Link>
        <Link
          className="text-[12px]  uppercase leading-[15px] font-bold text-gray font-body-font2"
          to="/about"
        >
          About Us
        </Link>
        <Link
          className="text-[12px]  uppercase leading-[15px] font-bold text-gray font-body-font2"
          to="/plan"
        >
          Create Your Plan
        </Link>
      </div>
      {showBurgerMenu ? (
        <img
          onClick={() => showBurgerMenuHandle()}
          src={CloseBtn}
          alt="close button"
        />
      ) : (
        <img
          className="md:hidden "
          onClick={() => showBurgerMenuHandle()}
          src={Hamburger}
          alt="hamburger menu icon "
        />
      )}
      {showModal && (
        <BurgerMenuModal showBurgerMenuHandle={showBurgerMenuHandle} />
      )}
    </header>
  );
};
export default Header;

import { useState } from "react";
import Logo from "../../assets/images/shared/desktop/logo.svg";
import Hamburger from "../../assets/images/shared/mobile/icon-hamburger.svg";
import CloseBtn from "../../assets/images/home/mobile/close.svg";
const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const showBurgerMenuHandle = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  return (
    <header className=" w-full flex justify-between items-center mb-10">
      <img className="w-40 h-4" src={Logo} alt=" cofeeroasters logo" />

      {showBurgerMenu ? (
        <img
          onClick={() => showBurgerMenuHandle()}
          src={CloseBtn}
          alt="close button"
        />
      ) : (
        <img
          onClick={() => showBurgerMenuHandle()}
          src={Hamburger}
          alt="hamburger menu icon "
        />
      )}
    </header>
  );
};
export default Header;

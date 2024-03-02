import Logo from "../../assets/images/shared/desktop/logo.svg";
import Hamburger from "../../assets/images/shared/mobile/icon-hamburger.svg";
const Header = () => {
  return (
    <header className=" w-full flex justify-between items-center mb-10">
      <img className="w-40 h-4" src={Logo} alt=" cofeeroasters logo" />
      <img src={Hamburger} alt="hamburger menu icon " />
    </header>
  );
};
export default Header;

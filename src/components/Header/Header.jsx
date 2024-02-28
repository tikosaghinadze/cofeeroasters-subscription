import Logo from "../../assets/images/shared/desktop/logo.svg";
import Hamburger from "../../assets/images/shared/mobile/icon-hamburger.svg";
const Header = () => {
  return (
    <header className="mean-header">
      <img className="logo" src={Logo} alt=" cofeeroasters logo" />
      <img src={Hamburger} alt="hamburger menu icon " />
    </header>
  );
};
export default Header;

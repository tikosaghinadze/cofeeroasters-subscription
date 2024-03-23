import Logo from "../../assets/images/shared/desktop/footerLogo.svg";
import Facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/images/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";
const handleLinkClick = () => {
  window.scrollTo(0, 0);
};
const Footer = () => {
  return (
    <div className="mt-[120px] w-full p-14 bg-darkBlue ">
      <div>
        <img className="" src={Logo} alt="logo" />
      </div>
      <div className=" flex flex-col items-center my-12 gap-6">
        <Link
          onClick={handleLinkClick}
          to="/"
          className="text-gray cursor-pointer font-bold text-xs tracking-widest"
        >
          HOME
        </Link>
        <Link
          onClick={handleLinkClick}
          to="/about"
          className="text-gray cursor-pointer font-bold text-xs tracking-widest"
        >
          ABOUT US
        </Link>
        <Link
          onClick={handleLinkClick}
          to="/plan"
          className="text-gray cursor-pointer font-bold text-xs tracking-widest"
        >
          Create your plan
        </Link>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <div>
          {" "}
          <img src={Facebook} alt="facebook" />
        </div>
        <div>
          {" "}
          <img src={Twitter} alt="tvitter" />
        </div>
        <div>
          {" "}
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};
export default Footer;

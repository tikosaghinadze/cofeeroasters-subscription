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
    <div className="mt-[120px] w-full p-14 bg-darkBlue md:w-[688px] xl:w-[1280px] xl:flex  xl:flex-row ">
      <div className="mt-14 xl:mt-0 xl:w-[236px] xl:h-[26px] md:flex md:justify-center md:mt-0">
        <Link to="/" onClick={handleLinkClick}>
          <img
            className=" xl:mt-0 xl:w-[236px] xl:h-[26px]"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className=" flex flex-col items-center my-12 gap-6 xl:flex-row md:flex-row md:justify-center xl:my-0 xl:ml-[100px] xl:mr-[400px] ">
        <Link
          onClick={handleLinkClick}
          to="/"
          className="text-gray cursor-pointer font-bold text-xs tracking-widest hover:text-white"
        >
          HOME
        </Link>
        <Link
          onClick={handleLinkClick}
          to="/about"
          className="text-gray cursor-pointer font-bold text-xs tracking-widest hover:text-white"
        >
          ABOUT US
        </Link>
        <Link
          onClick={handleLinkClick}
          to="/plan"
          className="text-gray cursor-pointer font-bold text-xs tracking-widest hover:text-white"
        >
          CREATE YOUR PLAN
        </Link>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="hover:bg-hoverCream">
          {" "}
          <img className="svg-icon" src={Facebook} alt="facebook" />
        </div>
        <div className="hover:bg-hoverCream">
          {" "}
          <img src={Twitter} alt="tvitter" />
        </div>
        <div className="hover:bg-hoverCream">
          {" "}
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};
export default Footer;

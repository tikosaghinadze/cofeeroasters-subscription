import Logo from "../../assets/images/shared/desktop/footerLogo.svg";
import Facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/images/shared/desktop/icon-instagram.svg";
const Footer = () => {
  return (
    <div className="mt-[120px] w-full p-14 bg-darkBlue ">
      <div>
        <img className="" src={Logo} alt="logo" />
      </div>
      <div className=" flex flex-col items-center my-12 gap-6">
        <h3 className="text-gray font-bold text-xs tracking-widest">HOME</h3>
        <h3 className="text-gray font-bold text-xs tracking-widest">
          ABOUT US
        </h3>
        <h3 className="text-gray font-bold text-xs tracking-widest">
          Create your plan
        </h3>
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

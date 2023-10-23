import Navbar from "./Navbar";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { logo } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="sm:px-10 px-4 py-3 max-w-7xl relative z-0 min-w-full h-[100px] mt-0 mx-auto p-4 flex items-center justify-between">
        <img src={logo} alt="logo" className="object-contain w-20 h-25 mr-2" />

        <div className="flex items-center">
          <a
            href="#form"
            className="bg-blue-400 text-[13px] md:text-18px p-3 rounded-xl text-white mr-4 hover:bg-blue-500"
          >
            ADMISSION FORM
          </a>
          <a
            href="#connect"
            className="text-[13px] md:text-18px text-white p-3 rounded-xl bg-blue-400 hover:bg-blue-500"
          >
            CONNECT WITH US
          </a>
          <BiPhoneCall className="text-blue-400 mx-3 text-2xl hover:bg-blue-500 hover:text-4xl hover:rounded-xl hover:text-white hover:p-2" />

          <CiLocationOn className="text-blue-400 mx-3 text-2xl hover:bg-blue-500  hover:text-4xl hover:rounded-xl hover:text-white hover:p-2" />
        </div>
      </div>
    </>
  );
};

export default Hero;

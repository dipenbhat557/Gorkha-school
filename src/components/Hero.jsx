import { SectionWrapper } from "../hoc";
import Navbar from "./Navbar";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <>
      <div className="w-full mt-0 mx-3 p-4 flex items-center justify-between">
        {/* Left side with logo */}
        <div className="flex items-center">
          <img
            src="src/assets/gorkhalogo.png"
            alt="logo"
            className="object-contain w-11 h-13 mr-2"
          />
        </div>

        {/* Right side with phone icon */}
        <div className="flex items-center">
          <a
            href="#form"
            className="bg-blue-400 p-3 rounded-xl text-white mr-4"
          >
            ADMISSION FORM
          </a>
          <a href="#connect" className="text-white p-3 rounded-xl bg-blue-400">
            CONNECT WITH US
          </a>
          <BiPhoneCall className="text-blue-400 mx-3 text-2xl" />

          <CiLocationOn className="text-blue-400 mx-3 text-2xl" />
        </div>
      </div>
    </>
  );
};

const HeroWithWrapper = SectionWrapper(Hero, "hero");

export default () => (
  <>
    <HeroWithWrapper />
    <Navbar />
  </>
);

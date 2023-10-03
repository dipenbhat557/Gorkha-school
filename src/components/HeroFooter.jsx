import { AiOutlineArrowRight } from "react-icons/ai";
import { footerConstants } from "../constants";

const HeroFooter = () => {
  const handleExplore = () => {};
  return (
    <div className="flex flex-row items-center justify-between bg-blue-400 w-full md:h-[130px] h-[165px] text-white">
      {footerConstants.map((item, index) => {
        return (
          <div key={index} className="flex flex-row h-full w-[22%] ml-6 p-3">
            <img
              src={`${item.img}`}
              alt={`Image ${item.index}`}
              className="h-6 md:h-9 rounded-md object-contain"
            />
            <div className="ml-8 mt-0">
              <p className="text-[14px] md:text-[20px] font-semibold">
                {item.header}
              </p>
              <p className=" text-[13px] font-light md:text-[16px]">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}

      <div className="bg-blue-500 rounded-r-none rounded-2xl mr-0 p-2 pt-4 h-full  ml-8 md:mr-19 md:px-9">
        <p className="text-[14px] font-light md:text-[16px]">
          FEEL FREE TO ASK ANY QUERY
        </p>
        <p className="text-[14px] md:text-[20px] font-semibold">
          Explore The Gorkha
        </p>
        <div className="flex items-center justify-left">
          <p className="text-[14px] md:text-[20px] font-semibold">SCHOOL</p>
          <AiOutlineArrowRight
            className="text-2xl ml-9 cursor-pointer"
            onClick={handleExplore}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroFooter;

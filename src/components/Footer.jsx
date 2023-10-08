import { logo, logo1, logo2 } from "../assets";

const Footer = () => {
  const handleReadMore = () => {};
  return (
    <div className="w-full h-[400px] bg-gray-200 ">
      <p className="font-bold text-[18px] mx-4 pt-2">Our Branches</p>
      <div className="flex items-center justify-between w-[full] h-[80%]">
        <div className="flex w-[40%] flex-col h-full">
          <div className="flex mt-4 ml-6 justify-around w-full h-[25%] md:h-[40%]">
            <img src={logo1} className=" w-[25%] h-full" alt="logo1" />
            <img src={logo2} className=" w-[25%] h-full" alt="logo2" />
            <img src={logo} className=" w-[25%] h-full" alt="gorkha logo" />
          </div>
          <div className="m-4 text-[12px] md:text-[14px] leading-loose">
            <p className="font-bold">About Us</p>
            <p>
              Gorkha Group was established in 1998 AD, Dang, founded by a group
              of Gurkhas (Lahures) to provide quality education for current and
              future generation of students.
              <button
                className="ml-4 font-bold hover:bg-gray-500 hover:rounded-xl hover:p-1"
                onClick={handleReadMore}
              >
                Read more
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center h-[80%] md:h-full w-[25%] mt-0">
          <img
            src={logo}
            className="w-[50%] h-[50%] object-contain"
            alt="logo"
          />
          <p className="font-bold text-[14px] md:text-[18px] leading-loose">
            "Home Of Students"
          </p>
          <div className="flex flex-col text-[12px] md:text-[14px] mt-3">
            <p className="font-bold">Contact Info</p>
            <ul className="list-disc">
              <li>Address:Lamahi-6, Dang, Nepal</li>
              <li>Phone:082-540707</li>
              <li>Mobile:+977 9857850707</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center mb-0 absolute text-center">
        <p className="font-bold bg-blue-400 p-2 rounded-t-md leading-loose">
          Copyright &copy;2023 Gorkha Secondary School
        </p>
      </div>
    </div>
  );
};
export default Footer;

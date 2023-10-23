import { AiOutlineArrowRight } from "react-icons/ai";
import { galleryItems } from "../constants";

const Gallery = () => {
  const handleMore = () => {};
  return (
    <div className="w-full h-[280px] md:h-[370px] ">
      <div className="flex items-center justify-between ml-[28px] font-semibold w-[20%] h-[50px]">
        <p className="text-black text-[18px] md:text-[20px] mr-2">Gallery</p>
        <div className="w-[45%] h-[5px] border-b-4 border-blue-400 rounded-3xl flex-grow" />
      </div>

      <div className="flex w-full h-[75%] justify-around items-center bg-gradient-to-b from-blue-400 to-blue-50 pt-4">
        {galleryItems.map((item, index) => {
          return (
            <div
              className="flex flex-col items-center w-[30%] h-full hover:w-[35%]"
              key={index}
            >
              <div className="relative w-full h-full">
                <img
                  className="object-cover rounded-2xl w-full h-full"
                  src={item.img}
                  alt={item.title}
                />
                <p
                  className="text-[13px] font-extrabold text-white flex flex-row absolute bottom-2 right-2 ml-3 mb-3 hover:bg-slate-100 hover:p-1 hover:rounded-2xl hover:text-black"
                  onClick={handleMore}
                >
                  {item.title}
                  <AiOutlineArrowRight className="ml-1 text-2xl" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[80%] h-[5px] border-b-4 border-blue-500 rounded-3xl mt-3 mx-auto " />
    </div>
  );
};

export default Gallery;

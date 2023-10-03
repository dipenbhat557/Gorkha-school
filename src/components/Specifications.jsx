import { specConst } from "../constants";

const Specifications = () => {
  return (
    <div className="flex w-full h-[150px] py-3 px-7">
      <div className="flex h-full  w-full items-center justify-around pt-3 bg-blue-400 rounded-2xl">
        {specConst.map((spec, index) => {
          return (
            <div
              key={index}
              className="flex items-center  flex-col h-full w-[18%]"
            >
              <div className="h-18 w-12">
                <img
                  className=" object-cover rounded-xl"
                  src={spec.img}
                  alt={`Spec ${index}`}
                />
              </div>
              <p className="text-white text-center md:w-[45%] mt-4 text-[12px] flex-wrap-2 font-semibold">
                {spec.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Specifications;

import { messageItems } from "../constants";

const Messages = () => {
  return (
    <div className="w-[95%] h-[600px] md:h-[500px] mt-4 mx-[8px]">
      <div className="border-dashed border-b-4 rounded-xl mx-[30px] border-blue-400" />
      <div
        className="bg-blue-400 w-[80px] h-[120px] flex justify-start mt-0.5 ml-[30px] rounded-b-xl"
        style={{ position: "absolute", zIndex: 0 }}
      ></div>
      <div className="w-full h-[80%] flex flex-row justify-around items-center mx-[12px] md:mx-[18px] mt-14 md:mt-10  mb-10">
        {messageItems.map((message, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center h-[60%] md:h-[70%] w-[65%] md:w-[45%]"
              style={{ zIndex: 1 }}
              key={index}
            >
              <img
                className="rounded-3xl w-[80%] h-[90%]"
                src={message.img}
                alt={message.title}
              />
              <div className="flex flex-col">
                <div className="flex items-center ml-1 md:ml-3 font-semibold">
                  <p className="text-blue-400 text-8px md:text-18px ml-3 md:ml-9">
                    {message.title}
                  </p>
                  <div className="ml-2 w-[8%] h-[2px] border-b-4 border-blue-400 rounded-3xl" />
                </div>
                <p className="text-[12px] md:text-[14px] text-center text-2xl font-bold md:font-extrabold mx-8">
                  {message.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;

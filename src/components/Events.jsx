import { useState, useEffect } from "react";
import { eventsItems } from "../constants";
import { AiOutlineArrowRight } from "react-icons/ai";

const Events = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the current events based on the currentIndex
  const updateCurrentEvents = () => {
    const startIndex = currentIndex;
    const endIndex = startIndex + 3;
    const nextIndex = endIndex % eventsItems.length;
    if (endIndex !== eventsItems.length - 1) {
      setCurrentEvents(
        eventsItems
          .slice(startIndex, endIndex)
          .concat(eventsItems.slice(0, nextIndex))
      );
    } else {
      setCurrentEvents(eventsItems.slice(startIndex, endIndex));
    }
  };

  // Function to handle automatic switching of events
  const handleAutoSwitch = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % eventsItems.length;
      return newIndex;
    });
  };

  useEffect(() => {
    // Initialize current events
    updateCurrentEvents();

    // Set up automatic switching every 5 seconds (adjust as needed)
    const interval = setInterval(handleAutoSwitch, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleShowEvents = () => {};

  return (
    <div className="w-[95%] h-[300px] mx-auto">
      <div className="flex items-center justify-between ml-3 font-semibold w-[90%] h-[50px]">
        <div className="flex items-center justify-center w-[20%]">
          <p className="text-black text-[18px] md:text-[20px] mr-2">Events</p>
          <div className="w-[45%] h-[5px] border-b-4 border-blue-400 rounded-3xl" />
        </div>

        <div
          className="flex items-center mr-2 cursor-pointer text-red-400 hover:bg-red-400 hover:text-white hover:rounded-xl hover:p-2"
          onClick={handleShowEvents}
        >
          <p className="  text-18px">View All Events</p>
          <AiOutlineArrowRight className="text-3xl ml-4" />
        </div>
      </div>

      <div className="flex flex-row w-[100%] h-[250px] justify-around items-center">
        {currentEvents.map((events, index) => {
          return (
            <div
              className="flex flex-col items-center w-[30%] hover:w-[35%] hover:bg-slate-100 hover:rounded-xl h-full"
              key={index}
            >
              <img
                className="object-contain w-[100%] h-[80%] hover:h-[85%]"
                src={events.img}
                alt={events.title}
              />
              <p className="font-bold text-gray-500 mt-0 text-[12px]">
                {events.date}
              </p>
              <p className="text-[10px] font-extrabold">{events.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;

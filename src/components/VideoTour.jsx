const VideoTour = () => {
  const handleReadmore = () => {};
  return (
    <div className="w-full h-[510px] mt-4 mx-4 bg-white">
      <div className="h-[21px] w-full">
        <div className="flex items-center ml-6 font-semibold">
          <p className="text-blue-400">A SHORT VIDEO TOUR</p>
          <div className="ml-2 w-[5%] h-[2px] bg-blue-400" />
        </div>
        <p className="h-[100px] ml-6 text-black font-semibold">
          Welcome to
          <br /> Gorkha School
        </p>
      </div>
      <div className="h-[400px] w-full flex justify-around mt-14">
        <div className="h-full w-[53%] bg-gray-400 rounded-2xl"></div>
        <div className="h-full w-[40%] bg- flex items-center justify-center flex-col  bg-gradient-to-b from-blue-400 to-blue-50 mb-4 pt-2 p-4 rounded-2xl">
          <p className="text-[22px] font-semibold mb-2 text-center">
            Introduction
          </p>
          <p className="md:text-[18px] text-[12.5px] text-center">
            Gorkha Group was established in 1998 AD, Dang
            <br />
            founded by a group of Gurkhas (Lahures) to provide
            <br />
            quality education for current and future generation of students.
            <br /> The Gorkha Group has been running 3 schools
          </p>
          <button
            className="bg-blue-400 text-white font-semibold rounded-md p-2 mt-3"
            onClick={handleReadmore}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTour;

import { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Video = ({ videoRef, index }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=" p-5 rounded-2xl h-full w-full"
    >
      <div
        style={{
          position: "relative",
          paddingBottom: "40.25%",
          height: "100%",
          width: "100%",
        }}
      >
        <iframe
          ref={videoRef}
          src="https://www.youtube.com/embed/8W7ieJ8sGhE?autoplay=1&mute=1&loop=1&controls=0"
          title="Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          className="rounded-2xl bg-slate-500"
        />
      </div>
    </Tilt>
  );
};

const VideoTour = () => {
  const [autoplay, setAutoplay] = useState(false);
  const videoRef = useRef(null);

  const handleReadmore = () => {
    // Implement your read more logic here
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAutoplay(true);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="w-[98%] h-[450px] md:h-[510px] mt-4 mb-0 mx-auto bg-white">
      <div className="h-[5%] w-full">
        <div className="flex items-center ml-3 font-semibold">
          <p className="text-blue-400 text-[18px] md:text-[20px]">
            A SHORT VIDEO TOUR
          </p>
          <div className="ml-2 w-[8%] h-[2px] border-b-4 border-blue-400 rounded-3xl" />
        </div>
        <p className="h-[100px] ml-3 text-black text-18px font-semibold">
          Welcome to
          <br /> Gorkha School
        </p>
      </div>
      <div className="h-[85%] w-full flex flex-wrap items-center mt-8">
        <motion.div
          className="h-full w-[53%] rounded-2xl"
          variants={fadeIn("up", "spring", 1, 0.75)}
        >
          <Video videoRef={videoRef} index={1} />
        </motion.div>
        <motion.div
          className="h-full w-[40%] flex items-center justify-center flex-col bg-gradient-to-b from-blue-400 to-blue-50 mb-4 p-auto rounded-2xl"
          variants={fadeIn("up", "spring", 1, 0.75)}
        >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className=" p-5 flex flex-col items-center justify-center rounded-2xl h-full w-full"
          >
            <p className="text-[20px] font-semibold mb-2 text-center">
              Introduction
            </p>
            <p className="md:text-[18px] text-[12.5px] text-center">
              Gorkha Group was established in 1998 AD, Dang
              <br />
              founded by a group of Gurkhas (Lahures) to provide
              <br />
              quality education for the current and future generation of
              students.
              <br /> The Gorkha Group has been running 3 schools
            </p>
            <button
              className="bg-blue-400 text-white font-semibold rounded-md p-2 mt-3 hover:bg-blue-500 cursor-pointer"
              onClick={handleReadmore}
            >
              Read more
            </button>
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoTour;

import { useEffect, useState } from "react";
import { sliderImages } from "../constants";

// section below the navbar
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-[569px]">
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-300 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={`${slide}`}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute left-3 bottom-7 md:w-[40%] w-[60%] p-2 text-white font-semibold  md:leading-loose">
            <p className="mb-2 font-bold text-[18px] md:text-[22px]">
              CENTER OF EXCELLENCE SINCE 2001
            </p>
            <p className="text-[16px] md:text-[18px]">
              We believe in creating a nurturing environment. As a pioneering
              institute that introduced child-centered learning in Nepal, Gorkha
              is known for its progressive education.
            </p>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

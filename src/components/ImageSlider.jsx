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
          <div className="absolute left-0 bottom-0 w-[80%] p-2 text-white text-[19px] md:text-[36px] font-semibold">
            <b>CENTER OF EXCELLENCE SINCE 2001</b>
            {/* <hr className="w-[50%] mx-4" /> */}
            <br />
            We believe in creating a nurturing environment. As a
            <br />
            pioneering institute that introduced child-centered learning in
            Nepal, Gorkha is known for its progressive education.
            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

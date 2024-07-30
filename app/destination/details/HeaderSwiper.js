// components/HeaderSwiper.js
"use client";

import React, { useState, useEffect } from "react";
import Bali from "../../../public/Cardimages/Bali.JPG";
import HeroImage from "../../../public/Cardimages/BaliHeroImage.JPG";
import HeroImage_2 from "../../../public/Cardimages/BaliHeroImage_2.JPG";
import Meghalaya from "../../../public/Cardimages/Meghalaya.JPG";

const slides = [
  { id: 1, imageUrl: Bali },
  { id: 2, imageUrl: HeroImage },
 
  { id: 3, imageUrl: HeroImage_2 },
  // Add more slides as needed
];

const HeaderSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full h-60 overflow-hidden">
      <div
        className="flex items-center justify-center w-full h-full"
        style={{
          backgroundImage: `url(${slides[currentIndex].imageUrl.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <span className="text-white text-3xl">{slides[currentIndex].text}</span> */}
      </div>
    </div>
  );
};

export default HeaderSwiper;

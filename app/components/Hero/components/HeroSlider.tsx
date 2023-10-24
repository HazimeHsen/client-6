import React from "react";
import Slider from "../../Slider";
import Image from "next/image";
import image1 from "/public/image/hero-1.png";
import image2 from "/public/image/hero-2.png";
import image3 from "/public/image/hero-3.png";
import Animation from "../../Animation";
const HeroSlider = () => {
  return (
    <div className="relative">
      <Slider>
        <Animation
          startInView={false}
          animationType="fade-right"
          duration={0.4}
          delay={0}
          className="rounded-full  bg-red-600 w-48 h-48 mt-4">
          <Image
            className="absolute drop-shadow-lg pointer-events-none -top-16 left-1/2 -translate-x-1/2"
            alt=""
            width={250}
            height={350}
            src={image3}
          />
        </Animation>
        <Animation
          startInView={false}
          animationType="fade-right"
          duration={0.4}
          delay={0.1}
          className="rounded-full  bg-orange-400 w-48 h-48 mt-4">
          <Image
            className="absolute drop-shadow-lg pointer-events-none -top-16 left-1/2 -translate-x-1/2"
            alt=""
            width={250}
            height={350}
            src={image2}
          />
        </Animation>
        <Animation
          startInView={false}
          animationType="fade-right"
          duration={0.4}
          delay={0.2}
          className="rounded-full  bg-pink-400 w-48 h-48 mt-4">
          <Image
            className="absolute drop-shadow-lg pointer-events-none -top-16 left-1/2 -translate-x-1/2"
            alt=""
            width={250}
            height={350}
            src={image1}
          />
        </Animation>
      </Slider>
    </div>
  );
};

export default HeroSlider;

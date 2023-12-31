import React from "react";
import Slider from "../Slider";
import HeroSlider from "./components/HeroSlider";
import one from "public/svg/9.svg";
import two from "public/svg/10.svg";
import three from "public/svg/11.svg";
import four from "public/svg/12.svg";
import five from "public/svg/13.svg";
import six from "public/svg/14.svg";
import Image from "next/image";
import Animation from "../Animation";

const Hero = () => {
  return (
    <div className={`h-screen bg-customColor2 relative`}>
      <Animation
        animationType="fade-bottom"
        startInView={false}
        duration={0.4}
        delay={0}
        className="container mx-auto flex md:flex-row flex-col justify-center items-center h-full">
        <div className="w-full md:mb-0 mb-8 md:min-w-[300px] lg:min-w-[450px] md:text-start text-center">
          <h1 className="text-5xl font-bold mb-2 text-primary flex flex-wrap md:justify-start justify-center">
            <div className="mr-3">Dive For Gems</div>
          </h1>
          <p className="text-xl max-w-[300px] mx-auto md:mx-0 flex text-center md:justify-start justify-center text-customColor1">
            <span className="mr-2">
              We offer a wide variety of drinks for every occasion.
            </span>
          </p>
        </div>
        <div className="relative z-0 md:max-w-[300px] md:max-h-[300px] w-[250px] h-[250px] origin-center">
          <Image
            alt=""
            className="mx-auto"
            src="/image/submark-nobg.png"
            width={300}
            height={300}
          />
        </div>
      </Animation>
      <div className="w-screen absolute bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L40,229.3C80,203,160,149,240,154.7C320,160,400,224,480,208C560,192,640,96,720,85.3C800,75,880,149,960,181.3C1040,213,1120,203,1200,192C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

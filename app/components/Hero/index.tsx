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
import { nothing } from "@/app/font";
import Animation from "../Animation";

const Hero = () => {
  return (
    <div className={`h-[90vh] md:h-[85vh] `}>
      <div className="container mx-auto flex md:flex-row flex-col justify-center items-center h-full">
        <div className="w-full md:mb-0 mb-8 md:min-w-[300px] lg:min-w-[450px] md:text-start text-center">
          <h1 className="text-5xl font-bold mb-4 text-purple-800 flex flex-wrap md:justify-start justify-center">
            <Animation
              startInView={false}
              duration={0.6}
              delay={0}
              className="mr-3">
              Welcome
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={0.2}
              className="mr-3">
              to
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={0.4}
              className="mr-3">
              Drinks
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={0.6}
              className="mr-3">
              Company
            </Animation>
          </h1>
          <p className="text-xl flex flex-wrap text-center md:justify-start justify-center text-gray-600">
            <Animation
              startInView={false}
              duration={0.6}
              delay={0.6}
              className="mr-2">
              We
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={0.7}
              className="mr-2">
              offer
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={0.8}
              className="mr-2">
              a
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={0.9}
              className="mr-2">
              wide
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={1}
              className="mr-2">
              variety
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={1.1}
              className="mr-2">
              of
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={1.2}
              className="mr-2">
              drinks
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={1.3}
              className="mr-2">
              for
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={1.4}
              className="mr-2">
              every
            </Animation>
            <Animation
              startInView={false}
              duration={0.6}
              delay={1.5}
              className="mr-2">
              occasion.
            </Animation>
          </p>
        </div>
        <div className="relative z-0">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;

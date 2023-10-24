import React from "react";
import "./style.css";
import Image from "next/image";
import Animation from "../Animation";
const LogoSlideShow = () => {
  return (
    <div id="ourwork" className="">
      <Animation
        animationType="fade-bottom"
        className="flex justify-center flex-col items-center">
        <h1 className="text-4xl font-bold md:w-full w-72 flex justify-center text-purple-800 text-center">
          Who We Have Worked With
        </h1>
        <div className="flex justify-center">
          <span className="bg-purple-800 w-[80px] h-[3px] flex justify-center my-3"></span>
        </div>
      </Animation>
      <Animation
        animationType="fade-bottom"
        className="flex overflow-hidden slideshow">
        <div className="ml-4 flex justify-center gap-4 logos-slide-container">
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/1.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/2.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/3.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/4.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/5.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/1.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/2.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/3.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/4.png" />
          </div>
          <div className="logos-slide img !w-[200px] ">
            <Image width={100} height={100} alt="logo" src="/image/5.png" />
          </div>
        </div>
      </Animation>
    </div>
  );
};

export default LogoSlideShow;

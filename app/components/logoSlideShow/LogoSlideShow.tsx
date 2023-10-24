import React from "react";
import "./style.css";
import Image from "next/image";
import Animation from "../Animation";
const LogoSlideShow = () => {
  return (
    <div id="ourwork" className="">
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

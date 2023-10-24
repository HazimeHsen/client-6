"use client";
import React, { ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

import { EffectCards } from "swiper/modules";

export default function Slider({ children }: { children: ReactNode[] }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-screen md:max-w-[300px] !h-[300px] lg:max-w-[500px] overflow-hidden">
        {children.map((child, i) => (
          <SwiperSlide key={i} className="w-fit bg-transparent">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

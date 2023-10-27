"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
const WhatWeDo = () => {
  const data = [
    {
      title: "Refreshing Smoothie Selection",
      text: "Embarking on a journey to explore delicious smoothies can be a delightful experience, and we're here to guide you along the way.",
      image: "/image/serv-1.gif",
    },
    {
      title: "Choose Your Flavor Wisely",
      text: "With so many options in the world of smoothies, finding the perfect blend that suits your taste buds is key.",
      image: "/image/serv-2.gif",
    },
    {
      title: "Optimize Your Smoothie Recipe",
      text: "The world of smoothie-making is ever-evolving, and we're here to help you create the tastiest and healthiest blends.",
      image: "/image/serv-3.gif",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="ourwork"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="">
      <div>
        <div className="w-full flex justify-center py-5">
          <div className="max-w-4xl w-full">
            <div>
              <h1 className="text-4xl font-bold text-primary text-center w-full">
                Our Expertise
              </h1>
              <div className="flex justify-center">
                <span className="bg-primary w-[80px] h-[3px] flex justify-center mb-8 mt-3"></span>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((info) => (
                  <Card key={info.image} info={info} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;

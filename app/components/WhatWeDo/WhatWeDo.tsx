"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
const WhatWeDo = () => {
  const data = [
    {
      title: "Market Study",
      text: "Ruby aims to thrive in Lebanon's growing boba tea market by strategically opening shops in areas like Kesserwen and the Walk, addressing the geographical limitations faced by potential customers. They stand out by focusing on accessibility, cultural relevance, and creating a welcoming environment that resonates with Middle Eastern traditions. With a unique Middle Eastern-inspired menu, Ruby seeks to provide a distinct and memorable boba tea experience, capturing the hearts and palates of their target audience in the competitive market.",
      image: "/image/serv-4.gif",
    },
    {
      title: "Branding",
      text: "Ruby is introduced as a captivating pearl symbolizing the enchantment of boba tea. Their vision is to expand globally and share the magic of boba tea, drawing inspiration from the Middle East's flavors. Ruby's boba tea creations offer a symphony of taste and texture, inviting everyone to join their captivating journey. They invite you to indulge in Middle Eastern-inspired flavors and explore the enigmatic allure of their tantalizing boba tea.",
      image: "/image/serv-2.gif",
    },
    {
      title: "Marketing",
      text: "Ruby's marketing campaign aims to connect with the Lebanese community by becoming an integral part of their cultural experiences. Through digital marketing, they plan to collaborate with influencers on platforms like Instagram and TikTok to create an authentic presence. Additionally, they will use billboards, a unique delivery system, and creative cup designs to leave a memorable impression, fostering trust and loyalty among boba tea enthusiasts. The goal is to extend Ruby's magic beyond their stores and position it as the go-to brand for a captivating boba tea journey in Lebanon.",
      image: "/image/serv-3.gif",
    },
    {
      title: "Vision",
      text: "Ruby has a multi-faceted vision that encompasses short-term, medium-term, and long-term goals. In the short term, their focus is on perfecting the cultural boba tea experience at their flagship location, celebrating Middle Eastern flavors. In the medium term, they plan to establish strategic locations in Lebanon to reach a wider audience and potentially explore franchising opportunities. Looking to the long term, their ultimate vision is to create a standalone boba tea product that can be enjoyed worldwide, ensuring the accessibility and unforgettable nature of the Ruby experience for individuals everywhere.",
      image: "/image/serv-1.gif",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
                About Us
              </h1>
              <div className="flex justify-center">
                <span className="bg-primary w-[80px] h-[3px] flex justify-center mb-2 mt-3"></span>
              </div>
              <p className="text-gray-600 text-sm text-center max-w-lg mb-8 px-4">
                Ruby is a boba tea brand inspired by Middle Eastern flavors and
                traditions, aiming to make boba tea accessible and foster
                cultural expansion. They offer a unique fusion of flavors and
                traditional boba tea techniques, transcending borders and
                promoting unity. Ruby is committed to celebrating cultural
                diversity and bringing the magic of boba tea to a wider audience
                through strategic store locations.
              </p>
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

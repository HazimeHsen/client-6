"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Card = ({
  info,
}: {
  info: { title: string; text: string; image: string };
}) => {
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
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row mb-8 px-3"
      key={info.title}>
      <div className="w-full ">
        <div className="flex">
          <Image
            className="-mt-[20px] !md:w-[60px] !md:max-h-[60px]"
            src={info.image}
            width={60}
            height={60}
            alt={info.title}
          />{" "}
          <h1 className="font-extrabold whitespace-nowrap text-pink-400 text-xl md:text-2xl underline mb-4">
            {info.title}:
          </h1>
        </div>
        <div className="pl-8">
          <div className="mb-2 md:text-lg text-gray-600">{info.text}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

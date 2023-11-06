"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { About } from "@/types/About";

const Card = ({ info }: { info: About }) => {
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
      key={info.name}>
      <div className="w-full ">
        <div className="flex items-center">
          <Image
            className="-mt-5"
            src={info.icon}
            width={60}
            height={60}
            alt={info.icon}
          />{" "}
          <div>
            <h1 className="font-extrabold md:whitespace-nowrap text-pink-400 text-lg md:text-2xl underline mb-4">
              {info.name}:
            </h1>
          </div>
        </div>
        <div className="pl-8">
          <div className="mb-2 text-sm md:text-md text-gray-600">
            <PortableText value={info.content} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Animation from "@/app/components/Animation";
interface Flavor {
  name: string;
  price: string;
  img: string;
  description: { title: string; desc: string }[];
}
const Flavors = () => {
  const flavors: Flavor[] = [
    {
      name: "RUBYS MILKY",
      img: "/image/f-1.gif",
      price: "$6.00/L $7.00",
      description: [
        {
          title: "THE CLASSIC",
          desc: "Original milk tea",
        },
        {
          title: "GREEN MATCHA LATTE",
          desc: "Smooth green tea matcha with creamy milk",
        },
        {
          title: "NESWEET CLASSIC",
          desc: "Classic nesquik cocoa and milk",
        },
        {
          title: "PINKY DELIGHT",
          desc: "Milky strawberry-banana fusion",
        },
        {
          title: "MAGNET FRUITEA MILK TEA",
          desc: "Strawberry, passion fruit, and litchi with milk tea",
        },
        {
          title: "BUSSIN",
          desc: "Harmonious espresso milk tea",
        },
        {
          title: "LOTUS FREEZE",
          desc: "Creamy lotus-flavored milk",
        },
        {
          title: "CHOCONUT SENSATION",
          desc: "Classic Nesquik cocoa and milk",
        },
      ],
    },
    {
      name: "RUBYS FRUITEA",
      img: "/image/f-2.gif",
      price: "$5.00/L $6.00",
      description: [
        {
          title: "PEACH PARADISE",
          desc: "Peaches, green apples, and black tea",
        },
        {
          title: "PASSION BLISS",
          desc: "Passion fruit, lime cordial, and black tea",
        },
        {
          title: "GREEN OASIS",
          desc: "Green apple, kiwi, litchi, and green tea",
        },
        {
          title: "FRUIT FIESTA",
          desc: "Strawberries, passion fruit, peaches, and black tea",
        },
        {
          title: "BERRY NICE",
          desc: "Blueberries, strawberries, and black tea",
        },
        {
          title: "TANGO",
          desc: "Mango, orange, and green tea",
        },
      ],
    },
    {
      name: "RUBYS ORIENTAL",
      img: "/image/f-3.gif",
      price: "$7.00/L $8.00",
      description: [
        {
          title: "KNEFE",
          desc: "Sweet cheese pastr",
        },
        {
          title: "HALEWE",
          desc: "Nutty sesame treat",
        },
        {
          title: "ASHTA",
          desc: "Creamy milk delight",
        },
      ],
    },
    {
      name: "BUBBLES",
      img: "/image/f-4.gif",
      price: "",
      description: [
        {
          title: "TAPIOCA PEARLS $0.5",
          desc: "",
        },
        {
          title: "RED BEANS $1.00",
          desc: "",
        },
      ],
    },
    {
      name: "POPPINGS",
      img: "/image/f-5.gif",
      price: "$0.3",
      description: [
        {
          title: "PEACH",
          desc: "",
        },
        {
          title: "LITCHY",
          desc: "",
        },
        {
          title: "MANGO",
          desc: "",
        },
        {
          title: "ORANGE",
          desc: "",
        },
        {
          title: "BLUEBERRY",
          desc: "",
        },
        {
          title: "STRAWBERRY",
          desc: "",
        },
        {
          title: "GREEN APPLE",
          desc: "",
        },
        {
          title: "PASSION FRUIT",
          desc: "",
        },
      ],
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="bg-[#feeff7]  pt-14">
        <Animation className="flex justify-center flex-col items-center">
          <Image
            src="/image/m-1.png"
            alt=""
            width={500}
            height={200}
            className="ml-3 w-[180px] h-[90px] md:h-[150px] md:w-[300px] z-10"
            objectFit="cover"
          />
        </Animation>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          transition={{ duration: 0.5 }}
          className="font-semibold px-6 md:text-center text-[#53215a] text-xl my-3">
          Please Explore Our Flavors
        </motion.div>
        {/* <Animation animationType="fade">
          <Image
            alt=""
            src="/image/m-2.png"
            width={200}
            height={200}
            className="absolute w-[100px] h-[130px] md:h-[250px] md:w-[170px] top-0 left-0 z-0"
          />
        </Animation>
        <Animation animationType="fade">
          <Image
            alt=""
            src="/image/m-4.png"
            width={200}
            height={200}
            className="absolute w-[100px] h-[70px] md:h-[150px] md:w-[170px] top-6 right-0 md:right-20 z-0"
          />
        </Animation>
        <Animation animationType="fade">
          <Image
            alt=""
            src="/image/m-5.png"
            width={200}
            height={200}
            className="absolute w-[200px] h-[270px] md:h-[400px] md:w-[300px] top-[400px] right-0 z-0"
          />
        </Animation> */}

        <div className="flex justify-center">
          <div className=" pb-20 px-4 pt-6 grid grid-cols-1 md:grid-cols-2 gap-10  z-10 relative">
            {flavors.map((flavor, i) => (
              <FlavorsCard flavor={flavor} i={i} key={i} />
            ))}
          </div>
        </div>
        {/* <div className="relative">
          <Animation startInView={false}>
            <Image
              alt=""
              src="/image/menu-4.png"
              width={200}
              height={200}
              className="absolute w-[300px] h-[570px] md:h-[1000px] md:w-[570px] bottom-0 left-0 z-0"
            />
          </Animation>
        </div>
        <div className="relative">
          <Animation startInView={false}>
            <Image
              alt=""
              src="/image/menu-5.png"
              width={200}
              height={200}
              className="absolute w-[200px] h-[570px] md:h-[700px] md:w-[270px] bottom-[450px] right-0 z-0"
            />
          </Animation>
        </div> */}
      </div>
    </>
  );
};

export default Flavors;

const FlavorsCard = ({ flavor, i }: { flavor: Flavor; i: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className=" max-w-[330px]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        transition={{ duration: 0.5 }}>
        <div className="flex items-center">
          <Image
            alt=""
            width={45}
            height={45}
            className="-ml-5 -mt-3 mr-1"
            src={flavor.img}
          />
          <div className="font-extrabold  w-full whitespace-nowrap text-[#9a3ca9] mb-2 flex items-center justify-between">
            <h1 className="text-xl underline">{flavor.name}</h1>
            <h1 className="text-md">{flavor.price}</h1>
          </div>
        </div>
      </motion.div>
      <ul className="">
        {flavor.description.map((desc, i) => (
          <FlavorDesc key={i} desc={desc} />
        ))}
      </ul>
    </div>
  );
};

const FlavorDesc = ({ desc }: { desc: { title: string; desc: string } }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
      }}
      transition={{ duration: 0.5 }}
      className="mb-3 w-fit  text-[#411747]">
      <div className="text-xl font-semibold text-[#6f2979] ">{desc.title}</div>
      <div className="-mt-2 text-[#411747]">{desc.desc}</div>
    </motion.li>
  );
};

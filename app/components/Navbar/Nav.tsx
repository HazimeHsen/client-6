"use client";
import React, { useEffect } from "react";
import Header from "../header";
import Link from "next/link";
import { navItems } from "./NavLinks";
import Animation from "../Animation";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
function NavList() {
  const controls = useAnimation();
  const parentDelay = 1.5;

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      {navItems &&
        navItems.map((nav, index) => (
          <li key={nav.href} className="p-1 font-medium">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -200 },
              }}
              transition={{
                duration: 0.2,
                delay: parentDelay + 0.1 * index + 0.2,
              }}
              className="cursor-pointer font-semibold transition"
              key={index}>
              <Link
                href={nav.href}
                className="flex text-lg items-center text-customColor1 hover:text-primary transition-all duration-300">
                {nav.title}
              </Link>
            </motion.div>
          </li>
        ))}
    </ul>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="relative bg-customColor2 mx-auto max-w-screen-xl px-8 py-5">
      <div className="flex items-center justify-between ">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -300 },
          }}
          className="text-4xl"
          transition={{ duration: 0.4, delay: 1.5 }}>
          <Image
            className=""
            alt=""
            src="/image/logo-nobg.png"
            width={140}
            height={330}
          />
        </motion.div>
        <div className="hidden md:block">
          <NavList />
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 300 },
          }}
          transition={{ duration: 0.4, delay: 1.7 }}
          className="md:hidden block relative z-50">
          <Header />
        </motion.div>
      </div>
    </div>
  );
}

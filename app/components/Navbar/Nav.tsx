"use client";
import React, { useEffect } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { navItems } from "./NavLinks";
import { motion, useAnimation } from "framer-motion";
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
          <Typography
            key={nav.href}
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium">
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
              className="cursor-pointer font-semibold hover:text-gray-600 transition"
              key={index}>
              <Link
                href={nav.href}
                className="flex text-lg items-center hover:text-pink-500 transition-colors">
                {nav.title}
              </Link>
            </motion.div>
          </Typography>
        ))}
    </ul>
  );
}

export default function Nav() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <Navbar className="relative bg-transparent mx-auto max-w-screen-xl px-8 py-5">
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
          Logo
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
          hello
        </motion.div>
      </div>
    </Navbar>
  );
}

"use client";
import React, { useEffect } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { navItems } from "./NavLinks";
import { motion, useAnimation } from "framer-motion";

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
        <div className="hidden md:block">hi</div>

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

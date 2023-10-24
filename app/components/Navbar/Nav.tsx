"use client";
import React, { useEffect } from "react";
import { Navbar } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";

export default function Nav() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <Navbar className="relative bg-transparent mx-auto max-w-screen-xl px-8 py-5">
      hello
    </Navbar>
  );
}

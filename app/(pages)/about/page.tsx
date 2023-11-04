import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Navbar/Nav";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="bg-customColor2 min-h-screen">
      <Nav />
      <div className="gap-16 pt-28 md:pt-32 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
          <h1 className="mb-4 text-4xl tracking-tight text-center lg:text-start w-full font-extrabold text-white">
            We did not reinvent the wheel
          </h1>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="relative grid grid-cols-2 gap-4 mt-8">
          <Image
            width={400}
            height={300}
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <Image
            width={400}
            height={300}
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 2"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;

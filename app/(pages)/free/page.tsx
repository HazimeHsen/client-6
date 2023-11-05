import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Navbar/Nav";
import React from "react";
import Image from "next/image";
const Free = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url(/image/bg-4.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Nav />
      <div className="min-h-screen pt-24 text-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light  sm:text-lg ">
            <h1 className="mb-4 text-4xl tracking-tight text-center lg:text-start w-full font-extrabold">
              Promotions & Special Highlights
            </h1>
            <p className="mb-4 md:text-start text-center">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p className="">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Image
              width={200}
              height={100}
              className="rounded-lg"
              src="/image/cup-1.png"
              alt="office content 1"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Free;

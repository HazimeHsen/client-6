import React from "react";
import Animation from "../Animation";
import Image from "next/image";
import Link from "next/link";
const Flavors = () => {
  return (
    <div className="px-4 py-10 md:py-20">
      <Animation animationType="fade-bottom" className="">
        <h1 className="text-4xl font-extrabold text-primary text-center w-full">
          Our Menu
        </h1>
        <div className="flex justify-center">
          <span className="bg-primary w-[80px] h-[3px] flex justify-center mb-5 md:mb-0 mt-3"></span>
        </div>
      </Animation>
      <div className="flex items-center md:flex-row flex-col justify-center gap-8 md:gap-28">
        <div className="md:max-w-[50%] md:text-start text-center">
          <Animation className="" animationType="fade-left">
            <p className="text-lg text-gray-600 !max-w-md my-4">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae ullam ratione, fuga explicabo perferendis praesentium
              possimus maiores mollitia. Suscipit eligendi modi ducimus quidem
              enim nihil ut, hic numquam veniam laudantium.
            </p>
            <div>
              <Link
                href="/flavors"
                className="py-2 px-4 rounded-lg bg-primary text-customColor1 hover:bg-primary/80 transition-all duration-300 ">
                Explore Our Flavors
              </Link>
            </div>
          </Animation>
        </div>
        <div className="">
          <Animation animationType="width-increase">
            <div>
              <Image
                className=""
                alt=""
                src="/image/submark-1.png"
                width={200}
                height={200}
              />
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Flavors;

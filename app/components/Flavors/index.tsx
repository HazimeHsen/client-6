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
      <div className="flex items-center flex-col justify-center ">
        <div className="md:max-w-[50%] md:text-start text-center">
          <Animation className="" animationType="fade-bottom">
            <p className="text-lg text-gray-600 text-center !max-w-md mb-5">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae ullam ratione, fuga explicabo perferendis praesentium
              possimus maiores mollitia. Suscipit eligendi modi ducimus quidem
              enim nihil ut, hic numquam veniam laudantium.
            </p>
          </Animation>
        </div>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {[1, 2, 3].map((info, i) => (
            <div
              className="max-w-xs  ring-2 ring-red-400 bg-white shadow-md rounded-lg"
              key={i}>
              <div className="p-5">
                <div className="w-full p-5 relative h-[160px] rounded-lg">
                  <Image
                    className="rounded-lg object-cover"
                    alt=""
                    src={`/image/c-${i + 2}.jpeg`}
                    fill
                  />
                </div>
              </div>
              <div className="px-5 py-3">
                <div className="flex items-center justify-between text-lg font-bold">
                  <h1 className="text-xl">Smoothie</h1>
                  <span>$19.99</span>
                </div>
                <p className="text-gray-600 my-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="my-3">
                  <Link
                    href="/flavors"
                    className="py-2 px-4 rounded-lg bg-primary text-customColor1 hover:bg-primary/80 transition-all duration-300 ">
                    Check This Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flavors;

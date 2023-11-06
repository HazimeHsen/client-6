import React from "react";
import Animation from "../Animation";
import Image from "next/image";

const OpeningHours = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/image/bg-5.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="openinghours"
      className="py-10 px-4 my-10">
      <Animation animationType="fade-bottom" className="">
        <h1 className="text-4xl font-extrabold text-primary text-center w-full">
          Opening Hours
        </h1>
        <div className="flex justify-center">
          <span className="bg-primary w-[80px] h-[3px] flex justify-center mb-5 md:mb-0 mt-3"></span>
        </div>
      </Animation>
      <div className="flex items-center md:flex-row flex-col justify-center md:gap-28">
        <div className="md:max-w-[50%] md:text-start text-center">
          <Animation className="" animationType="fade-left">
            <p className="text-lg text-gray-600 !max-w-md my-4">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae ullam ratione, fuga explicabo perferendis praesentium
              possimus maiores mollitia. Suscipit eligendi modi ducimus quidem
              enim nihil ut, hic numquam veniam laudantium.
            </p>
            <div></div>
          </Animation>
        </div>
        <div className="">
          <Animation animationType="fade" className="">
            <div className="md:w-[250px] w-[200px] ">
              <Image
                className=""
                alt=""
                src="/image/opening-hours.png"
                width={250}
                height={250}
              />
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;

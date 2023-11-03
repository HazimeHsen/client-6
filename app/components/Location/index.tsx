import React from "react";
import Animation from "../Animation";
import Image from "next/image";

const locations = {
  name: "Location 1",
  imageSrc: "/image/location.webp",
  address: "123 Main Street",
  city: "City, State ZIP",
};
const Location = () => {
  return (
    <div className="p-4">
      <Animation animationType="fade-bottom" className="">
        <h1 className="text-4xl font-extrabold text-primary text-center w-full">
          Our Location
        </h1>
        <div className="flex justify-center">
          <span className="bg-primary w-[80px] h-[3px] flex justify-center mb-8 md:mb-0 mt-3"></span>
        </div>
      </Animation>
      <div className="flex items-center justify-center md:flex-row md:gap-16 flex-col">
        <div className="text-center md:text-start max-w-lg">
          <Animation animationType="fade-bottom">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur incidunt exercitationem illo? Magnam laborum aperiam eos
            perferendis soluta accusantium optio
          </Animation>
        </div>
        <div>
          <Animation animationType="fade-right">
            <Image
              src="/image/location.png"
              alt="location"
              width={300}
              height={300}
            />
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Location;

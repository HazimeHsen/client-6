import React from "react";
import Animation from "../Animation";
import Image from "next/image";

const locations = [
  {
    name: "Location 1",
    imageSrc: "/image/location.webp",
    address: "123 Main Street",
    city: "City, State ZIP",
  },
  {
    name: "Location 2",
    imageSrc: "/image/location.webp",
    address: "456 Elm Street",
    city: "City, State ZIP",
  },
  {
    name: "Location 3",
    imageSrc: "/image/location.webp",
    address: "789 Oak Street",
    city: "City, State ZIP",
  },
];

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location, index) => (
          <Animation
            animationType="fade-bottom"
            key={index}
            className="bg-white rounded-lg shadow-lg p-4">
            <Image
              width={200}
              height={100}
              src={location.imageSrc}
              alt={location.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{location.name}</h2>
            <p className="text-gray-500">{location.address}</p>
            <p className="text-gray-500">{location.city}</p>
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default Location;

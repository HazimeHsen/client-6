import React from "react";
import Image from "next/image";
import Animation from "@/app/components/Animation";

const Flavors = () => {
  // Define the flavor data with ingredients
  const flavors = [
    {
      name: "Flavor 1",
      imageSrc: "/image/hero-1.png",
      description: "Description for Flavor 1",
      contains: [
        "Ingredient 1",
        "Ingredient 2",
        "Ingredient 3",
        // Add more ingredients as needed
      ],
    },
    {
      name: "Flavor 2",
      imageSrc: "/image/hero-2.png", // Replace with the actual image path
      description: "Description for Flavor 2",
      contains: [
        "Ingredient A",
        "Ingredient B",
        "Ingredient C",
        // Add more ingredients as needed
      ],
    },
    {
      name: "Flavor 3",
      imageSrc: "/image/hero-3.png", // Replace with the actual image path
      description: "Description for Flavor 3",
      contains: [
        "Ingredient X",
        "Ingredient Y",
        "Ingredient Z",
        // Add more ingredients as needed
      ],
    },
    // Add more flavors as needed
  ];

  return (
    <div className="min-h-screen pt-32 bg-customColor2">
      <div
        style={{
          backgroundImage: "url(/image/bg-4.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="mx-auto flex flex-col mt-10 justify-center items-center">
          <Animation
            startInView={false}
            animationType="width-increase"
            className="relative z-0 md:max-w-[300px] md:max-h-[300px] w-[250px] h-[250px] origin-center">
            <div className="relative">
              <Animation animationType="width-increase">
                <div className="flex relative justify-center -ml-16">
                  <Image
                    className="z-10 relative"
                    alt=""
                    src="/image/cup-1.png"
                    width={150}
                    height={200}
                  />
                  <Image
                    className="rotate-[70deg] z-0 absolute bottom-0 right-5"
                    alt=""
                    src="/image/cup-2.png"
                    width={150}
                    height={200}
                  />
                </div>
              </Animation>
            </div>
          </Animation>
          <div className="w-full mb-24 md:min-w-[300px] lg:min-w-[450px] md:text-start text-center">
            <Animation
              animationType="fade-bottom"
              startInView={false}
              className="text-2xl font-bold mb-2 text-customColor1 flex justify-center max-w-sm text-center uppercase mx-auto">
              Meet the dessert that&rsquo;s causing a worldwide sensation
            </Animation>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center py-8">
          {flavors.map((flavor, index) => (
            <div
              key={index}
              className="mx-auto flex my-10 md:flex-row md:gap-10 flex-col justify-center items-center h-full">
              <div>
                <Animation
                  animationType="fade-bottom"
                  className="relative z-0 md:max-w-[300px] md:max-h-[300px] w-[250px] h-[250px] origin-center">
                  <Image
                    alt=""
                    className="mx-auto"
                    src={flavor.imageSrc}
                    width={250}
                    height={200}
                  />
                </Animation>
                <Animation
                  animationType="fade-bottom"
                  className="w-full  text-center">
                  <h1 className="text-2xl font-bold mb-2 text-customColor1 flex justify-center uppercase mx-auto">
                    {flavor.name}
                  </h1>
                  <p className="text-lg font-bold mb-2 text-customColor1 flex flex-wrap uppercase justify-center">
                    {flavor.description}
                  </p>
                </Animation>
              </div>
              <Animation
                animationType="fade-bottom"
                className="flex flex-col min-w-[200px] bg-secondary rounded-lg p-3 font-semibold mt-4 text-gray-600">
                <h1 className="text-start text-xl">Contains: </h1>
                <ul className="p-5 flex justify-center flex-col items-center">
                  {flavor.contains.map((contain, i) => (
                    <li className="list-disc w-fit " key={i}>
                      {contain}
                    </li>
                  ))}
                </ul>
              </Animation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flavors;

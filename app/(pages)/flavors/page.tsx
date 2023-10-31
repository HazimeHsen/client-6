import React from "react";
import Image from "next/image";
import Animation from "@/app/components/Animation";

const Flavors = () => {
  // Define the flavor data with ingredients
  const flavors = [
    {
      name: "RUBYS MILKY",
      price: "S $6.00/L $7.00",
      description: [
        {
          title: "THE CLASSIC",
          desc: "Original milk tea",
        },
        {
          title: "GREEN MATCHA LATTE",
          desc: "Smooth green tea matcha with creamy milk",
        },
        {
          title: "NESWEET CLASSIC",
          desc: "Classic nesquik cocoa and milk",
        },
        {
          title: "PINKY DELIGHT",
          desc: "Milky strawberry-banana fusion",
        },
        {
          title: "MAGNET FRUITEA MILK TEA",
          desc: "Strawberry, passion fruit, and litchi with milk tea",
        },
        {
          title: "BUSSIN",
          desc: "Harmonious espresso milk tea",
        },
        {
          title: "LOTUS FREEZE",
          desc: "Creamy lotus-flavored milk",
        },
        {
          title: "CHOCONUT SENSATION",
          desc: "Classic Nesquik cocoa and milk",
        },
      ],
    },
    {
      name: "RUBYS FRUITEA",
      price: "S $5.00/L $6.00",
      description: [
        {
          title: "PEACH PARADISE",
          desc: "Peaches, green apples, and black tea",
        },
        {
          title: "PASSION BLISS",
          desc: "Passion fruit, lime cordial, and black tea",
        },
        {
          title: "GREEN OASIS",
          desc: "Green apple, kiwi, litchi, and green tea",
        },
        {
          title: "FRUIT FIESTA",
          desc: "Strawberries, passion fruit, peaches, and black tea",
        },
        {
          title: "BERRY NICE",
          desc: "Blueberries, strawberries, and black tea",
        },
        {
          title: "TANGO",
          desc: "Mango, orange, and green tea",
        },
      ],
    },
    {
      name: "RUBYS ORIENTAL",
      price: "S $7.00/L $8.00",
      description: [
        {
          title: "KNEFE",
          desc: "Sweet cheese pastr",
        },
        {
          title: "HALEWE",
          desc: "Nutty sesame treat",
        },
        {
          title: "ASHTA",
          desc: "Creamy milk delight",
        },
      ],
    },
    {
      name: "BUBBLES",
      price: "",
      description: [
        {
          title: "TAPIOCA PEARLS $0.5",
          desc: "",
        },
        {
          title: "RED BEANS $1.00",
          desc: "",
        },
      ],
    },
    {
      name: "POPPINGS",
      price: "$0.3",
      description: [
        {
          title: "PEACH",
          desc: "",
        },
        {
          title: "LITCHY",
          desc: "",
        },
        {
          title: "MANGO",
          desc: "",
        },
        {
          title: "ORANGE",
          desc: "",
        },
        {
          title: "BLUEBERRY",
          desc: "",
        },
        {
          title: "STRAWBERRY",
          desc: "",
        },
        {
          title: "GREEN APPLE",
          desc: "",
        },
        {
          title: "PASSION FRUIT",
          desc: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#feeff7] pt-20">
        <div className="flex justify-center ">
          <Image
            src="/image/m-1.png"
            alt=""
            width={500}
            height={200}
            className="w-[240px] h-[130px] md:h-[150px] md:w-[300px] z-10"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            alt=""
            src="/image/m-2.png"
            width={200}
            height={200}
            className="absolute w-[100px] h-[150px] md:h-[250px] md:w-[170px] top-0 left-0 z-0"
          />
        </div>
        <div>
          <Image
            alt=""
            src="/image/m-4.png"
            width={200}
            height={200}
            className="absolute w-[100px] h-[70px] md:h-[150px] md:w-[170px] top-6 right-0 md:right-20 z-0"
          />
        </div>
        <div>
          <Image
            alt=""
            src="/image/m-5.png"
            width={200}
            height={200}
            className="absolute w-[200px] h-[270px] md:h-[400px] md:w-[300px] top-[400px] right-0 z-0"
          />
        </div>

        <div className="text-[#af82ac] pb-20 pt-6 flex flex-col items-center justify-center text-center z-10 relative">
          {flavors.map((flavor, i) => (
            <div key={i} className="my-5">
              <div className="font-extrabold mb-2">
                <h1 className="text-3xl">{flavor.name}</h1>
                <h1 className="text-3xl">{flavor.price}</h1>
              </div>
              <div>
                {flavor.description.map((desc, i) => (
                  <div key={i} className="line-height-1 mb-3">
                    <div className="text-xl font-semibold">{desc.title}</div>
                    <div className="-mt-2">{desc.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <Image
            alt=""
            src="/image/menu-4.png"
            width={200}
            height={200}
            className="absolute w-[300px] h-[570px] md:h-[1000px] md:w-[570px] bottom-0 left-0 z-0"
          />
        </div>
        <div className="relative">
          <Image
            alt=""
            src="/image/menu-5.png"
            width={200}
            height={200}
            className="absolute w-[200px] h-[570px] md:h-[700px] md:w-[270px] bottom-[450px] right-0 z-0"
          />
        </div>
      </div>
    </>
  );
};

export default Flavors;

import Image from "next/image";
import React from "react";
import Animation from "../Animation";

const Free = () => {
  return (
    <div className="bg-customColor2 px-4 py-10">
      <Animation animationType="fade-bottom" className="">
        <h1 className="text-4xl font-extrabold text-primary text-center w-full">
          DRINK FREE
        </h1>
        <div className="flex justify-center">
          <span className="bg-primary w-[80px] h-[3px] flex justify-center mb-8 md:mb-0 mt-3"></span>
        </div>
      </Animation>
      <div className="flex items-center md:flex-row flex-col justify-center gap-8">
        <div className="md:max-w-[50%] text-white md:text-start text-center">
          <Animation animationType="fade-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            ullam ratione, fuga explicabo perferendis praesentium possimus
            maiores mollitia. Suscipit eligendi modi ducimus quidem enim nihil
            ut, hic numquam veniam laudantium.
          </Animation>
        </div>
        <div className="relative -ml-20 md:ml-0 md-mt-10">
          <Animation animationType="width-increase">
            <div>
              <Image
                className="rotate-[15deg]"
                alt=""
                src="/image/cup-1.png"
                width={150}
                height={200}
              />
              <Image
                className="rotate-[100deg] absolute -bottom-1/4 -right-[87%]"
                alt=""
                src="/image/cup-2.png"
                width={150}
                height={200}
              />
            </div>
            <span className="absolute w-[300px] h-2 bg-black block blur-md"></span>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Free;

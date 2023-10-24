import Image from "next/image";
import Hero from "./components/Hero";
import IconsEveryWhere from "./components/IconsEveryWhere";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import LogoSlideShow from "./components/logoSlideShow/LogoSlideShow";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LogoSlideShow />
      <WhatWeDo />
      <IconsEveryWhere />
    </div>
  );
}

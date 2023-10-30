import Flavors from "./components/Flavors";
import Free from "./components/Free";
import Hero from "./components/Hero";
import IconsEveryWhere from "./components/IconsEveryWhere";
import Location from "./components/Location";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import LogoSlideShow from "./components/logoSlideShow/LogoSlideShow";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LogoSlideShow />
      <WhatWeDo />
      <Free />
      <Flavors />
      <Location />
    </div>
  );
}

import Flavors from "./components/Flavors";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Hero from "./components/Hero";
import IconsEveryWhere from "./components/IconsEveryWhere";
import Location from "./components/Location";
import Nav from "./components/Navbar/Nav";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import LogoSlideShow from "./components/logoSlideShow/LogoSlideShow";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <LogoSlideShow />
      <WhatWeDo />
      <Free />
      <Flavors />
      <Location />
      <Footer />
    </div>
  );
}

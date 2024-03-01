import React from "react";
import Navbar from "./NavBar";
import HeroText from "./HeroText";
import HeroEnergy from "./HeroEnergy";
import VideoFullPage from "./VideoFullPage";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/2ddc/0aa2/9745d411ae8a057fc1fc865df2fe77ec?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZehtvjU6hcLCuQycnE8ZRsK1rt8mVqNgKnDb3WOrFL067WWGaqiJqQTQ95g4RDJAob3ff9xB5XpCXH5gbB6z2tLZLAeunvfwwGHcvbRziafdWEbLWZecSqZjESssamc1dYn~Uz6FAlWE4mNj7XWY1A6NdQ9banDxX1n8e2~Be3cDnh8eCgVlEyMYNlUU3TXNgkcnTSc--Dyec0J1OwzGclUYZZneHts3D82cEJiTmW~pE5jjUKGYPFUMknAqq9unYPVVB43TyfVH87c21iw54FPC3QSzPObL6tMwhhBhGj65kuZ1UdXbQu2tpgc~qYy7Dlcox~bsLG3AfUjB0ix-Q__')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
      }}
    >
      <div className="h-[100vh] lg:w-[98.7vw] bg-[rgba(0,0,0,0.7)] overflow-x-hidden bg-gradient-to-b from-0B1D26 to-0B1D26">
        <Navbar />
        <HeroText />
      </div>
      <HeroEnergy />
      <VideoFullPage/>
    </div>
  );
};

export default Hero;

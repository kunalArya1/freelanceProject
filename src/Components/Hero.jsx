import React from "react";
import Navbar from "./NavBar";
import HeroText from "./HeroText";
import HeroEnergy from "./HeroEnergy";
import VideoFullPage from "./VideoFullPage";
import RecentProject from "./RecentProject";
import OurStrategyImage from "./OurStrategyImage";
import OurClient from "./OurClient";
import Readmore from "./Readmore";
import { ReviewSlider } from "./ReviewSlider";
import OurLatestBlog from "./OurLatestBlog";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import backgroundImgae from "../assets/infrastructure/background.png";

const Hero = () => {
  return (
    <div
      className=" h-[100vh]"
      style={{
        backgroundImage: `url(${backgroundImgae})`,
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
      <VideoFullPage />
      <RecentProject />
      <OurStrategyImage />
      <OurClient />
      <Readmore />
      <ReviewSlider />
      <OurLatestBlog />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Hero;

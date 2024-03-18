import React, { useState } from "react";
import videobg from "./assets/HomePage.mp4";
import HomeLeft from "./Components/HomeLeft";
import HomeRight from "./Components/HomeRight";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";

const App = () => {
  document.title = "Home";
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className=" h-full w-full bg-[rgba(0,0,0,.4)] absolute">
        {/** LOGO  */}

        <div className=" absolute left-[50%] lg:-top-[4%] h-[10%] md:h-[10%] md:w-[5%] lg:h-[19%] lg:w-[10%] z-40  transform -translate-x-1/2 translate-y-1/2">
          <motion.div
            initial={{ scale: 18 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9}}
            className="h-full w-full object-cover"
          >
            <img src={logo} alt="" />
          </motion.div>
        </div>
        <HomeLeft />
        <HomeRight />
      </div>

      {/** Main page Video  */}
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={videobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;

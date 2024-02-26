import React, { useState } from "react";
import videobg from "./assets/HomePage.mp4";
import HomeLeft from "./Components/HomeLeft";
import HomeRight from "./Components/HomeRight";

const App = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <div className=" h-full w-full bg-[rgba(0,0,0,.4)] absolute">
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

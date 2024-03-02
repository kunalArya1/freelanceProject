import React from "react";
import imgae from "../assets/infrastructure/Our Sustainability Strategy.png";

const OurStrategyImage = () => {
  return (
    <div className=" h-[100vh]  bg-black p-8">
      <div className="h-full w-full">
        <img src={imgae} alt="" className=" h-full w-full object-contains" />
      </div>
    </div>
  );
};

export default OurStrategyImage;

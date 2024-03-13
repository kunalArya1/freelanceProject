import React from "react";

const HeroText = () => {
  return (
    <>
      <div className=" h-[87vh] ">
        <div className=" text-white p-8 py-[8vh] lg:py-[19vh]">
          <div className=" flex items-center gap-3 text-[#1C7CAC] py-[2vh] ">
            <div className=" w-10 md:w-20 lg:w-12 h-[0.2rem] mt-1 bg-[#1C7CAC]"></div>
            <p className=" text-md md:text-3xl lg:text-xl">
              EVEREST INFRASTRUCTURE
            </p>
          </div>
          <div>
            <p className=" text-[3.5rem] md:text-[6.8rem] lg:text-[4.6rem] leading-[4.4rem] md:leading-[7rem] lg:leading-[6rem] lg:tracking-tight font-bold text-white bg-opacity-60 text-opacity-80 ">
              Clean Energy Powering A <br /> Sustainable Future
            </p>

            <p className=" text-md md:text-3xl lg:text-xl py-[3vh] text-gray-300">
              Join the Renewable Revolution : Let Us Guide You to Sucsess
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroText;

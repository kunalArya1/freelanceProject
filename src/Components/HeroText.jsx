import React from "react";

const HeroText = () => {
  return (
    <>
      <div className=" text-white p-8 py-[15vh]">
        <div className=" flex items-center gap-3 text-yellow-400 py-[2vh] ">
          <div className=" w-10 h-[0.2rem] mt-1 bg-yellow-400"></div>
          <p className=" text-md">EVEREST INFRASTRUCTURE</p>
        </div>
        <div>
          <p className=" text-[3.5rem] font-bold text-white bg-opacity-60 text-opacity-40 ">
            Clean Energy Powering A <br /> Sustainable Future
          </p>

          <p className=" text-md py-[3vh] text-gray-300">
            Join the Renewable Revolution: Let Us Guide You to Sucsess
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroText;

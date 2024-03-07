import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ReactProject = () => {
  return (
    <div className=" h-[50vh] lg:h-[78vh]  bg-black text-white p-8 overflow-hidden">
      <div className=" flex justify-between items-center lg:px-2 lg:mb-6 mb-8">
        <p className=" font-bold text-[1.2rem] lg:text-2xl">
          Our Recent Projects
        </p>
        <div className=" flex gap-5 ">
          <button className="h-[4.5vh] lg:h-[7vh] w-[5vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowLeft className=" m-auto" />
          </button>
          <button className=" h-[4.vh] lg:h-[7vh] w-[5vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowRight className=" m-auto" />
          </button>
        </div>
      </div>
      <div className=" h-[34vh] lg:h-[82%] w-full flex gap-5 flex-nowrap items-center p-1">
        <div className=" h-[93%] lg:w-[27%] w-[95%] bg-blue-400"></div>
        <div className=" h-[93%] lg:w-[27%] w-[95%] bg-blue-400"></div>
        <div className=" h-[93%] lg:w-[27%] w-[95%] bg-blue-400"></div>
        <div className=" h-[93%] lg:w-[27%] w-[95%] bg-blue-400"></div>
      </div>
    </div>
  );
};

export default ReactProject;

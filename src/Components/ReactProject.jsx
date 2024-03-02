import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ReactProject = () => {
  return (
    <div className=" h-[78vh] w-full bg-black text-white p-8">
      <div className=" flex justify-between items-center lg:px-2 lg:mb-6">
        <p className=" font-bold lg:text-2xl">Our Recent Projects</p>
        <div className=" flex gap-5 ">
          <button className=" lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowLeft className=" m-auto" />
          </button>
          <button className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowRight className=" m-auto" />
          </button>
        </div>
      </div>
      <div className="  h-[82%]  flex gap-5 items-center p-1">
        <div className=" h-[93%] w-[27%] bg-blue-400"></div>
        <div className=" h-[93%] w-[27%] bg-blue-400"></div>
        <div className=" h-[93%] w-[27%] bg-blue-400"></div>
        <div className=" h-[93%] w-[27%] bg-blue-400"></div>
      </div>
    </div>
  );
};

export default ReactProject;

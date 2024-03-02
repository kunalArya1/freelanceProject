import React from "react";
import image from "../assets/infrastructure/ReadMore.png";
import { FaArrowRight } from "react-icons/fa6";

const Readmore = () => {
  return (
    <div className=" h-[70%] w-full bg-black text-white p-8 px-10 flex justify-between pt-[6rem]">
      <div className=" w-[25%] h-[90%]">
        <p className=" font-bold text-[1.2rem] leading-[1.3rem] mb-5 text-gray-300">
          Renewable energy sources <br /> are expected to provide <br /> between
          45 and 50 <br />
          percent of global <br /> generation by 2030
        </p>
        <p className=" text-[0.8rem] text-left leading-[1.03rem] mb-6 text-gray-500">
          This substantial uptick underscores the accelerating shift towards
          cleaner, more sustainable energy options. Factors driving this trend
          include advancements in technology, decreasing costs of renewable
          infrastructure, and a growing awareness of the urgent need to mitigate
          climate change.
        </p>
        <div className=" flex items-center" >
          <button className=" p-[0.76rem] bg-[rgba(28,124,172)] rounded-l-sm">Read More</button>
          <button className=" p-[1rem] bg-[rgba(32,157,218)] rounded-r-sm">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className=" h-[99%] w-[70%]">
        <img src={image}  alt=""  className=" h-full w-full object-conatins"/>
      </div>
    </div>
  );
};

export default Readmore;

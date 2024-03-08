import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className=" h-[40%] md:h-[50%] lg:h-[50%] w-full bg-black p-8 text-white text-center">
      <p className=" text-4xl  ">Subscribe to Our Newsletter</p>
      <p className=" mt-5">Get in touch for all new updates.</p>
      <div className=" mt-14">
        <input
          type="text"
          placeholder="Enter your email address"
          className=" p-4 lg:w-[20vw] rounded-l-sm"
        />
        <button className="p-4 bg-[rgba(32,157,218,1)] rounded-r-sm">
          Submit <FaArrowRight className="  inline-block" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

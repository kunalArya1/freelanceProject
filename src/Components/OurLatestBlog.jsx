import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OurLatestBlog = () => {
  return (
    <div className=" h-[88%] w-full bg-black p-8">
      <div className=" flex text-white justify-between mb-10">
        <p className=" font-semibold text-2xl font-Montserrat">Our Latest Blogs</p>
        <div className=" flex gap-5 ">
          <button className=" lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowLeft className=" m-auto" />
          </button>
          <button className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowRight className=" m-auto" />
          </button>
        </div>
      </div>
      <div className="h-[80%] w-[full]  flex gap-5 items-center">
        <div className=" h-[90%] w-[25%] bg-blue-200 p-3">
          <div className=" h-[50%] w-full bg-blue-400"></div>
          <p className=" mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className=" text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className=" flex items-center gap-1">
            <Link className=" underline">Read Story</Link>
            <p className=" mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className=" h-[90%] w-[25%] bg-blue-200 p-3">
          <div className=" h-[50%] w-full bg-blue-400"></div>
          <p className=" mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className=" text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className=" flex items-center gap-1 mt-2">
            <Link className=" underline">Read Story</Link>
            <p className=" mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>
        <div className=" h-[90%] w-[25%] bg-blue-200 p-3">
          <div className=" h-[50%] w-full bg-blue-400"></div>
          <p className=" mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className=" text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className=" flex items-center gap-1 mt-2">
            <Link className=" underline">Read Story</Link>
            <p className=" mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>
        <div className=" h-[90%] w-[25%] bg-blue-200 p-3">
          <div className=" h-[50%] w-full bg-blue-400"></div>
          <p className=" mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className=" text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className=" flex items-center gap-1 mt-2">
            <Link className=" underline">Read Story</Link>
            <p className=" mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLatestBlog;

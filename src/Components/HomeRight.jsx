import React, { useContext } from "react";
import ButtonContext from "../utils/ButtonContext";
import rightvideo from "../assets/rightvido.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeRight = () => {
  const { rightbutton, setrightbutton } = useContext(ButtonContext);
  return (
    <>
      <motion.div
        // onHoverStart={() => setleftbutton(true)}
        onMouseEnter={() => setrightbutton(true)}
        className=" h-[13%] w-[52%] hidden lg:block md:w-[25%] lg:w-[26%] top-[53%] right-[22%]
        md:right-[13.8%] lg:right-[13%] absolute z-10 "
      ></motion.div>
      {/** Left Text Part */}

      <motion.div
        onMouseLeave={() => setrightbutton(false)}
        animate={{ zIndex: rightbutton ? 20 : 0 }}
        className="h-[45%] w-[29%] hidden lg:block absolute right-[45%] top-[50%] md:top-[38%] lg:top-[38%] md:right-[10%] lg:right-[10%]"
      >
        <Link to="/infrastructure">
          <motion.button
            className="px-8 py-6  md:p-6 lg:p-6 absolute  border-sky-400  w-[190%] md:w-[110%] lg:w-[90%] left-0 border lg:text-3xl md:text-2xl text-xl uppercase origin-left text-white"
            animate={{
              top: rightbutton ? "86%" : "33%",
              scaleX: rightbutton ? 1.2 : 1,
              backgroundColor: rightbutton
                ? "rgba(0,0,0,0.2)"
                : "rgba(100, 174, 223, 0.5)",
            }}
            transition={{ duration: 0.4 }}
          >
            <div className=" flex items-center gap-6">
              <motion.p animate={{ marginLeft: rightbutton ? "0px" : "24px" }}>
                Infrastructure
              </motion.p>
              <motion.span
                animate={{ opacity: rightbutton ? 1 : 0 }}
                className=" inline-block"
              >
                <FaArrowRightLong />
              </motion.span>
            </div>
          </motion.button>
        </Link>

        {/** MOBILE BUTTON */}

        <motion.div
          animate={{
            top: rightbutton ? "0%" : "80%",
            opacity: rightbutton ? 1 : 0,
          }}
          // transition={{ duration: 0.4 }}
          className=" absolute top[0%] text-white p-2"
        >
          <div className=" flex items-center">
            <div className=" h-1 w-16 bg-[#FBD784] mt-2"></div>
            <p className=" text-xl ml-10 mt-2 text-[#FBD784]">
              Everest Technology
            </p>
          </div>

          <p className=" text-4xl mt-5 mb-8 font-playfair">
            Elevate Your Business <br /> Beyoond Peaks!
          </p>

          <p className=" text-md opacity-[0.8]">
            Your GateWay to Next-Level IT $ IoT solutions
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ left: rightbutton ? "0%" : "100%" }}
        transition={{ duration: 0.4 }}
        className=" h-screen w-full bg-black absolute left-[-100%]"
      >
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={rightvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </>
  );
};

export default HomeRight;

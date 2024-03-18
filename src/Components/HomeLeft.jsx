import React, { useContext } from "react";
import ButtonContext from "../utils/ButtonContext";
import leftvideo from "../assets/leftVideo.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const HomeLeft = () => {
  const { leftbutton, setleftbutton } = useContext(ButtonContext);
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        // onHoverStart={() => setleftbutton(true)}
        onMouseEnter={() => setleftbutton(true)}
        className=" h-[13%] w-[55%] hidden lg:block lg:h-[13.5%] lg:w-[26%] md:w-[25%]  md:h-[15%]  top-[47%] md:top-[53%] lg:top-[53%] left-[25%] md:left-[10%] lg:left-[10%] absolute z-10"
      ></motion.div>

      {/** MOBILE BUTTON */}
      <div className="absolute top-[67%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => console.log("Cliekde")}
          className=" p-5 py-7 bg-[#64AEDF80] lg:hidden w-[87vw] md:w-[50vw] text-3xl text-white uppercase"
        >
          Techanology
        </button>
      </div>

      {/** Left Text Part */}
      <motion.div
        onMouseLeave={() => setleftbutton(false)}
        initial={{ zIndex: leftbutton ? 20 : 0 }}
        animate={{ zIndex: leftbutton ? 20 : 0 }}
        transition={{ duration: 1 }}
        className="h-[30%] w-[30%] hidden lg:block md:h-[35%] lg:h-[45%] md:w-[30%] lg:w-[29%] absolute top-[40%] md:top-[38%] lg:top-[38%] left-[25%] md:left-[10%] lg:left-[10%]"
      >
        <Link to="/technology">
          <motion.button
            className="px-4 py-7 hidden lg:block md:p-6 lg:p-6 absolute  border-sky-400  w-[190%]  md:w-[110%] lg:w-[90%] left-0 border lg:text-3xl md:text-2xl text-xl   uppercase origin-left text-white"
            initial={{
              top: leftbutton ? "86%" : "33%",
              backgroundColor: leftbutton
                ? "rgba(0,0,0,0.2)"
                : "rgb(144, 205, 244)",
            }}
            animate={{
              top: leftbutton ? "86%" : "33%",
              scaleX: leftbutton ? 1.2 : 1,
              backgroundColor: leftbutton
                ? "rgba(0,0,0,0.2)"
                : "rgba(100, 174, 223, 0.5)",
            }}
            transition={{ duration: 0.4 }}
          >
            <div className=" flex items-center gap-6">
              <motion.p
                initial={{ marginLeft: leftbutton ? "0px" : "30px" }}
                animate={{ marginLeft: leftbutton ? "0px" : "30px" }}
                className=" ml-8"
              >
                Techanology
              </motion.p>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: leftbutton ? 1 : 0 }}
                className=" inline-block"
              >
                <FaArrowRightLong />
              </motion.span>
            </div>
          </motion.button>
        </Link>
        <motion.div
          initial={{
            top: leftbutton ? "0%" : "80%",
            opacity: leftbutton ? 1 : 0,
          }}
          animate={{
            top: leftbutton ? "0%" : "80%",
            opacity: leftbutton ? 1 : 0,
          }}
          // transition={{ duration: 0.4 }}
          className=" absolute top[0%] text-white p-2"
        >
          <div className=" flex items-center">
            <div className=" h-1 w-16 bg-[#FBD784] mt-2"></div>
            <p className=" text-md ml-10 mt-2 text-[#FBD784] uppercase">
              Everest Technology
            </p>
          </div>

          <p className=" text-4xl  mt-5 mb-8 font-playfair">
            Elevate Your Business <br /> Beyoond Peaks!
          </p>

          <p className=" text-md opacity-[0.8]">
            Your GateWay to Next-Level IT $ IoT solutions
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ left: leftbutton ? "0%" : "-100%" }}
        animate={{ left: leftbutton ? "0%" : "-100%" }}
        transition={{ duration: 0.4 }}
        className=" h-screen w-full bg-black absolute left-[-100%]"
      >
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={leftvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </>
  );
};

export default HomeLeft;

import React, { useContext } from "react";
import ButtonContext from "../utils/ButtonContext";
import rightvideo from "../assets/rightvido.mp4";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const HomeRight = () => {
  const { rightbutton, setrightbutton } = useContext(ButtonContext);
  return (
    <>
      <motion.div
        // onHoverStart={() => setleftbutton(true)}
        onMouseEnter={() => setrightbutton(true)}
        className=" h-[15vh] w-[51vh] top-[53%] right-[13.8%] absolute z-10"
      ></motion.div>
      {/** Left Text Part */}

      <motion.div
        onMouseLeave={() => setrightbutton(false)}
        initial={{ zIndex: rightbutton ? 20 : 0 }}
        animate={{ zIndex: rightbutton ? 20 : 0 }}
        className="h-[45%] w-[29%] absolute top-[38%] right-[10%]"
      >
        <motion.button
          className="p-8 absolute border-sky-400 w-[85%] left-0 border text-3xl uppercase font-semibold text-white"
          initial={{
            top: rightbutton ? "80%" : "33%",
            width: rightbutton ? "100%" : "85%",
            backgroundColor: rightbutton
              ? "rgba(0,0,0,0.2)"
              : "rgb(144, 205, 244)",
          }}
          animate={{
            top: rightbutton ? "80%" : "33%",
            width: rightbutton ? "100%" : "85%",
            backgroundColor: rightbutton
              ? "rgba(0,0,0,0.2)"
              : "rgb(144, 205, 244)",
          }}
          transition={{ duration: 0.4 }}
        >
          <div className=" flex items-center gap-6">
            <p>Techanology</p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: rightbutton ? 1 : 0 }}
              className=" inline-block"
            >
              <FaArrowRightLong />
            </motion.span>
          </div>
        </motion.button>
        <motion.div
          initial={{
            top: rightbutton ? "0%" : "80%",
            opacity: rightbutton ? 1 : 0,
          }}
          animate={{
            top: rightbutton ? "0%" : "80%",
            opacity: rightbutton ? 1 : 0,
          }}
          // transition={{ duration: 0.4 }}
          className=" absolute top[0%] text-white p-2"
        >
          <div className=" flex items-center">
            <div className=" h-1 w-16 bg-orange-500 mt-2"></div>
            <p className=" text-xl ml-10 mt-2 text-orange-500">
              Everest Technology
            </p>
          </div>

          <p className=" text-4xl font-bold mt-5 mb-8">
            Elevate Your Business <br /> Beyoond Peaks!
          </p>

          <p className=" text-md opacity-[0.8]">
            Your GateWay to Next-Level IT $ IoT solutions
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ left: rightbutton ? "0%" : "100%" }}
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
import React, { useState } from "react";
import videobg from "./assets/video.mp4";
import { motion } from "framer-motion";
import leftvideo from "./assets/leftvideo.mp4";
import rightvideo from "./assets/rightvido.mp4";

const App = () => {
  const [leftbutton, setleftbutton] = useState(false);
  const [rightbutton, setrightbutton] = useState(false);
  return (
    <div className="h-screen w-full bg-gray-300 relative overflow-hidden">
      <div className=" h-full w-full bg-[rgba(0,0,0,.4)] absolute">
        {/** Left video part */}
        <motion.div
          // onHoverStart={() => setleftbutton(true)}
          onMouseEnter={() => setleftbutton(true)}
          className=" h-[15vh] w-[49vh] top-[45%] left-[10%] absolute z-10"
        ></motion.div>

        {/** Left Text Part */}
        <motion.div className=" overflow-hidden h-[20vh] w-[50vh] absolute top-[50%] left-[10%]">
          <motion.div
            onMouseLeave={() => setleftbutton(false)}
            initial={{
              top: leftbutton ? "0%" : "100%",
              zIndex: leftbutton ? 10 : 0,
            }}
            animate={{
              top: leftbutton ? "0%" : "100%",
              zIndex: leftbutton ? 10 : 0,
            }}
            // onHoverEnd={() => setleftbutton(false)}
            className=" h-[20vh] w-[50vh] text-white absolute top-[100%] left-[0%] p-2 "
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
          initial={{ left: leftbutton ? "0%" : "-100%" }}
          animate={{ left: leftbutton ? "0%" : "-100%" }}
          className=" h-screen w-full bg-black absolute left-[-100%]"
        >
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={leftvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/**Right Side Video */}
        <motion.div
          onHoverStart={() => setrightbutton(true)}
          className=" h-[20vh] w-[50vh] top-[45%] right-[10%]  absolute z-10"
        ></motion.div>

        {/** Right text part */}
        <motion.div className=" overflow-hidden h-[20vh] w-[50vh] absolute top-[50%] right-[9.1%]">
          <motion.div
            initial={{
              top: rightbutton ? "0%" : "100%",
              zIndex: rightbutton ? 10 : 0,
            }}
            animate={{
              top: rightbutton ? "0%" : "100%",
              zIndex: rightbutton ? 10 : 0,
            }}
            onHoverEnd={() => setrightbutton(false)}
            className=" h-[20vh] w-[50vh] text-white absolute top-[100%] right-[0%] p-2 "
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
          initial={{ right: rightbutton ? "0%" : "-100%" }}
          animate={{ right: rightbutton ? "0%" : "-100%" }}
          className=" h-screen w-full bg-black absolute right-[-100%]"
        >
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src={rightvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
      {/** Main page Video  */}
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={videobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/** Left Button */}
      <motion.button
        className="absolute top-[50%] left-[10%] p-8 bg-sky-300 border-sky-400 border w-1/4 text-3xl uppercase font-semibold text-white"
        initial={{ top: leftbutton ? "70%" : "50%" }}
        animate={{ top: leftbutton ? "70%" : "50%" }}
      >
        Techanology
      </motion.button>
      {/* Right Button */}
      <motion.button
        initial={{ top: rightbutton ? "70%" : "50%" }}
        animate={{ top: rightbutton ? "70%" : "50%" }}
        className="absolute top-1/2 right-[10%] p-8 bg-sky-300 border-sky-400 border w-1/4 text-3xl uppercase font-semibold text-white"
      >
        Infrastructure
      </motion.button>
    </div>
  );
};

export default App;

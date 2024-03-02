import React from "react";
import fullpageVido from "../assets//infrastructure/infrapagefullvideo.mp4";

const VideoFullPage = () => {
  return (
    <div className=" h-[74vh] lg:h-[100vh]  bg-black pt-14 lg:p-8">
      <div className=" w-[100%] h-[65%] lg:h-[90%] lg:w-[96%]  absolute bg-[rgba(0,0,0,0.4)]">
        {/** Right Side Text */}
        <div className="h-[11vh] lg:h-[17vh] w-[65vw] md:w-[37%] lg:w-[37%] bg-[rgba(181,168,140,0.6)] absolute top-[60%] md:top-[61%] lg:top-[65%]">
          <div>
            <p className=" text-right font-bold text-[0.92rem] lg:text-2xl text-gray-300 py-12 lg:py-12 px-4 lg:px-8">
              Inspiring the best of Living
            </p>
          </div>
        </div>
        {/** Top Side Text  */}
        <div className=" h-[45%] lg:h-[50%] md:h-[45%] w-[50%] lg:w-[30%] bg-[rgba(145,145,144,0.6)] absolute right-[10%] lg:right-[7%]">
          <p className=" font-bold text-[0.88rem] md:text-[2rem] lg:text-[1.98rem] py-[78%] md:py-[45%] px-4 lg:text-gray-900">
            Achieving a successful <br /> energy Transition
          </p>
        </div>
      </div>
      <video
        src={fullpageVido}
        autoPlay
        muted
        loop
        className="h-[100%]  lg:h-full lg:w-screen object-cover "
      ></video>
    </div>
  );
};

export default VideoFullPage;

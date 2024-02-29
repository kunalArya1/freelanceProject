import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroEnergy = () => {
  return (
    <>
      <div className="overflow-x-hidden  bg-black flex flex-col lg:flex-row p-9 py-14 gap-10 lg:gap-8 text-white ">
        <div className=" h-[35vh] lg:h-[40vh]  lg:w-[45vw] w-[80vw] m-auto mt-10">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/2977/5450/1697ac35049d85bd676d940a70655e56?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llGpZ4CPF3Yzy8zkJVSmKHsrZOuVzuci4Bquk0LyBFuh9fdzVoGpVpS4fhXVpVjgES1X4wd5sjcYrdoCKJa8Fp3gl1qZpBccf29G9vc2prxFdN9~AUUPCQ2T1NzhShKLnpGQa5iOj9MbTT8Y78pxezlsUFgmabk0HbytyaIkcsys6LLo9YxYf5iZoAJMBykvPPL2dNjFT9Wgw9E5~uMXeTlTvdaokbmDu3X7s4aWPxg76IQ59J3APn0OswA74e3ZOa23tr2w2hVZiRNLAc8Kq8D72ANAlvCYoFie4aK6bH02lGChBiOd0Zew6vgZI10PRdtKDOzPmvJO9SrT723p-A__"
            alt=""
          />
          <p className=" absolute z-30">Solar Energy</p>
        </div>
        <div className="h-[35vh] lg:h-[40vh] lg:w-[45vw] w-[80vw] m-auto mt-10">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/5b81/f28b/9b8aa9ec636253e092fc9000b669a206?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCb3CcPXJRIDBObcgTrSMou8uC8UIGLH8IKjGDBgs8BFP~NT4H55PFThBSAvbhiYaiCQTNFUKyUhNKdEwjv-RrGnXNYilDpjho2FHGw7DeZQJGTFwp9VPcGht0lIS-0QdI5U4x76eluBn1DMZb~6r6kH0wZiZ7OeEO8CI~GgBLuyn6Ehqmxk5mUll5l6DXtGhRvOOVqm6ofXf5RtkcF~8PFkd1mPFoHShtc5JCIz8WqIAj~Qq6cSEB3qT-kaJulMhEfWxO0LpJZ7Na3r~YM8O6~UbjABi3ABWvfSqDLeGdOe1w-Q62Q3hunbjsm0tqRrolYx4H~r8mdHygbGd5BlRw__"
            alt=""
          />
          <p>Hydro Energey</p>
        </div>
        <div className=" h-[35vh] lg:h-[40vh] lg:w-[45vw] w-[80vw] m-auto mt-10">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/109e/47e6/6ea929887a4aaadf03591310236cbfc8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwDaVaEPkJJGd1Wsyr~mKqiNTMmvxRmDnmPxSIAMq6u-om75ZfiI-N-Nwso3iRzMrtuHwWA35ZjQTqQfZmunBhIusdJHEtfYh0y0Xs9OOQw9rsf4hqy~HKrFmMB1WvSxURVMLw9GRzN3o7PLpvwaWsViHk4IzBd4bSuwWxs1ALtreMcsaYJ1yxVyxb5TUTXFJZocfx2OmGugAU68oiCwXXPPumjTiF-yUYWDdXMamNA4g7~-RhfPyOIJQnBn73astm9-FTB3C2sSBXhAOReqxLYKdSDNQ04kbsjxnX~Pe8n3IO~Peq2o-AhUsmNKI~0W0NFHjVVAMv53HIxhYSxrBA__"
            alt=""
          />
          <p className=" text-white">Wind Energy</p>
        </div>
        <div className=" h-[45vh] lg:h-[35vh] lg:w-[50vw] w-[80vw] m-auto">
          <p className=" lg:font-bold lg:text-[1.4rem] lg:leading-8 font-bold text-[1.6rem]">
            A Glimpse into Electric, Wind, and Solar Energy
          </p>
          <p className="lg:text-[0.8rem] lg:leading-[1rem] mt-3">
            Everest Technology is inspired by the all mighty Mt Everest –
            highest peak in the world thrive to be leading IT services provider
            in the Middle East region and globally. Everest Technology is the
            partner of choice for many of the world’s leading enterprises, SMEs
            and technology software development, marketing strategies and
            industrial automation services.
          </p>
          <div className=" flex items-center">
            <button className=" p-3 bg-yellow-400 text-black lg:mt-2 mt-5 rounded-sm">
              Read More
            </button>
            <button className="bg-[#152E3A] p-4 lg:mt-2 rounded-sm mt-5">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroEnergy;

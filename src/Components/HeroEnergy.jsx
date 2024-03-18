import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroEnergy = () => {
  return (
    <>
      <div className="overflow-x-hidden  bg-black flex flex-col lg:flex-row p-9 py-14 gap-10 lg:gap-8 text-white ">
        <div className=" h-[35vh] lg:h-[40vh]  lg:w-[45vw] w-[80vw] m-auto mt-10">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/2977/5450/1697ac35049d85bd676d940a70655e56?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6m8X2KumFlAdL1ivNeg8tFOKWvyWbo3OsT5Hw1EO5lF-mC9aK9jZbptIfoU68uuCJS~jeilxCwbzfpaLDtzckvkB~2e-nyQxEr7N~WZfdcuvcjy4iL448f5JjIDiS-Qrty10vAoi6Vqj-Ls-AJ6PNolEmXbDKWmbNk7qnpB6ifCPfYLulx5ZvPugtxsr7NPBloI0erYUCRk08ECqn0krlhh11n7042IGYf0EfpS5ofpBqHP4CUtn50ZzOvy5q1JgVzSs8WR5uNGcsS4bEj~uXQwKylOt5b2gdIPz8EYuFo3vZ5q3UrlFONNfhPkO7OIMmWlaEFrw0jfNMgufbCTEw__"
            alt=""
          />
          <p>Solar Energy</p>
        </div>
        <div className="h-[35vh] lg:h-[40vh] lg:w-[45vw] w-[80vw] m-auto mt-10">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/5b81/f28b/9b8aa9ec636253e092fc9000b669a206?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtkkczvdSndosE5PAwRSrBv1Z-yTy1szpnNo0Rxi2WgUPG8hIjksTj029x7HpN9BREsuQTQTXnVndy9IIz45~yfB9aLgQ-LHpgoMfT7qSm0ETogSIcinCvxf5RBLNcrpTW0sJbVnPzzOxBXJaG7VDrER1XoRXOfPWb5rjI0bIqiLG09u-72wF06moZE8TFkXsew03qicix6eIBAL7SzlddpRFvwPEDnriWavp9GTG9SFBHVgQ5NlN1IK8TvkPCEuntc5N-TwtVPkB5mzNpf0G7F9t~hLWEM7yRtqcbOAdWMYiJhMeYsveeHvCb7tU7sgCh6a1OZLobTbgZ4kHh73sQ__"
            alt=""
          />
          <p>Hydro Energey</p>
        </div>
        <div className=" h-[35vh] lg:h-[40vh] lg:w-[45vw] w-[80vw] m-auto mt-10">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/109e/47e6/6ea929887a4aaadf03591310236cbfc8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lGUJxvaRvuSZY-uS46siiiNjZzX4d0zWqS6J4luVu2EeM2DRhyAXEbS5y41IP0XSt8PjMBUehu3ph1Tv72z6iZP-W2mc3d48y3u8Sm1Ip3FxGUNDizatfEMmKWMdSUhNDJM9lVbA0k8PKb41PS8aGJ9xldGLWySNWa8dMMcwqmNUsX9rA4CMaBYToi36Ifp-webUQU-iuQfC0JI2E-oyfi1Nv5keI3kCM6Qmgi4bWnGYF4IZWmXT0HeZJFB610QP4CEybnex8ii7st6wUkl6zzsH4a8r2tIwYm-rB0T1jSRBfdJF~gkRYh1XQ3yu3pZfMWmZw0L93hXXkpcYN18X5Q__"
            alt=""
          />
          <p className=" text-white">Wind Energy</p>
        </div>
        <div className=" h-[45vh] lg:h-[35vh] lg:w-[50vw] w-[80vw] m-auto">
          <p className=" lg:font-bold lg:text-[1.4rem] lg:leading-8 font-bold text-[1.6rem] font-Montserrat">
            A Glimpse into Electric, Wind, and Solar Energy
          </p>
          <p className="lg:text-[0.8rem] lg:leading-[1rem] mt-3 font-Montserrat">
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

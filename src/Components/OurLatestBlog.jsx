import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../App.css";

const OurLatestBlog = () => {
  const container = useRef(null);
  const scrollLeft = () => {
    if (container.current) {
      container.current.scrollLeft -= 210;
    }
  };

  const scrollRight = () => {
    if (container.current) {
      container.current.scrollLeft += 310;
    }
  };
  return (
    <div className="h-[88%] w-full bg-black p-8">
      <div className="flex text-white justify-between mb-10">
        <p className="font-semibold text-2xl font-Montserrat">
          Our Latest Blogs
        </p>
        <div onClick={scrollLeft} className="flex gap-5">
          <button className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowLeft className="m-auto" />
          </button>

          <button
            onClick={scrollRight}
            className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]"
          >
            <FaArrowRight className="m-auto" />
          </button>
        </div>
      </div>
      <div
        ref={container}
        className="h-[80%] w-[full] flex gap-5 items-center parent-container"
      >
        {/** This flex is getting shirnk can you write so that it can be scrollable  */}
        <div className="h-[90%] w-[25%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" h-full w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/5b81/f28b/9b8aa9ec636253e092fc9000b669a206?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtkkczvdSndosE5PAwRSrBv1Z-yTy1szpnNo0Rxi2WgUPG8hIjksTj029x7HpN9BREsuQTQTXnVndy9IIz45~yfB9aLgQ-LHpgoMfT7qSm0ETogSIcinCvxf5RBLNcrpTW0sJbVnPzzOxBXJaG7VDrER1XoRXOfPWb5rjI0bIqiLG09u-72wF06moZE8TFkXsew03qicix6eIBAL7SzlddpRFvwPEDnriWavp9GTG9SFBHVgQ5NlN1IK8TvkPCEuntc5N-TwtVPkB5mzNpf0G7F9t~hLWEM7yRtqcbOAdWMYiJhMeYsveeHvCb7tU7sgCh6a1OZLobTbgZ4kHh73sQ__"
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="h-[90%] w-[25%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" h-full w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/3251/8078/25ad8ad728bc9f549496c9c50bbcb5eb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qkoJrJ8ClhONLU3nw35jxEiaSMK0TWKNFyyD-DGON~LSUfajrPh1IUB9J9NlHfayrzjQYBBAi8TCn9abZEpQM8C7WOjinodsULo~1TIsLqGuVry2q~dGZFB-qwGzpjiCFE-fP7EvdbiLP~d-zL~CrV8c4sALyWHSyr9MF22a9P1tSiDyjm0IcJZg0VVtVOt8z694rFItNWX2K1HyW7rQjwzi~5b0b6PSjcxpShVvI0U42oTL-SBj03r1a5g-DiuPEK6FFAF6wy4lpoxJ1BMfmUEZVu0Sj0yC5Tl8bWIoiC8gGB7hWtrGtwDSCsO-L0LMFwBdHVsQGdKMXpOskvoNaw__"
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="h-[90%] w-[25%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" h-full w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/2977/5450/1697ac35049d85bd676d940a70655e56?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6m8X2KumFlAdL1ivNeg8tFOKWvyWbo3OsT5Hw1EO5lF-mC9aK9jZbptIfoU68uuCJS~jeilxCwbzfpaLDtzckvkB~2e-nyQxEr7N~WZfdcuvcjy4iL448f5JjIDiS-Qrty10vAoi6Vqj-Ls-AJ6PNolEmXbDKWmbNk7qnpB6ifCPfYLulx5ZvPugtxsr7NPBloI0erYUCRk08ECqn0krlhh11n7042IGYf0EfpS5ofpBqHP4CUtn50ZzOvy5q1JgVzSs8WR5uNGcsS4bEj~uXQwKylOt5b2gdIPz8EYuFo3vZ5q3UrlFONNfhPkO7OIMmWlaEFrw0jfNMgufbCTEw__"
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="h-[90%] w-[25%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" h-full w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/5b81/f28b/9b8aa9ec636253e092fc9000b669a206?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtkkczvdSndosE5PAwRSrBv1Z-yTy1szpnNo0Rxi2WgUPG8hIjksTj029x7HpN9BREsuQTQTXnVndy9IIz45~yfB9aLgQ-LHpgoMfT7qSm0ETogSIcinCvxf5RBLNcrpTW0sJbVnPzzOxBXJaG7VDrER1XoRXOfPWb5rjI0bIqiLG09u-72wF06moZE8TFkXsew03qicix6eIBAL7SzlddpRFvwPEDnriWavp9GTG9SFBHVgQ5NlN1IK8TvkPCEuntc5N-TwtVPkB5mzNpf0G7F9t~hLWEM7yRtqcbOAdWMYiJhMeYsveeHvCb7tU7sgCh6a1OZLobTbgZ4kHh73sQ__"
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="h-[90%] w-[25%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" h-full w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/3251/8078/25ad8ad728bc9f549496c9c50bbcb5eb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qkoJrJ8ClhONLU3nw35jxEiaSMK0TWKNFyyD-DGON~LSUfajrPh1IUB9J9NlHfayrzjQYBBAi8TCn9abZEpQM8C7WOjinodsULo~1TIsLqGuVry2q~dGZFB-qwGzpjiCFE-fP7EvdbiLP~d-zL~CrV8c4sALyWHSyr9MF22a9P1tSiDyjm0IcJZg0VVtVOt8z694rFItNWX2K1HyW7rQjwzi~5b0b6PSjcxpShVvI0U42oTL-SBj03r1a5g-DiuPEK6FFAF6wy4lpoxJ1BMfmUEZVu0Sj0yC5Tl8bWIoiC8gGB7hWtrGtwDSCsO-L0LMFwBdHVsQGdKMXpOskvoNaw__"
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="h-[90%] w-[25%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" h-full w-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/2977/5450/1697ac35049d85bd676d940a70655e56?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6m8X2KumFlAdL1ivNeg8tFOKWvyWbo3OsT5Hw1EO5lF-mC9aK9jZbptIfoU68uuCJS~jeilxCwbzfpaLDtzckvkB~2e-nyQxEr7N~WZfdcuvcjy4iL448f5JjIDiS-Qrty10vAoi6Vqj-Ls-AJ6PNolEmXbDKWmbNk7qnpB6ifCPfYLulx5ZvPugtxsr7NPBloI0erYUCRk08ECqn0krlhh11n7042IGYf0EfpS5ofpBqHP4CUtn50ZzOvy5q1JgVzSs8WR5uNGcsS4bEj~uXQwKylOt5b2gdIPz8EYuFo3vZ5q3UrlFONNfhPkO7OIMmWlaEFrw0jfNMgufbCTEw__"
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        {/* Repeat the above div structure for other blog items */}
      </div>
    </div>
  );
};

export default OurLatestBlog;

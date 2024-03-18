import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "../App.css";

const ReactProject = () => {
  const container = useRef(null);
  const scrollLeft = () => {
    if (container.current) {
      container.current.scrollLeft -= 310;
    }
  };

  const scrollRight = () => {
    if (container.current) {
      container.current.scrollLeft += 310;
    }
  };

  return (
    <div className="h-[50vh] lg:h-[78vh] w-full bg-black text-white p-8 overflow-hidden">
      <div className="flex justify-between items-center lg:px-2 lg:mb-6 mb-8">
        <p className="font-bold text-[1.2rem] lg:text-2xl font-Montserrat">
          Our Recent Projects
        </p>
        <div className="flex gap-5">
          <button
            onClick={scrollLeft}
            className="h-[4.5vh] lg:h-[7vh] w-[5vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]"
          >
            <FaArrowLeft className="m-auto" />
          </button>
          <button
            onClick={scrollRight}
            className="h-[4.vh] lg:h-[7vh] w-[5vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]"
          >
            <FaArrowRight className="m-auto" />
          </button>
        </div>
      </div>
      <div
        ref={container}
        className="h-[34vh] lg:h-[82%] w-full flex gap-5 flex-nowrap items-center p-1 parent-container"
      >
        {/** This flex is getting shirnk can you write so that it can be scrollable  */}

        <div className="h-[93%] lg:w-[27%] w-[95%] bg-blue-400 child-item">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/2f61/8fb0/27022b985d6f8fe85637e18ced5eccbd?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SK0VpWA5abvAqvmbxymt2HgYTVaUhDsdGgTHthwlDA~7F0M3iXnNriVaO4UVavEsAvem-bTLDl7WuEIOQdkH2D2uL16kmd7QHjYq-0vkV6u5TD~-bL80e6Tt5vdI2SPpusaPoTamvTU5WC6GFvtOuQOqlE0u6i2hiq178GR4Plt33tUBCZjuPZH4mjyWU3iEfSVnpivxf1uvwGFvoPxytTWtW9nUjCrgnSFCp18M9ybTy8t8lDrBF7cLTESsOQuS9SnJ8-ONI5UOdy1q3-raxPFnIRoW~KY3QOyBJzrnSQN8OPhXkXUhQ6AEkpZ0c0rLgLfaobUrByNThTiEWcmT~Q__"
            alt=""
          />
        </div>
        <div className="h-[93%] lg:w-[27%] w-[95%] bg-blue-400 child-item">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/a906/933f/22ab4fcf2dcd2ea9879a30efcea19507?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aaAAkDlGZtl4GK1hXVQdJkteCxfKOaKHvhxnpNM6Op~g-jm06-jDYHvML4jnfKliCmQOG3BEXVwPOe0s4jDfl99cVIAyChNMFm7QRvHFiJ9hMIVRxxj37-WeM8XTXYZvhEF556g3BPboaS4ygOHFQt0qxYftW5-3DBXZglTGw6tcTJpCFs2zlad6mXWwaJvhZjO2LZ4fLv~hothhuFYkpejK61im-3mEwikVj65WN7tmT6BbXDHb~lBDiClWtkomOWqVlT9xQ6WI7gpXrcALdbC8beQX~dnVdYZZiMVBBn31qZ748NXxGM4-RTXV0UqcOcBfxsfvkr7AkgT8INp5Vg__"
            alt=""
          />
        </div>
        <div className="h-[93%] lg:w-[27%] w-[95%] bg-blue-400 child-item">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/2977/5450/1697ac35049d85bd676d940a70655e56?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6m8X2KumFlAdL1ivNeg8tFOKWvyWbo3OsT5Hw1EO5lF-mC9aK9jZbptIfoU68uuCJS~jeilxCwbzfpaLDtzckvkB~2e-nyQxEr7N~WZfdcuvcjy4iL448f5JjIDiS-Qrty10vAoi6Vqj-Ls-AJ6PNolEmXbDKWmbNk7qnpB6ifCPfYLulx5ZvPugtxsr7NPBloI0erYUCRk08ECqn0krlhh11n7042IGYf0EfpS5ofpBqHP4CUtn50ZzOvy5q1JgVzSs8WR5uNGcsS4bEj~uXQwKylOt5b2gdIPz8EYuFo3vZ5q3UrlFONNfhPkO7OIMmWlaEFrw0jfNMgufbCTEw__"
            alt=""
          />
        </div>
        <div className="h-[93%] lg:w-[27%] w-[95%] bg-blue-400 child-item">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/5b81/f28b/9b8aa9ec636253e092fc9000b669a206?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtkkczvdSndosE5PAwRSrBv1Z-yTy1szpnNo0Rxi2WgUPG8hIjksTj029x7HpN9BREsuQTQTXnVndy9IIz45~yfB9aLgQ-LHpgoMfT7qSm0ETogSIcinCvxf5RBLNcrpTW0sJbVnPzzOxBXJaG7VDrER1XoRXOfPWb5rjI0bIqiLG09u-72wF06moZE8TFkXsew03qicix6eIBAL7SzlddpRFvwPEDnriWavp9GTG9SFBHVgQ5NlN1IK8TvkPCEuntc5N-TwtVPkB5mzNpf0G7F9t~hLWEM7yRtqcbOAdWMYiJhMeYsveeHvCb7tU7sgCh6a1OZLobTbgZ4kHh73sQ__"
            alt=""
          />
        </div>
        <div className="h-[93%] lg:w-[27%] w-[95%] bg-blue-400 child-item">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/f087/2d9c/2330c001780095492f2559da49a0da41?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZDGosOc3JNgQ~GVwkv1rQJ4NbwByYhQjlZsn~DDDMbsEYcbyVo54fDwJ9ixN00ix9C7P-9Y0Gd6ROzoLPhSl2CMiSvN6PyhnoTq4QYUKrnJ48G30giu~R~i7Xxha2L~man2t-syj~blNYH4AEuhkUG88b0r~aVz0zeOhQg372xevK~fHT0cwNZttIaeqhqOzzaBtm1DHLCOI3JhpZGgJlrX0IvmfEfr9bBH1cN-KO5wt0o50Sk29eJ3UnNCTx9JkX0OJT2ElKzfA9voX34eEEuVYIt9vc~YziGMHO6fD7aYFo4s4pJgq5ng-eep1RVS5HTtt0s1Sa9BCW6dbR4tE8A__"
            alt=""
          />
        </div>
        <div className="h-[93%] lg:w-[27%] w-[95%] bg-blue-400 child-item">
          <img
            className=" h-full w-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/2f61/8fb0/27022b985d6f8fe85637e18ced5eccbd?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SK0VpWA5abvAqvmbxymt2HgYTVaUhDsdGgTHthwlDA~7F0M3iXnNriVaO4UVavEsAvem-bTLDl7WuEIOQdkH2D2uL16kmd7QHjYq-0vkV6u5TD~-bL80e6Tt5vdI2SPpusaPoTamvTU5WC6GFvtOuQOqlE0u6i2hiq178GR4Plt33tUBCZjuPZH4mjyWU3iEfSVnpivxf1uvwGFvoPxytTWtW9nUjCrgnSFCp18M9ybTy8t8lDrBF7cLTESsOQuS9SnJ8-ONI5UOdy1q3-raxPFnIRoW~KY3QOyBJzrnSQN8OPhXkXUhQ6AEkpZ0c0rLgLfaobUrByNThTiEWcmT~Q__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ReactProject;

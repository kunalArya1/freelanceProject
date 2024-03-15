import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu based on current state
  };

  return (
    <nav
      className={`h-[10vh] w-full text-white bg-[${backgroundColor}] flex justify-start items-center p-8 py-10 cursor-pointer  ${
        isOpen ? "bg-opacity-75" : ""
      }`}
    >
      <div>
        <svg
          className="w-[8rem] md:w-[12rem] lg:w-[15rem]"
          width="212"
          height="48"
          viewBox="0 0 212 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.1477 0.927734H49.9998L49.0978 7.28388L42.5225 44.3249H50.632L56.9882 7.28388L58.1477 0.927734Z"
            fill="#FBD784"
          />
          <path
            d="M67.186 31.2015L65.0612 44H62.4365L58.5807 36.6134H58.4932L57.2621 44H54.1687L56.2935 31.2015H58.9557L62.7802 38.5756H62.8865L64.0988 31.2015H67.186ZM67.0063 44L69.1311 31.2015H77.8675L77.4426 33.7137H71.7995L71.3745 36.3384H76.4615L76.0365 38.8568H70.9496L70.0997 44H67.0063ZM77.3004 44L79.4252 31.2015H84.7121C85.6703 31.2015 86.4702 31.3744 87.1118 31.7202C87.7534 32.0618 88.2096 32.5534 88.4804 33.195C88.7512 33.8324 88.8137 34.5886 88.6679 35.4635C88.5262 36.3467 88.2096 37.0987 87.718 37.7195C87.2305 38.3361 86.6014 38.8069 85.8307 39.1318C85.0641 39.4568 84.1934 39.6193 83.2185 39.6193H79.8751L80.2876 37.182H83.056C83.5185 37.182 83.9184 37.1216 84.2559 37.0008C84.5933 36.8758 84.862 36.6883 85.062 36.4384C85.2662 36.1842 85.4016 35.8593 85.4682 35.4635C85.5307 35.0677 85.5016 34.7407 85.3807 34.4824C85.2641 34.2199 85.0579 34.0241 84.7621 33.8949C84.4704 33.7616 84.0955 33.6949 83.6372 33.6949H82.1124L80.3938 44H77.3004ZM85.4745 38.1507L87.693 44H84.3184L82.1686 38.1507H85.4745ZM91.8581 44H88.5335L94.9765 31.2015H99.0948L101.288 44H97.9637L96.5576 34.4261H96.4576L91.8581 44ZM92.2581 38.9631H99.2073L98.8073 41.3128H91.8581L92.2581 38.9631ZM110.664 35.0635C110.697 34.5928 110.572 34.2282 110.289 33.9699C110.01 33.7116 109.568 33.5825 108.964 33.5825C108.564 33.5825 108.222 33.6345 107.939 33.7387C107.656 33.8387 107.433 33.9803 107.27 34.1636C107.108 34.3428 107.006 34.5511 106.964 34.7886C106.927 34.976 106.937 35.1427 106.995 35.2885C107.054 35.4343 107.156 35.5635 107.302 35.676C107.452 35.7885 107.637 35.8864 107.858 35.9697C108.083 36.053 108.335 36.1259 108.614 36.1884L109.664 36.4384C110.272 36.5759 110.799 36.7592 111.245 36.9883C111.695 37.2133 112.059 37.4862 112.339 37.807C112.618 38.1236 112.809 38.4881 112.913 38.9006C113.018 39.313 113.026 39.7755 112.938 40.2879C112.805 41.0962 112.486 41.7898 111.982 42.3689C111.482 42.948 110.828 43.3917 110.02 43.7C109.216 44.0083 108.281 44.1625 107.214 44.1625C106.148 44.1625 105.241 44.0021 104.496 43.6813C103.754 43.3563 103.217 42.8668 102.883 42.2127C102.55 41.5586 102.461 40.7337 102.615 39.738H105.571C105.525 40.1504 105.577 40.4942 105.727 40.7691C105.881 41.0441 106.118 41.2524 106.439 41.3941C106.76 41.5357 107.147 41.6065 107.602 41.6065C108.018 41.6065 108.383 41.5503 108.695 41.4378C109.012 41.3253 109.264 41.1691 109.451 40.9691C109.643 40.7691 109.76 40.54 109.801 40.2817C109.843 40.0442 109.803 39.838 109.683 39.663C109.566 39.488 109.366 39.336 109.083 39.2068C108.804 39.0777 108.437 38.961 107.983 38.8568L106.702 38.5444C105.643 38.2861 104.841 37.8736 104.296 37.307C103.754 36.7404 103.562 35.9718 103.721 35.001C103.854 34.2053 104.183 33.5095 104.708 32.9138C105.237 32.318 105.906 31.8556 106.714 31.5264C107.527 31.1932 108.42 31.0265 109.395 31.0265C110.387 31.0265 111.22 31.1952 111.895 31.5327C112.574 31.866 113.063 32.3368 113.363 32.945C113.668 33.5491 113.755 34.2553 113.626 35.0635H110.664ZM115.169 33.7137L115.594 31.2015H126.412L125.987 33.7137H122.106L120.406 44H117.357L119.057 33.7137H115.169ZM125.798 44L127.923 31.2015H133.21C134.168 31.2015 134.968 31.3744 135.609 31.7202C136.251 32.0618 136.707 32.5534 136.978 33.195C137.249 33.8324 137.311 34.5886 137.165 35.4635C137.024 36.3467 136.707 37.0987 136.215 37.7195C135.728 38.3361 135.099 38.8069 134.328 39.1318C133.562 39.4568 132.691 39.6193 131.716 39.6193H128.373L128.785 37.182H131.554C132.016 37.182 132.416 37.1216 132.753 37.0008C133.091 36.8758 133.36 36.6883 133.56 36.4384C133.764 36.1842 133.899 35.8593 133.966 35.4635C134.028 35.0677 133.999 34.7407 133.878 34.4824C133.762 34.2199 133.555 34.0241 133.26 33.8949C132.968 33.7616 132.593 33.6949 132.135 33.6949H130.61L128.891 44H125.798ZM133.972 38.1507L136.19 44H132.816L130.666 38.1507H133.972ZM147.455 31.2015H150.542L149.173 39.4568C149.015 40.4108 148.65 41.242 148.08 41.9502C147.513 42.6543 146.79 43.2001 145.911 43.5875C145.032 43.9708 144.053 44.1625 142.974 44.1625C141.891 44.1625 140.976 43.9708 140.231 43.5875C139.485 43.2001 138.945 42.6543 138.612 41.9502C138.279 41.242 138.189 40.4108 138.343 39.4568L139.712 31.2015H142.805L141.474 39.1881C141.403 39.6297 141.437 40.0234 141.574 40.3692C141.716 40.7108 141.945 40.9816 142.262 41.1816C142.578 41.3774 142.966 41.4753 143.424 41.4753C143.886 41.4753 144.309 41.3774 144.693 41.1816C145.076 40.9816 145.393 40.7108 145.642 40.3692C145.892 40.0234 146.053 39.6297 146.124 39.1881L147.455 31.2015ZM163.317 35.8384H160.23C160.247 35.5135 160.215 35.2239 160.136 34.9698C160.057 34.7115 159.932 34.4907 159.761 34.3074C159.59 34.1199 159.378 33.9782 159.124 33.8824C158.87 33.7866 158.574 33.7387 158.236 33.7387C157.591 33.7387 157.005 33.8991 156.48 34.2199C155.955 34.5407 155.516 35.0031 155.162 35.6072C154.808 36.2113 154.56 36.9362 154.418 37.782C154.289 38.5985 154.291 39.2797 154.424 39.8255C154.562 40.3713 154.816 40.7816 155.187 41.0566C155.557 41.3274 156.028 41.4628 156.599 41.4628C156.97 41.4628 157.314 41.419 157.63 41.3316C157.951 41.2399 158.241 41.1087 158.499 40.9379C158.757 40.767 158.98 40.5608 159.167 40.3192C159.359 40.0734 159.507 39.8005 159.611 39.5005H162.723C162.569 40.063 162.315 40.6233 161.961 41.1816C161.611 41.7357 161.169 42.2377 160.636 42.6877C160.103 43.1376 159.484 43.498 158.78 43.7688C158.076 44.0396 157.293 44.175 156.43 44.175C155.251 44.175 154.235 43.9104 153.381 43.3813C152.531 42.8522 151.916 42.0856 151.537 41.0816C151.162 40.0734 151.091 38.8527 151.325 37.4195C151.554 36.0322 152.006 34.8636 152.681 33.9137C153.36 32.9638 154.185 32.2451 155.155 31.7577C156.13 31.2702 157.17 31.0265 158.274 31.0265C159.074 31.0265 159.792 31.1348 160.43 31.3515C161.071 31.5639 161.615 31.8764 162.061 32.2889C162.507 32.6971 162.838 33.1992 163.055 33.7949C163.275 34.3907 163.363 35.0719 163.317 35.8384ZM165.025 33.7137L165.45 31.2015H176.267L175.842 33.7137H171.961L170.262 44H167.212L168.912 33.7137H165.025ZM185.521 31.2015H188.608L187.239 39.4568C187.081 40.4108 186.716 41.242 186.146 41.9502C185.579 42.6543 184.856 43.2001 183.977 43.5875C183.098 43.9708 182.119 44.1625 181.04 44.1625C179.957 44.1625 179.042 43.9708 178.297 43.5875C177.551 43.2001 177.011 42.6543 176.678 41.9502C176.345 41.242 176.255 40.4108 176.409 39.4568L177.778 31.2015H180.871L179.54 39.1881C179.469 39.6297 179.503 40.0234 179.64 40.3692C179.782 40.7108 180.011 40.9816 180.328 41.1816C180.644 41.3774 181.032 41.4753 181.49 41.4753C181.952 41.4753 182.375 41.3774 182.759 41.1816C183.142 40.9816 183.458 40.7108 183.708 40.3692C183.958 40.0234 184.119 39.6297 184.19 39.1881L185.521 31.2015ZM188.422 44L190.547 31.2015H195.834C196.792 31.2015 197.592 31.3744 198.233 31.7202C198.875 32.0618 199.331 32.5534 199.602 33.195C199.873 33.8324 199.935 34.5886 199.789 35.4635C199.648 36.3467 199.331 37.0987 198.839 37.7195C198.352 38.3361 197.723 38.8069 196.952 39.1318C196.186 39.4568 195.315 39.6193 194.34 39.6193H190.997L191.409 37.182H194.178C194.64 37.182 195.04 37.1216 195.377 37.0008C195.715 36.8758 195.984 36.6883 196.184 36.4384C196.388 36.1842 196.523 35.8593 196.59 35.4635C196.652 35.0677 196.623 34.7407 196.502 34.4824C196.386 34.2199 196.179 34.0241 195.884 33.8949C195.592 33.7616 195.217 33.6949 194.759 33.6949H193.234L191.515 44H188.422ZM196.596 38.1507L198.814 44H195.44L193.29 38.1507H196.596ZM200.211 44L202.336 31.2015H211.26L210.835 33.7137H205.004L204.579 36.3384H209.954L209.529 38.8568H204.154L203.73 41.4878H209.56L209.135 44H200.211Z"
            fill="#FBD784"
          />
          <path
            d="M63.1603 13.9261L64.4664 23.3H64.5727L68.9909 13.9261H72.453L66.01 26.7246H61.8917L59.6982 13.9261H63.1603ZM71.7062 26.7246L73.831 13.9261H82.7549L82.33 16.4383H76.4994L76.0745 19.063H81.4488L81.0239 21.5815H75.6495L75.2246 24.2124H81.0551L80.6302 26.7246H71.7062ZM82.5675 26.7246L84.6922 13.9261H89.9791C90.9373 13.9261 91.7372 14.099 92.3788 14.4448C93.0204 14.7864 93.4766 15.278 93.7474 15.9196C94.0182 16.557 94.0807 17.3132 93.9349 18.1881C93.7932 19.0713 93.4766 19.8233 92.985 20.4441C92.4976 21.0607 91.8685 21.5315 91.0977 21.8564C90.3311 22.1814 89.4604 22.3439 88.4855 22.3439H85.1422L85.5546 19.9066H88.323C88.7855 19.9066 89.1854 19.8462 89.5229 19.7254C89.8604 19.6004 90.1291 19.413 90.3291 19.163C90.5332 18.9088 90.6686 18.5839 90.7353 18.1881C90.7978 17.7923 90.7686 17.4653 90.6478 17.207C90.5311 16.9445 90.3249 16.7487 90.0291 16.6195C89.7375 16.4862 89.3625 16.4196 88.9042 16.4196H87.3794L85.6608 26.7246H82.5675ZM90.7415 20.8753L92.96 26.7246H89.5854L87.4356 20.8753H90.7415ZM94.3567 26.7246L96.4815 13.9261H105.405L104.98 16.4383H99.1499L98.725 19.063H104.099L103.674 21.5815H98.3L97.8751 24.2124H103.706L103.281 26.7246H94.3567ZM113.611 17.7881C113.644 17.3174 113.519 16.9528 113.236 16.6945C112.957 16.4362 112.515 16.3071 111.911 16.3071C111.511 16.3071 111.169 16.3591 110.886 16.4633C110.603 16.5633 110.38 16.7049 110.217 16.8882C110.055 17.0674 109.953 17.2757 109.911 17.5132C109.874 17.7007 109.884 17.8673 109.942 18.0131C110.001 18.1589 110.103 18.2881 110.249 18.4006C110.399 18.5131 110.584 18.611 110.805 18.6943C111.03 18.7776 111.282 18.8505 111.561 18.913L112.611 19.163C113.219 19.3005 113.746 19.4838 114.192 19.7129C114.642 19.9379 115.006 20.2108 115.286 20.5316C115.565 20.8482 115.756 21.2127 115.86 21.6252C115.965 22.0377 115.973 22.5001 115.885 23.0125C115.752 23.8208 115.433 24.5144 114.929 25.0935C114.429 25.6726 113.775 26.1163 112.967 26.4246C112.163 26.7329 111.228 26.8871 110.161 26.8871C109.095 26.8871 108.188 26.7267 107.443 26.4059C106.701 26.0809 106.164 25.5914 105.83 24.9373C105.497 24.2832 105.408 23.4583 105.562 22.4626H108.518C108.472 22.8751 108.524 23.2188 108.674 23.4937C108.828 23.7687 109.065 23.977 109.386 24.1187C109.707 24.2603 110.094 24.3311 110.549 24.3311C110.965 24.3311 111.33 24.2749 111.642 24.1624C111.959 24.0499 112.211 23.8937 112.398 23.6937C112.59 23.4937 112.707 23.2646 112.748 23.0063C112.79 22.7688 112.75 22.5626 112.63 22.3876C112.513 22.2126 112.313 22.0606 112.03 21.9314C111.751 21.8023 111.384 21.6856 110.93 21.5815L109.649 21.269C108.59 21.0107 107.788 20.5982 107.243 20.0316C106.701 19.465 106.509 18.6964 106.668 17.7257C106.801 16.9299 107.13 16.2342 107.655 15.6384C108.184 15.0426 108.853 14.5802 109.661 14.2511C110.474 13.9178 111.367 13.7511 112.342 13.7511C113.334 13.7511 114.167 13.9198 114.842 14.2573C115.521 14.5906 116.01 15.0614 116.31 15.6696C116.615 16.2737 116.702 16.9799 116.573 17.7881H113.611ZM118.116 16.4383L118.541 13.9261H129.359L128.934 16.4383H125.053L123.353 26.7246H120.304L122.004 16.4383H118.116Z"
            fill="#64AEDF"
          />
          <path
            d="M13.1087 0.925781H39.8484L38.6737 7.28193H19.9032L17.8217 19.3367H34.5881L33.7114 25.2545H16.6156L14.4238 37.9668H33.273L32.1772 44.3229H5.4375L13.1087 0.925781Z"
            fill="#64AEDF"
          />
        </svg>
      </div>

      <div className="hidden md:flex items-center gap-9  ml-[17%] text-md font-Montserrat">
        <p>Media</p>
        <Link to="/contact">
          <p>Contact us</p>
        </Link>
        <p>Blogs</p>
      </div>

      {/* Hamburger menu button for mobile screens */}
      <button
        className="md:hidden focus:outline-none flex items-center justify-center p-2 rounded-md  "
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu overlay using conditional rendering */}
      <div
        className={`absolute top-[10vh] left-0 bg-[rgba(0,0,0,0.9)] w-full text-white md:hidden ${
          isOpen
            ? "h-screen"
            : "h-0 overflow-hidden transition-all duration-300 ease-in-out"
        }`}
      >
        <ul className="flex flex-col items-center gap-9 font-bold text-xl p-8">
          <li onClick={toggleMenu}>
            <p>Media</p>
          </li>
          <li onClick={toggleMenu}>
            <p>Contact Us</p>
          </li>
          <li onClick={toggleMenu}>
            <p>Blogs</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

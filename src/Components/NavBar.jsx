import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <img className="h-8" src="/path/to/logo.png" alt="Logo" />
          </div>
          <div className="hidden md:flex">
            <a href="#" className="text-white">
              Link 1
            </a>
            <a href="#" className="text-white ml-4">
              Link 2
            </a>
            {/* Add more links as needed */}
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <a href="#" className="block text-white">
            Link 1
          </a>
          <a href="#" className="block text-white">
            Link 2
          </a>
          {/* Add more links as needed */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

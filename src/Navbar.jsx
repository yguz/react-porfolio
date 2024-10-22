// Navbar.js
import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // Optional, for smooth transitions

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-purple p-4 fixed w-full z-10">
      <div className="flex items-center justify-between">
        <div className="text-gray-700 font-bold">My Portfolio</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className={`hidden md:flex justify-center space-x-4`}>
          <li>
            <a
              href="#greeting"
              className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Welcome
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-2">
            <li>
              <a
                href="#greeting"
                className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;

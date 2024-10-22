// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-custom-purple p-4 fixed w-full z-10">
      <ul className="flex justify-center space-x-4">
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
    </nav>
  );
};

export default Navbar;

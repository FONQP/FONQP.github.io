import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-white text-2xl font-bold">FONQP Lab</div> */}
        <Link to="/"><img className="h-6 ml-10 mt-1 mb-1" src="/logo-crp.png" alt="FONQP Lab" /></Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray"
          >
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
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for Medium and Larger Screens */}
        <div className={`hidden md:flex space-x-6 mr-9 text-lg`}>
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link to="/team" className="text-gray-800 hover:text-gray-600">
            Team
          </Link>
          <Link to="/publications" className="text-gray-800 hover:text-gray-600">
            Publications
          </Link>
          <Link to="/projects" className="text-gray-800 hover:text-gray-600">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </Link>
          <Link to="https://github.com/FONQP" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github mt-1" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg></Link>
        </div>
      </div>

      {/* Mobile Menu - Collapsible */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link to="/about" className="block text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link to="/team" className="block text-gray-800 hover:text-gray-600">
            Team
          </Link>
          <Link to="/publications" className="block text-gray-800 hover:text-gray-600">
            Publications
          </Link>
          <Link to="/projects" className="block text-gray-800 hover:text-gray-600">
            Projects
          </Link>
          <Link to="/contact" className="block text-gray-800 hover:text-gray-600">
            Contact
          </Link>
          <Link to="https://github.com/FONQP" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github mt-1" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

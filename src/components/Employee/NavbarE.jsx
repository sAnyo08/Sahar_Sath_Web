import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b-4 border-yellow-700 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src=""
            className="h-10 w-10 rounded-full"
            alt="Government Logo"
          />
          <span className="self-center text-3xl font-bold text-yellow-300 tracking-wider">Shahar Saath</span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/table"
                className="block py-2 px-3 text-yellow-300 bg-gray-900 rounded md:bg-transparent md:text-yellow-300 hover:text-white md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/faqsE"
                className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0"
              >
                FAQS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

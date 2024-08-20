import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font text-2xl">
      <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-center justify-center md:justify-start mb-6 md:mb-0">
          <NavLink to="/" className="flex title-font font-medium items-center">
            <img
              src="./images/logo1.png"
              alt="company-logo"
              width="50"
              height="50"
              className="rounded-full mb-4"
            />
          </NavLink>
            <div className="ml-3 text-2xl">CODECRAFTS.COM</div>
        </div>

        {/* Column 2: Subscribe */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h3 className="text-3xl mb-2">Subscribe for Updates</h3>
          <div className="flex w-full">
            <form action="#">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mb-4 w-full bg-gray-100 rounded-l border border-gray-300 focus:ring-0 focus:border-gray-900 py-3 px-3 leading-8 transition-colors duration-300"
              />
              <button className="bg-gray-900 text-white py-3 px-5 rounded-r">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Column 3: Social Links */}
        <div className="flex flex-col items-center justify-center md:justify-start mb-6 md:mb-0">
          <span className="text-2xl mr-4 mb-4">Follow Us</span>
          <div className="flex space-x-3">
            <NavLink className="text-gray-500 border-2 border-gray-500 rounded-full p-2">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </NavLink>
            <NavLink className="text-gray-500 border-2 border-gray-500 rounded-full p-2">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </NavLink>
            <NavLink className="text-gray-500 border-2 border-gray-500 rounded-full p-2">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </NavLink>
            <NavLink className="text-gray-500 border-2 border-gray-500 rounded-full p-2">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </NavLink>
          </div>
        </div>

        {/* Column 4: Call Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl mb-4">Call Us</h3>
          <p className="text-lg">+91 123456678</p>
        </div>
      </div>

      <div className="bg-gray-100 mt-10">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 Tailblocks —
            <NavLink
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

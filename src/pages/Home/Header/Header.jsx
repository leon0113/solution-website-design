import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import bannerIcon from "../images/Group 260.png"
import { Link } from "react-router-dom";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" p-2 text-gray-900">
      <div className="container relative mx-auto flex h-16 justify-between">
        <Link
          rel="noopener noreferrer"
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img className="w-3/4" src={bannerIcon} alt="" />
        </Link>

        <ul
          className={`absolute z-50 items-stretch space-y-4 rounded-lg font-semibold md:static md:flex md:justify-center lg:flex lg:space-x-3 lg:space-y-0 ${
            isOpen
              ? "top-16 left-0 w-full bg-[#e7e7e76c] px-4 py-10 text-left transition-all duration-500"
              : "top-[-200px] left-0"
          }`}
        >
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/home"
              className="-mb-1 flex items-center border-b-2 border-transparent border-cyan-400 px-4 "
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/about"
              className="-mb-1 flex items-center border-b-2 border-transparent px-4"
            >
              About
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/pricing"
              className="-mb-1 flex items-center border-b-2 border-transparent px-4"
            >
              Pricing
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/contact"
              className="-mb-1 flex items-center border-b-2 border-transparent px-4"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex items-center md:space-x-4">
          <Link
            rel="noopener noreferrer"
            to="/home"
            className="-mb-1 flex hidden items-center border-b-2 border-transparent px-4 font-semibold md:block"
          >
            Log In
          </Link>
          <button
            type="button"
            className="hidden rounded bg-gray-800 px-6 py-2 font-semibold text-gray-100 lg:block"
          >
            Get Started
          </button>
        </div>

        <div className="pr-3 md:hidden md:pr-0">
          {isOpen ? (
            <HiX
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 cursor-pointer text-black"
            />
          ) : (
            <HiMenuAlt3
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 cursor-pointer text-black"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

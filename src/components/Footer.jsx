import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer text-white"
          >
            WSolutions<span className="text-primary text-5xl">.</span>{" "}
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block hover:scale-105 ease-in duration-50 p-4 bg-primary rounded-full text-white">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block hover:scale-105 ease-in duration-50 p-4 bg-primary rounded-full text-white">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block hover:scale-105 ease-in duration-50 p-4 bg-primary rounded-full text-white">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block hover:scale-105 ease-in duration-50 p-4 bg-primary rounded-full text-white">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold  text-center md:text-left text-white">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="hover:drop-shadow-md hover:underline text-gray-300 mt-4 hover: transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:drop-shadow-md hover:underline text-gray-300 mt-4 hover: transition-color"
          >
            Press
          </a>
          <a
            href="#"
            className="hover:drop-shadow-md hover:underline text-gray-300 mt-4 hover: transition-color"
          >
            Investors
          </a>
          <a
            href="#"
            className="hover:drop-shadow-md hover:underline  text-gray-300 mt-4 hover: transition-color"
          >
            Events
          </a>
          <a
            href="#"
            className="hover:drop-shadow-md hover:underline  text-gray-300 mt-4 hover: transition-color"
          >
            Terms of use
          </a>
          <a
            href="#"
            className=" hover:drop-shadow-md hover:underline text-gray-300 mt-4 hover: transition-color"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="hover:scale-105 ease-in duration-50 font-semibold py-2 px-6 bg-primary  rounded-xl text-white"
          >
            Contact Us
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © mollgerman-2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;

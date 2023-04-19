import React, { useState } from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 border-b-2">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold  relative p-1 bg-transparent">
          WSolutions<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary  -z-10 " />
        </a>
      </div>
      <nav
        className={`fixed ${showMenu ? 'bg-stone-50' : ''} drop-shadow-lg w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0 " : " -left-full"
        } top-0 xl:static  flex-1 flex flex-col xl:flex-row items-center justify-around  transition-all duration-500 z-50`}
      >
        <a href="#home" className="text-xl hover:drop-shadow-sm hover:scale-105 ease-in-out duration-100">
          Home
        </a>
        <a href="#aboutUs" className="text-xl hover:drop-shadow-sm hover:scale-105 ease-in-out duration-100">
          About Us
        </a>
        <a href="#services" className="text-xl hover:drop-shadow-sm hover:scale-105 ease-in-out duration-100">
          Services
        </a>
        <a href="#aboutUs" className="text-xl hover:drop-shadow-sm hover:scale-105 ease-in-out duration-100">
          Products
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill className=""/>}
      </button>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import logo from "../assets/NavLogo.png";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Newswire from "./Shared/Newswire";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white flex justify-between items-center py-7 h-20 px-10 lg:px-20 relative border-b border-zinc-800">
      {/* Menu or Close Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden lg:hidden cursor-pointer"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <IoCloseOutline size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
      </Link>

      {/* Links for Desktop */}
      <div className="hidden md:flex lg:flex gap-10">
        <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
          Games
        </p>
        <Link to="/Newswire">
          <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
            Newswire
          </p>
        </Link>
        <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
          Videos
        </p>
        <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
          Download
        </p>
        <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
          Store
        </p>
        <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
          Support
        </p>
      </div>

      {/* Right side icons and buttons */}
      <div className="flex items-center gap-5">
        <button className="bg-[#fcaf17] text-black w-36 h-9 rounded-md hover:bg-yellow-600 font-semibold hidden md:block lg:block duration-200">
          GET LAUNCHER
        </button>

        <div className="flex gap-5 items-center">
          <CiSearch
            size={30}
            className="cursor-pointer hover:text-gray-300 hidden md:block lg:block"
          />
          <CgProfile size={27} className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white py-5 flex flex-col gap-5 font-bold text-xl md:hidden lg:hidden z-50 px-10">
          <div>
            <div className="flex justify-between items-center">
              <p className="mt-6 mb-5">Games</p>
              <p className="text-xs uppercase cursor-pointer flex items-center">
                <Link
                  to="/"
                  className="text-xs uppercase cursor-pointer flex items-center"
                >
                  View All <IoMdArrowDropright size={20} />
                </Link>
              </p>
            </div>

            {/* Games section */}
            <div className="flex gap-5 overflow-hidden">
              <img
                src="https://th.bing.com/th/id/OIP.Mu_NACYC79KwB73b-gycIAHaLH?rs=1&pid=ImgDetMain"
                alt="Game 1"
                className="w-36 border-2 border-white/50 p-1"
              />
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/051/522/507/large/mohammx-aquib-gta-the-trilogy-definitive-edition-fan-art-by-patrickbrown-detu6kp-fullview.jpg?1657568184"
                alt="Game 2"
                className="w-36 border-2 border-white/50 p-1"
              />
              <img
                src="https://th.bing.com/th/id/OIP.Mmhk0frWdbONnIJ6EoW0UgAAAA?rs=1&pid=ImgDetMain"
                alt="Game 3"
                className="w-36 border-2 border-white/50 p-1"
              />
            </div>

            {/* Other links */}
            <p className="mt-6 cursor-pointer">Newswire</p>
            <p className="mt-6 cursor-pointer">Videos</p>
            <p className="mt-6 cursor-pointer">Download</p>
            <p className="mt-6 cursor-pointer">Store</p>
            <p className="mt-6 cursor-pointer">Support</p>
          </div>

          <button className="bg-[#fcaf17] text-black text-lg w-full h-12 rounded-md hover:bg-[#e0a114] font-semibold">
            GET LAUNCHER
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/NavLogo.png";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Newswire from "./Shared/Newswire";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";

const Nav = () => {
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [isDown, setIsDown] = useState(true);
  
  const toggleIcon = () => {
    setIsDown(prevState => !prevState); // Toggles the state between true and false
  };



  

  return (
    <div className="bg-black text-white flex items-center py-7 h-20 px-10 lg:px-20 relative border-b border-zinc-800 justify-between">
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
      <div className="hidden md:flex lg:flex gap-10 ">
        <Popover>
          <PopoverButton className="hover:text-[#fcaf17] cursor-pointer duration-300 flex gap-1" onClick={toggleIcon}>
            Games {isDown ? <FaAngleDown className="animate-bounce relative top-1 size-4" /> : <FaAngleUp className="relative top-1 size-4" />}
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 bg-[#121212] text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 mt-7"
          >
            <div className="px-20 py-14 w-screen">
              <div className="text-white flex justify-between font-Moderustic font-semibold mb-5">
                <p className="text-3xl">Features Games</p>
                <p className="text-xl gap-1 flex cursor-pointer">VIEW ALL <FaCaretRight className="relative size-7" /></p>
              </div>
              <div className="flex gap-8">
                <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg?im=Resize=640" alt="/" className="w-[250px] border border-zinc-800 rounded-md object-cover" />
                <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg?im=Resize=640" alt="/" className="w-[250px] border border-zinc-800 rounded-md object-cover" />
                <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg?im=Resize=640" alt="/" className="w-[250px] border border-zinc-800 rounded-md object-cover" />
                <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg?im=Resize=640" alt="/" className="w-[250px] border border-zinc-800 rounded-md object-cover" />
                <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg?im=Resize=640" alt="/" className="w-[250px] border border-zinc-800 rounded-md object-cover" />
              </div>
            </div>
          </PopoverPanel>
        </Popover>
        <Link to="/Newswire">
          <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
            Newswire
          </p>
        </Link>
        <p className="hover:text-[#fcaf17] cursor-pointer duration-300">
          Videos
        </p>
        <Link to="Download" className="hover:text-[#fcaf17] cursor-pointer duration-300">
          Download
        </Link>
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
          {/* Drop Down Menu */}
          <Menu>
            <MenuButton>
              <CgProfile
                size={27}
                className="cursor-pointer hover:text-gray-300"
              />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom"
              className="bg-[#121212] text-white font-Moderustic border rounded-xl  border-neutral-700 w-80 mt-7 gap-y-9 text-sm transition duration-200 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <a
                  className="block hover:bg-neutral-700 duration-500 border-b border-neutral-700 border- h-14 p-3"
                  href="/"
                >
                  Sign In
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block hover:bg-neutral-700 duration-500 border-b border-neutral-700 h-14 p-3"
                  href="/"
                >
                  Sign Up
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  className="block hover:bg-neutral-700 duration-500 h-14 p-3"
                  href="/"
                >
                  Help
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
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
            <Link to="Newswire">
              <p className="mt-6 cursor-pointer">Newswire</p>
            </Link>
            <p className="mt-6 cursor-pointer">Videos</p>
            <Link to="Download">
            <p className="mt-6 cursor-pointer">Download</p>
            </Link>
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

import React from 'react';
import { MdLanguage } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white px-6 py-10 md:px-24 md:py-20'>
      
      {/* Top Links and Language */}
      <div className='flex flex-col md:flex-row md:justify-between gap-6 md:gap-0'>
        <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-center text-lg'>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Contact</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Careers</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Community Guidelines</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Subscribe</p>
        </div>
        <div className='flex justify-center md:justify-end'>
          <p className='flex items-center gap-2'>
            <MdLanguage size={25} /> Select a language
          </p>
        </div>
      </div>

      {/* Legal and Social Links */}
      <div className='flex flex-col md:flex-row md:justify-between mt-16 gap-10'>
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          {[
            "Corporate",
            "Privacy",
            "Cookie Settings",
            "Cookies Policy",
            "Legal",
            "Do Not Sell or Share My Personal Information"
          ].map((item, index) => (
            <p
              key={index}
              className='hover:text-[#fcaf17] duration-150 cursor-pointer mt-4 font-medium text-white/50'
            >
              {item}
            </p>
          ))}
        </div>
        <div className='flex justify-center md:justify-end gap-8'>
          <FaXTwitter size={25} className='hover:text-gray-500 duration-200 hover:scale-110'/>
          <FaInstagram size={25} className='hover:text-rose-500 duration-200 hover:scale-110'/>
          <BsGithub size={25} className='hover:text-zinc-500 duration-200 hover:scale-110'/> 
          <FaFacebook size={25} className='hover:text-blue-500 duration-200 hover:scale-110'/>
          <FaTwitch size={25} className='hover:text-violet-500 duration-200 hover:scale-110'/>
        </div>
      </div>

      {/* Bottom Info */}
      <div className='flex flex-col md:flex-row justify-between items-center mt-28 gap-4 text-center md:text-left'>
        <p>Rockstar Games Clone</p>
        <div className='flex flex-wrap gap-4 justify-center'>
          <p>New York</p>
          <p>London</p>
          <p>Paris</p>
          <p>Philippines</p>
        </div>
        <p>MCMXCVIII</p>
      </div>
    </div>
  );
}

export default Footer;

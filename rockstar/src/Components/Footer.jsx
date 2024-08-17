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
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='flex flex-wrap gap-5 text-xl md:gap-8'>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Contact</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Careers</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Community Guidelines</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer'>Subscribe</p>
        </div>
        <div className='flex items-center mt-6 md:mt-0'>
          <p className='flex gap-3 items-center'>
            <MdLanguage size={25}/> Select a language
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between mt-16'>
        <div className='flex flex-col'>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer mt-4 font-medium text-white/50'>Corporate</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer mt-4 font-medium text-white/50'>Privacy</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer mt-4 font-medium text-white/50'>Cookie Settings</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer mt-4 font-medium text-white/50'>Cookies Policy</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer mt-4 font-medium text-white/50'>Legal</p>
          <p className='hover:text-[#fcaf17] duration-150 cursor-pointer mt-4 font-medium text-white/50'>Do Not Sell or Share My Personal Information</p>
        </div>
        <div className='flex flex-wrap gap-8 mt-6 md:mt-0'>
          <FaXTwitter size={25} className='hover:text-gray-500 duration-200 hover:scale-110'/>
          <FaInstagram size={25} className='hover:text-rose-500 duration-200 hover:scale-110'/>
          <BsGithub size={25} className='hover:text-zinc-500 duration-200 hover:scale-110'/> 
          <FaFacebook size={25} className='hover:text-blue-500 duration-200 hover:scale-110'/>
          <FaTwitch size={25} className='hover:text-violet-500 duration-200 hover:scale-110'/>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:justify-between mt-28 text-center md:text-left'>
        <p className='mb-4 md:mb-0'>Rockstar Games Clone</p>
        <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
          <p className='mb-4 md:mb-0'>New York</p>
          <p className='mb-4 md:mb-0'>London</p>
          <p className='mb-4 md:mb-0'>Paris</p>
          <p className='mb-4 md:mb-0'>Philippines</p>
        </div>
        <p className='mb-4 md:mb-0'>MCMXCVIII</p>
      </div>
    </div>
  );
}

export default Footer;

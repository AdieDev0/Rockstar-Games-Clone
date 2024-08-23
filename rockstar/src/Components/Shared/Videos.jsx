import React, { useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Videos = () => {
  const slides = [
    {
      URL: 'https://videos-rockstargames-com.akamaized.net/v4/rkoCtr1r/art/global.jpg?im=Resize=1280'
    },
    {
      URL: 'https://videos-rockstargames-com.akamaized.net/v4/oa46rs8r/art/global.jpg?im=Resize=1280'
    },
    {
      URL: 'https://videos-rockstargames-com.akamaized.net/v4/9146182r/art/global.jpg?im=Resize=1280'
    },
    {
      URL: 'https://videos-rockstargames-com.akamaized.net/v4/r3175t5r/art/global.jpg?im=Resize=1280'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full h-auto'>
      <div style={{backgroundImage: `url(${slides[currentIndex].URL})`}} className='relative h-[300px] sm:h-[400px] lg:w-[950px] bg-center bg-cover duration-500 mb-4'>
        {/* Left Arrow */}
        <div className='absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'>
          <div className='rounded-full bg-black/20 text-white cursor-pointer p-2 absolute'>
            <IoIosArrowDropleft size={30} onClick={prevSlide} />
          </div>
        </div>
        {/* Right Arrow */}
        <div className='absolute top-1/2 right-0 transform -translate-y-1/2translate-x-full group-hover:translate-x-0 transition-transform duration-300'>
          <div className='rounded-full bg-black/20 text-white cursor-pointer p-2'>
            <IoIosArrowDropright size={30} onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
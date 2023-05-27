import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaRegHandPointLeft } from 'react-icons/fa';

const Banner = () => {
    const slides = [
        {
            url: 'https://i.postimg.cc/7YVY5qKQ/Home-Banner.png'
        },
        {
            url: 'https://i.postimg.cc/y889dQyc/Cropin-Cloud-Website-Banner-1280-X528px-1.jpg'
        },
        {
            url: 'https://i.postimg.cc/xTCTNWBf/Cropin-Cloud-Website-Banner-1280-X528px-2.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (

        <div className='px-5 lg:px-0 relative group'>

            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='h-[610px] bg-center bg-no-repeat'>

                {/* Left Arrow */}
                <div className='absolute top=[50%] -translate-x-[-40%] translate-y-[124%] left-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/20 text-black cursor-pointer mt-60'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                {/* Right Arrow */}
                <div className='absolute top=[50%] -translate-x-[40%] translate-y-[124%] right-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/20 text-black cursor-pointer mt-60'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className='absolute top=[80%] -translate-x-[-415%] translate-y-[740%] cursor-pointer'>
                    <div className='flex items-center justify-center'>
                        <Link to="/appointment"><p className='font-mono text-md text-green-700 hover:text-black bg-white px-9 py-5 font-bold rounded-sm'>Book Appointment</p></Link>
                        <FaRegHandPointLeft className='ml-5 text-slate-300' size="2rem" />
                    </div>
                </div>



            </div>



        </div>

    );
};

export default Banner;
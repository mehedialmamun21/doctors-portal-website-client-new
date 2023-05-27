import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Bann = () => {

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
        <div className='h-2/3'>
            <img src="https://i.postimg.cc/qvhVnhPK/beautiful-Bangladesh.jpg" className='w-full h-full' alt="" />

            {/* Left Arrow */}
            <div className='absolute top=[50%] -translate-x-[-40%] translate-y-[-1310%] left-5 text-2xl rounded-full p-2 bg-white/20 hover:text-black text-white cursor-pointer mt-60'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className='absolute top=[50%] -translate-x-[40%] translate-y-[-1310%] right-5 text-2xl rounded-full p-2 bg-white/20 hover:text-black text-white cursor-pointer mt-60'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className='absolute top=[80%] -translate-x-[-30%] lg:-translate-x-[-85%] translate-y-[-370%] lg:translate-y-[-770%] cursor-pointer'>
                <h2 className='text-white text-sm lg:text-2xl'> <span className='font-bold'>আজকের কৃষি</span> <br /> <span className='text-orange-500'>একটি ই-কৃষি উদ্যোগ</span> </h2>
            </div>

            {/* <div className='absolute top=[80%] lg:-translate-x-[-53%] lg:translate-y-[-620%] cursor-pointer'>
                <h2 className='text-white text-sm'> <span className=''>আজকের কৃষি একটি ই-কৃষি ভিত্তিক সামাজিক উদ্যোগ যা</span> <br /> <span className=' '>এই প্রজন্মের কৃষি উদ্যোক্তাদের জন্য কৃষি ভিত্তিক তথ্য, </span> <br /> <span>সংবাদ, চাষাবাদ পদ্ধতি নিয়ে বিভিন্ন তথ্য প্রকাশ করে থাকে।</span> </h2>
            </div> */}

            <div className='absolute top=[80%] -translate-x-[-20%] lg:-translate-x-[-75%] translate-y-[-200%] lg:translate-y-[-900%] cursor-pointer'>
                <div className='flex items-center justify-center'>
                    <Link to="/appointment"><p className='font-mono text-sm lg:text-lg  hover:bg-green-700 bg-slate-100 hover:text-white text-green-600 px-5 py-1 font-bold rounded-3xl'>Book Appointment</p></Link>
                    <FaRegHandPointLeft className='ml-3 lg:ml-4 text-slate-300' size="2rem" />
                </div>
            </div>

        </div>
    );
};

export default Bann;
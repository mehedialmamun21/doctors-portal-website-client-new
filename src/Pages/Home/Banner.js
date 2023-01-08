import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const Banner = () => {
    const slides = [
        {
            // url: 'https://i.postimg.cc/qR0RFKDB/banani-dental-2.png'
        },
        {
            // url: 'https://i.postimg.cc/BbQC4dzy/banani-dental-1-scaled.png'
        },
        {
            // url: 'https://i.postimg.cc/rpSVRGyX/wentworth-family-dental-general-and-family-dentist-sw-calgary-4617-1280x780.jpg'
        },
        {
            // url: 'https://i.postimg.cc/J0fSTNKP/1668-000-N19-medium.jpg'
        },
        {
            // url: 'https://i.postimg.cc/J0fSTNKP/1668-000-N19-medium.jpg'
        },
        {
            // url: 'https://i.postimg.cc/J0fSTNKP/1668-000-N19-medium.jpg'
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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (

        <div className='lg:h-[660px] px-5 lg:px-0 relative group mb-28 bg-secondary'>

            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='h-[665px] bg-center bg-no-repeat object-cover mb-3'>

                {/* Left Arrow */}
                <div className='absolute top=[50%] -translate-x-0 translate-y-[150%] left-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/30 text-white hover:text-black cursor-pointer mt-60'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                {/* Right Arrow */}
                <div className='absolute top=[50%] -translate-x-0 translate-y-[150%] right-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/30 text-white hover:text-black cursor-pointer mt-60'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className='absolute top=[80%] -translate-x-[-61%] translate-y-[500%] cursor-pointer'>
                    <p className='text-white font-semibold font-serif text-4xl'>Our Professional Team</p>
                </div>

                <div className='absolute top=[80%] -translate-x-[-40%] translate-y-[1070%] cursor-pointer'>
                    <p className='text-white font-serif text-md'>DENTAL SOLUTION is always promised to provide the best dental treatment to the patients</p>
                </div>

                <div className='absolute top=[80%] -translate-x-[-144%] translate-y-[905%] cursor-pointer'>
                    <Link to="/appointment"><p className='border-2 border-white text-white hover:bg-white px-5 py-2 hover:text-blue-600 font-semibold'>Book Appointment</p></Link>

                </div>
                <div className='flex top-4 justify-center translate-y-[2505%]'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer text-white hover:text-black'>
                            <RxDot />
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className='flex top-4 justify-center'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer text-black hover:text-orange-700'>
                        <RxDot />
                    </div>
                ))}
            </div> */}

        </div>

    );
};

export default Banner;
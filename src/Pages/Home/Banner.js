import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot } from 'react-icons/rx';
const Banner = () => {
    const slides = [
        {
            url: 'https://i.postimg.cc/qR0RFKDB/banani-dental-2.png'
        },
        {
            url: 'https://i.postimg.cc/BbQC4dzy/banani-dental-1-scaled.png'
        },
        {
            url: 'https://i.postimg.cc/rpSVRGyX/wentworth-family-dental-general-and-family-dentist-sw-calgary-4617-1280x780.jpg'
        },
        {
            url: 'https://i.postimg.cc/J0fSTNKP/1668-000-N19-medium.jpg'
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

        <div className='lg:h-[485px] px-5 lg:px-0 relative group mb-28'>

            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='h-[575px] bg-center bg-no-repeat object-cover mb-3'>
                {/* Left Arrow */}
                <div className='absolute top=[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/30 text-white hover:text-black cursor-pointer mt-60'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                {/* Right Arrow */}
                <div className='absolute top=[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/30 text-white hover:text-black cursor-pointer mt-60'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>

            <div className='flex top-4 justify-center'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-xl cursor-pointer text-black hover:text-orange-700'>
                        <RxDot />
                    </div>
                ))}
            </div>

        </div>

    );
};

export default Banner;
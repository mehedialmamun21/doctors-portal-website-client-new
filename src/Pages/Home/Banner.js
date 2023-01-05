import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Banner = () => {
    const slides = [
        {
            url: 'https://i.postimg.cc/ZK7Pd49x/1668-000-N19-medium-1280x780.jpg'
        },
        {
            url: 'https://i.postimg.cc/tgckKPQf/st-charles-dental-clinic-alain-carle-architecte-26-1280x780.jpg'
        },
        {
            url: 'https://i.postimg.cc/rpSVRGyX/wentworth-family-dental-general-and-family-dentist-sw-calgary-4617-1280x780.jpg'
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

        <div className='max-w-[1400px] lg:h-[485px] pt-2 w-full px-5 lg:px-0 relative group'>

            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-[480px] object-cover bg-center bg-no-repeat'>
                {/* Left Arrow */}
                <div className='absolute top=[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/50 text-white hover:text-black cursor-pointer mt-60'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                {/* Right Arrow */}
                <div className='absolute top=[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 hover:bg-white/50 bg-black/50 text-white hover:text-black cursor-pointer mt-60'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-xl cursor-pointer'>
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>

    );
};

export default Banner;
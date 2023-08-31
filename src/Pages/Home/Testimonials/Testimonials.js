import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

import { BsArrowRight } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

import { IoArrowRedoOutline } from 'react-icons/io5';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <section className='px-72 py-28'>
            <div className='pb-10 flex flex-col items-center'>
                <h4 className='text-2xl lg:text-3xl text-black font-semibold pb-3'>Testimonial</h4>
                <h2 className='text-2xl lg:text-3xl font-mono text-slate-600'>What Our Clients Say</h2>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >

                        <div className='px-24 py-16 flex flex-col items-center border border-y-orange-500 bg-white rounded-sm'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft size="2.2rem" className='mt-8 text-blue-500' />
                            <p className='py-8'>{review.description}</p>
                            <div className='flex items-center justify-center'>
                                <IoArrowRedoOutline size="1.5rem" />
                                <h3 className='font-semibold text-lg pl-4'>{review.name}</h3>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
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

// import { BsArrowRight } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import { BsArrowReturnRight } from 'react-icons/bs';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

// import { IoArrowRedoOutline } from 'react-icons/io5';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);


    const { data: review, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className='px-72 py-28 bg-gray-100'>
            <div className='pb-10 flex flex-col items-center'>
                <h4 className='text-black text-xl lg:text-3xl font-mono font-semibold pb-2'>Testimonial</h4>
                <h3 className='text-3xl lg:text-4xl pb-2 font-mono text-slate-600'>What Our Clients Say</h3>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >

                        <div className='px-20 py-10 flex flex-col items-center border border-y-orange-400 border-x-white bg-amber-50 rounded-sm'>
                            <Rating
                                style={{ maxWidth: 130 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft size="1.6rem" className='mt-6 text-blue-500' />
                            <p className='py-6 font-mono text-sm'>{review.description}</p>
                            <div className='flex items-center justify-center'>
                                {/* <IoArrowRedoOutline size="1.5rem" /> */}
                                <h3 className='text-lg pl-4 font-mono flex'> <span className='flex items-center mr-7'><BsArrowReturnRight /></span> {review.name}</h3>
                            </div>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;


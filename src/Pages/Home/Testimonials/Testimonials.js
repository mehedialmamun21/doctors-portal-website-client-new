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
import Loading from '../../Shared/Loading';

// import { IoArrowRedoOutline } from 'react-icons/io5';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    return (
        <section className='px-5 lg:px-72 lg:py-28 lg:bg-zinc-200 mt-20 lg:mt-0'>
            <div className='lg:pb-10 flex flex-col items-center'>
                <h4 className='text-black text-2xl lg:text-3xl font-mono font-semibold pt-5 lg:pt-0 pb-5 lg:pb-2'>Testimonial</h4>
                <h3 className='text-2xl lg:text-4xl pb-5 lg:pb-2 font-mono text-slate-600'>What Our Clients Say</h3>
            </div>


            {loading ? (
                <Loading />
            ) : (

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <div className='px-12 lg:px-20 py-10 flex flex-col items-center border-2 border-y-orange-400 border-x-white bg-white rounded-sm'>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft size="1.6rem" className='mt-6 text-blue-500' />
                                <p className='py-6 font-mono text-sm'>{review.description}</p>
                                <div className='flex items-center justify-center'>
                                    <h3 className='text-sm lg:text-lg font-mono bg-slate-200 px-3 lg:px-5 rounded-sm'> {review.name} </h3>
                                </div>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            )}
        </section>
    );
};

export default Testimonials;


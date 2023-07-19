import React, { useEffect, useState } from 'react';
import quotePic from "../../assets/icons/quote.svg";

import Review from './Review';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className='pt-20 pb-20 px-5 lg:px-40'>

            <div className='flex justify-between lg:px-0 pb-0 lg:pb-8'>
                <div className='pt-5 pb-14'>
                    <h4 className='text-2xl lg:text-3xl text-black font-bold pb-3'>Testimonial</h4>
                    <h2 className='text-2xl lg:text-3xl font-mono text-slate-600'>What Our Clients Say</h2>
                </div>
                <div className='ml-2 lg:ml-0 pt-5'>
                    <img className='w-24 lg:w-28' src={quotePic} alt="" />
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                {
                    reviews.map((review) => (
                        <Review
                            key={review._id}
                            review={review}
                        ></Review>
                    ))
                }
            </div>

        </section>
    );
};

export default Testimonial;
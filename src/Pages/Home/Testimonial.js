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
        <section className='pt-10 pb-20 px-5 lg:px-40'>

            <div className='flex justify-between lg:px-0 py-5'>
                <div className='pt-5 pb-14'>
                    <h4 className='text-2xl text-cyan-500   pb-3'>Testimonial</h4>
                    <h2 className='text-2xl lg:text-3xl font-semibold font-mono text-zinc-700'>What Our Clients Say</h2>
                </div>
                <div className='ml-2 lg:ml-0'>
                    <img className='w-24 lg:w-40' src={quotePic} alt="" />
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
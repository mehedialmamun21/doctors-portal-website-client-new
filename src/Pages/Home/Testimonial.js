import React, { useEffect, useState } from 'react';
import quotePic from "../../assets/icons/quote.svg";

import Review from './Review';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://limitless-inlet-88208.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className='my-10 px-5'>
            <div className='flex justify-between'>
                <div className='px-5 pb-5'>
                    <h4 className='text-2xl text-secondary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl font-semibold'>What Our Patient Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quotePic} alt="" />
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
import React from 'react';
import quotePic from "../../assets/icons/quote.svg";

import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            location: "Dhaka",
            review: "Overall great experience,The dentists were very nice and so were the staff. I would definitely recommend this place to my friends and family",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            location: "Khulna",
            review: "Always friendly , they worked me in last minute and got me in and out fast! Super people, they why he's my dentist! And his assistants are so sweet and kind !",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            location: "Rajshahi",
            review: "Great experience! I'm happy that I chose Trusted Dental Care! I look forward to coming in regularly",
            img: people3
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div className='mx-5'>
                    <h4 className='text-xl text-secondary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patient Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quotePic} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
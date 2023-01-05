import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { _id, description, rating } = review;
    return (
        <div class="card lg:card-side bg-base-100 shadow-2xl rounded-sm">
            <div class="card-body px-5 py-6 lg:py-5">
                <div className='flex border-b-2 border-b-zinc-300 pb-5'>
                    <span className='pr-1 text-lg'> <span>Rating :</span> <span className='font-semibold'> {rating} </span></span>
                    <span className='flex justify-center items-center text-orange-400'><FaStar /></span>
                </div>
                <p className=''><span className='text-zinc-600 text-md font-semibold'>{description}</span> </p>
            </div>
        </div>
    );
};

export default Review;
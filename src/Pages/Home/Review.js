import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { description, rating, name } = review;
    return (
        <div class="card lg:card-side bg-base-100 drop-shadow-2xl rounded-sm">
            <div class="card-body px-5 py-6 lg:py-5">
                <div className=' border-b-2 border-b-zinc-300 '>
                    <div className='flex pb-4'>
                        <span className='pr-1 text-lg font-mono'> <span>Rating:</span> <span className='font-semibold'> {rating} </span> </span>
                        <span className='flex justify-center items-center text-orange-400'><FaStar /></span>
                    </div>
                    <div className='pb-2 text-sm'>
                        <span className='px-3 py-1 rounded-2xl font-mono font-semibold bg-blue-100'> {name} </span>
                    </div>
                </div>
                <p className='font-mono'> <span className='text-zinc-700 text-sm'>{description}</span> </p>
            </div>
        </div>
    );
};

export default Review;
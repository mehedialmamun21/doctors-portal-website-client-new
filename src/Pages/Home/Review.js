import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { description, rating, name } = review;
    return (
        <div class="card lg:card-side bg-base-100 shadow-2xl rounded-sm">
            <div class="card-body px-5 py-6 lg:py-5">
                <div className=' border-b-2 border-b-zinc-300 '>
                    <div className='flex pb-4'>
                        <span className='pr-1 text-lg'> <i><span>Rating:</span> <span className='font-semibold'> {rating} </span></i> </span>
                        <span className='flex justify-center items-center text-orange-400'><FaStar /></span>
                    </div>
                    <div className='pb-2 text-sm'>
                        <span className='px-3 py-1 rounded-2xl bg-blue-100'> <i>{name}</i> </span>
                    </div>
                </div>
                <p className=''> <i><span className='text-zinc-600 text-md font-semibold'>{description}</span></i> </p>
            </div>
        </div>
    );
};

export default Review;
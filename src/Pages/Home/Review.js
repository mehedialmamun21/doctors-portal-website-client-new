import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { description, rating, name } = review;
    return (
        <div class="card lg:card-side rounded-sm">
            <div class="card-body bg-white px-5 py-6 lg:py-5">
                <div className='flex border-b border-b-zinc-400 pb-5'>
                    <div className='text-sm flex justify-center items-center'>
                        <span className='px-5 py-2 rounded-sm font-mono text-black bg-white font-semibold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'> {name} </span>
                    </div>
                    <div className='flex pl-4'>
                        <span className='flex justify-center items-center pr-1 text-black text-lg font-mono'> {rating} </span>
                        <span className='flex justify-center items-center text-orange-500'><FaStar /></span>
                    </div>
                </div>
                <p className='font-mono'> <span className='text-slate-800 text-sm'>{description}</span> </p>
            </div>
        </div>
    );
};

export default Review;
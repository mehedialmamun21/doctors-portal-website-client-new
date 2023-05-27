import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { description, rating, name } = review;
    return (
        <div class="card lg:card-side rounded-sm">
            <div class="card-body bg-slate-200 px-5 py-6 lg:py-3">
                <div className='flex border-b border-b-zinc-400 pb-3'>
                    <div className='text-sm flex justify-center items-center'>
                        <span className='px-3 py-1 rounded-sm font-mono text-white bg-cyan-700'> {name} </span>
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
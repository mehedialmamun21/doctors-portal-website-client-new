import React from 'react';
import star from '../../assets/icons/star.svg';

const Review = ({ review }) => {
    const { _id, description, rating } = review;
    return (
        <div class="card lg:card-side bg-base-100 shadow-2xl rounded-sm">
            <div class="card-body px-5 py-6 lg:py-5">
                <div className='flex border-b-2 border-b-green-400 pb-5'>
                    <span className='mr-2 text-lg'> <span>Rating :</span> <span className='font-semibold'> {rating} </span></span>
                    <img className='w-4' src={star} alt="SVG" />
                </div>
                <p className=''><span className='text-zinc-600 text-md font-semibold'>{description}</span> </p>
            </div>
        </div>
    );
};

export default Review;
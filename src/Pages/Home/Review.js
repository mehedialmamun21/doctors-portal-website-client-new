import React from 'react';

const Review = ({ review }) => {
    const { _id, description, rating } = review;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl rounded-sm">
            <div class="card-body px-5 py-6 lg:py-5">
                <p> <b>Rating :</b> <span className='text-orange-600 font-bold text-md'>{rating} star</span></p>
                <p> <b className='text-secondary'>Review :</b> <span className='text-base-400 text-md font-semibold'>{description}</span> </p>
            </div>
        </div>
    );
};

export default Review;
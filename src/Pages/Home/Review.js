import React from 'react';

const Review = ({ review }) => {
    const { _id, description, rating } = review;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <div class="card-body">
                <p> <b>Rating :</b> <span className='text-warning font-bold text-md'>{rating} star</span></p>
                <p> <b>Review :</b> <span className='text-secondary text-md font-semibold'>{description}</span> </p>
            </div>
        </div>
    );
};

export default Review;
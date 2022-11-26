import React from 'react';
import { useForm } from 'react-hook-form';
const MyReview = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = "https://limitless-inlet-88208.herokuapp.com/review";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='addItem mx-5 lg:mx-40 mt-10 px-3 lg:px-24 py-2 lg:py-10 shadow-2xl'>
            <div className='py-10 bg-secondary px-2 lg:px-0'>
                <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered w-full max-w-xs my-2 shadow-lg' required placeholder="Give us Ratings (1-5)" type="number" {...register("rating")} />
                    <textarea className='input input-bordered w-full max-w-xs h-40 my-2 shadow-lg' required placeholder="Share your valuable feedback.." {...register("description")} />
                    <input className="btn w-2/5 hover:bg-orange-600 bg-orange-500 text-white font-semibold mt-5 border-none rounded-sm" type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;
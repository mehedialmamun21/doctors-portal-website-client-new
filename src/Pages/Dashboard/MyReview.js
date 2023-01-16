import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const MyReview = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = "http://localhost:5000/review";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })

            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added successfully');
                    reset();
                } else {
                    toast.error('Failed to add the Review');
                }
            })

    };


    return (
        <div className='addItem mr-5 mt-5 lg:mt-5 px-5 lg:px-44 py-5 lg:py-14 bg-slate-200'>
            <div className='py-10 px-5 lg:px-0 bg-slate-500'>
                <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered w-full max-w-xs my-2 rounded-sm shadow-lg font-mono' required placeholder="Your Name" type="text" {...register("name")} />
                    <input className='input input-bordered w-full max-w-xs my-2 rounded-sm shadow-lg font-mono' required placeholder="Give us Ratings  (1-5)" type="number" {...register("rating")} />
                    <textarea className='input input-bordered w-full max-w-xs h-40 my-2 rounded-sm shadow-lg font-mono' required placeholder="Share your valuable Feedback with us" {...register("description")} />
                    <input className="btn w-full max-w-xs bg-gradient-to-r from-secondary to-primary shadow-lg text-white font-semibold mt-5 border-none rounded-sm hover:scale-105 duration-300" type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;
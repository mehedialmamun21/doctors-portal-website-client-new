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
        <div className='addItem mt-20'>
            <h2 className='text-xl text-center text-white bg-violet-500 py-2 mb-5'><span className='py-1 px-7 font-mono'>Give a Review..</span></h2>
            <div className='py-10 px-5 lg:px-10 mx-64 bg-slate-200 border border-zinc-400'>
                <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input border border-zinc-400 w-full  my-2 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-mono' required placeholder="Your Name" type="text" {...register("name")} />
                    <input className='input border border-zinc-400 w-full  my-2 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-mono' required placeholder="Give us Ratings  (1-5)" type="number" {...register("rating")} />
                    <textarea className='input border border-zinc-400 w-full  h-40 my-2 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] font-mono' required placeholder="Share your valuable Feedback with us" {...register("description")} />
                    <input className="btn w-full  bg-gradient-to-r from-orange-500 to-sky-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-white font-semibold mt-5 border-none rounded-sm hover:scale-105 duration-300" type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;
import React from 'react';
import { useForm } from 'react-hook-form';
const MyReview = () => {

    const { register, handleSubmit } = useForm();

    return (
        <div className='addItem w-50 mx-auto mt-20'>
            <form className='flex flex-col items-center'>
                <input className='input input-bordered w-full max-w-xs my-2' required placeholder="Give us Ratings (1-5).." type="number" {...register("rating")} />
                <textarea className='input input-bordered w-full max-w-xs my-2' required placeholder="Share your valuable feedback.." {...register("description")} />
                <input className="btn w-full max-w-xs bg-slate-400 text-white font-bold mt-3" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default MyReview;
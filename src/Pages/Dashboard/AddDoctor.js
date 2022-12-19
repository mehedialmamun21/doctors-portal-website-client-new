import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()).then())

    const imageStorageKey = '41447f5ca3bd2f0fbc3fc9c2195a9bbc';


    /**
     * There are 3 ways to store images
     * 1. Third party storage // free open public storage is ok for practice project
     * 2. Your own storage in your own server (file system)
     * 3. Database : mongoDb
     * 
     * YUP : to validate file : Search : Yup file validation for react hook form
    */


    const onSubmit = async data => {
        // console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        room: data.room,
                        speciality: data.speciality,
                        time: data.time,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully');
                                reset();
                            } else {
                                toast.error('Failed to add the doctor');
                            }
                        })
                }
            })
    }

    // Loading part

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='flex justify-center my-5 lg:my-10 px-5 lg:px-0'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='px-10 lg:px-28 py-7 lg:py-14 shadow-2xl bg-zinc-500'>

                    <div className='px-10 lg:px-12 py-5 lg:py-5 bg-white lg:grid lg:grid-cols-2 lg:gap-12'>

                        <div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Doctor's Name"
                                    className="input input-bordered w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.name.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Speciality</span>
                                </label>
                                <select {...register('speciality')} class="select input-bordered w-full max-w-xs rounded-sm shadow-lg bg-slate-200">
                                    {
                                        services.map(service => <option
                                            key={service._id}
                                            value={service.name}
                                        >{service.name}</option>)
                                    }
                                </select>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="Doctor's Email"
                                    className="input input-bordered w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">

                                <label className="label">
                                    <span className="label-text font-semibold">Phone</span>
                                </label>
                                <input type="input" name='phone'
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone no. is required'
                                        },

                                    })}
                                />

                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.phone.message}</span>}
                                </label>

                            </div>
                        </div>


                        <div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Time</span>
                                </label>
                                <input type="text"
                                    placeholder="Time to see the patient"
                                    className="input input-bordered w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                                    {...register("time", {
                                        required: {
                                            value: true,
                                            message: 'Time is required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.time?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.time.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">Room</span>
                                </label>
                                <input type="input" name='room'
                                    placeholder="Room Number"
                                    className="input input-bordered w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                                    {...register("room", {
                                        required: {
                                            value: true,
                                            message: 'Room no. is required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.room?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.room.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold  mt-3">Photo</span>
                                </label>
                                <input type="file"
                                    className="input input-bordered w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.image.message}</span>}

                                </label>
                            </div>

                            <input className="btn w-full font-bold bg-gradient-to-r from-secondary to-primary shadow-lg text-white rounded-sm mt-3 mb-3 border-none hover:scale-105 duration-300" type="submit" value="Add Doctor" />

                        </div>

                    </div>

                </div>

            </form>

        </div>
    );
};

export default AddDoctor;
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
                        degree: data.degree,
                        description: data.description,
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
        <div className='flex justify-center py-5 lg:py-14 my-5 lg:mt-12 px-5 bg-slate-200'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='px-10 lg:px-20 py-5 lg:py-10 bg-cyan-700 lg:grid lg:grid-cols-2 lg:gap-12'>

                    <div>
                        <div className="form-control w-full max-w-xs">

                            <input type="text"
                                placeholder="Doctor's Name"
                                className="input input-bordered w-full max-w-xs rounded-sm shadow-lg font-mono"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.name.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs pb-4">

                            <select {...register('speciality')} class="select input-bordered w-full max-w-xs rounded-sm shadow-lg font-mono">
                                {
                                    services.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >{service.name}</option>)
                                }
                            </select>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="text"
                                placeholder="Doctor's Degree"
                                className="input input-bordered w-full max-w-xs rounded-sm shadow-lg font-mono"
                                {...register("degree", {
                                    required: {
                                        value: true,
                                        message: 'Degree required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.degree?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.degree.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input type="file"
                                className="input input-bordered w-full max-w-xs rounded-sm shadow-lg"
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


                        <div className="form-control w-full max-w-xs">

                            <input type="email"
                                placeholder="Doctor's Email"
                                className="input input-bordered w-full max-w-xs rounded-sm shadow-lg font-mono"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-mono">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <input type="input" name='phone'
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs rounded-sm shadow-lg font-mono"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone no. required'
                                    },

                                })}
                            />

                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.phone.message}</span>}
                            </label>

                        </div>

                    </div>






                    <div>

                        <div className="form-control w-full max-w-xs">

                            <input type="text"
                                placeholder="Time to see patients"
                                className="input input-bordered w-full max-w-xs rounded-sm shadow-lg font-mono"
                                {...register("time", {
                                    required: {
                                        value: true,
                                        message: 'Time required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.time?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.time.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <input type="input" name='room'
                                placeholder="Room Number"
                                className="input input-bordered w-full max-w-xs rounded-sm shadow-lg font-mono"
                                {...register("room", {
                                    required: {
                                        value: true,
                                        message: 'Room no. required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.room?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.room.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <textarea type="text"
                                placeholder="More about Doctor.."
                                className='input input-bordered w-full max-w-xs h-44 rounded-sm shadow-lg font-mono'
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.description.message}</span>}
                            </label>
                        </div>

                        <input className="btn w-full font-bold bg-gradient-to-r from-secondary to-primary  shadow-lg text-white rounded-sm border border-white hover:border-white hover:scale-105 duration-300" type="submit" value="Add Doctor" />

                    </div>

                </div>

            </form>

        </div>
    );
};

export default AddDoctor;
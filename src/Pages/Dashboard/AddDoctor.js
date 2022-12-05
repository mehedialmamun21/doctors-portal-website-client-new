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
                        speciality: data.speciality,
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
        <div className='flex justify-center my-10 px-5 lg:px-0'>
            {/* <h2 className="text-2xl">Add a new Doctor</h2> */}

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='px-5 lg:px-40 py-5 lg:py-10 shadow-2xl'>

                    <div className='px-5 lg:px-28 py-5 lg:py-5 bg-gray-400'>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Doctor's Name"
                                className="input input-bordered w-full max-w-xs rounded-sm bg-white"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Doctor's Email"
                                className="input input-bordered w-full max-w-xs rounded-sm bg-white"
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
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white font-semibold">Speciality</span>
                            </label>
                            <select {...register('speciality')} class="select input-bordered w-full max-w-xs rounded-sm bg-white">
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
                                <span className="label-text text-white font-semibold  mt-3">Photo</span>
                            </label>
                            <input type="file"
                                className="input input-bordered w-full max-w-xs rounded-sm bg-white"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                            </label>
                        </div>

                        <input className="btn w-full font-bold hover:bg-blue-600 bg-blue-500 text-white rounded-sm mt-3 border-none" type="submit" value="Add Doctor" />

                    </div>


                </div>

            </form>

        </div>
    );
};

export default AddDoctor;
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imageStorageKey = '6b9f9e01e3b7d924b2586c5f1e66c55b';

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

                // console.log(result);

                if (result.success) {
                    const imgURL = result.data.url;

                    const { name, price, category, offpercentage, image } = data;
                    const menu = { name, price: parseFloat(price), category, offpercentage, image: imgURL }

                    console.log(menu);

                    fetch('http://localhost:5000/menu', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(menu)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Item added successfully');
                                reset();
                            } else {
                                toast.error('Failed to add the Item');
                            }
                        })

                }

            })

    }

    return (
        <section className='mb-10'>

            <div>
                <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl'>Add an Item</h2>
            </div>

            <form className='w-full px-40' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Medicine Name*</span>
                    </label>
                    <input type="text"
                        placeholder="Medicine Name"
                        className="input w-full rounded-sm font-mono border border-zinc-500"
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

                <div className='flex'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} className="select select-none rounded-sm border border-zinc-500">
                            <option disabled selected>Pick one</option>
                            <option>dentcare</option>
                            <option>covid</option>
                            <option>device</option>
                            <option>herbalandhomeopathy</option>
                            <option>babyandmomcare</option>
                            <option>personalcare</option>
                            <option>supplementandvitamin</option>
                            <option>wcare</option>
                        </select>
                    </div>

                    <div className="form-control w-full ml-6">

                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>

                        <input type="input" name='Price*'
                            placeholder="price"
                            className="input w-full rounded-sm font-mono border border-zinc-500"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'items price required'
                                },

                            })}
                        />

                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.price.message}</span>}
                        </label>

                    </div>

                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Off Percentage*</span>
                    </label>
                    <input type="input"
                        placeholder="Off percentage"
                        className="input w-full rounded-sm font-mono border border-zinc-500"
                        {...register("offpercentage", {
                            required: {
                                value: true,
                                message: 'offpercentage required'
                            },

                        })}
                    />
                    <label className="label">
                        {errors.offpercentage?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.offpercentage.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </label>
                    <input type="file"
                        className="input w-full rounded-sm border border-zinc-500"
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

                <div className='flex justify-end'>
                    <input className='btn btn-md mt-2 px-10 rounded-sm text-white' type="submit" value="Add Item" />
                </div>

            </form>


        </section>
    );
};

export default AddItem;
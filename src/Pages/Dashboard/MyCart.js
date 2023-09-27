import React from 'react';
import useCart from '../../hooks/useCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { FaTrashAlt } from 'react-icons/fa';
import { HiArrowNarrowDown } from 'react-icons/hi';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart();
    // console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const [user] = useAuthState(auth);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })
    }

    return (
        <div className='mt-20'>
            <h2 className='text-xl text-center text-white bg-violet-500 py-2 mb-5'><span className='py-1 px-7 font-mono'>Your Cart </span></h2>

            <div className='flex gap-5 mb-20'>

                <div className='px-14 py-2'>

                    <div className='bg-gray-100 px-3 py-5 border border-zinc-400'>
                        <h2 className='text-zinc-800 pb-7'>Hello, <span className='text-violet-700'>{user?.email || ''}</span> </h2>
                        <h2 className='text-xl text-zinc-800 mb-6 font-mono font-semibold uppercase'><span className=''>Total Items = <span className=''>{cart?.length || 0}</span> </span></h2>
                        <h2 className='text-xl font-semibold text-zinc-800 font-mono border-t-gray-100 border-l-gray-100 border-r-gray-100 rounded-sm uppercase'><span className=''>Total Price = <span className=' bg-white px-3 py-2 border border-zinc-400'> {total} ৳ </span></span></h2>
                    </div>

                    <center>
                        <HiArrowNarrowDown size="1.5rem" className='mt-5' />
                    </center>

                    <center>
                        <div className='mt-5'>
                            <h2 className='uppercase font-semibold text-lg border border-b-zinc-500 pb-2 mx-16'>Make Payment Here</h2>
                            <button className="btn btn-success border border-zinc-600 hover:border-zinc-700 flex justify-end px-7 rounded-sm mt-5 text-white btn-sm text-md uppercase">Pay</button>
                        </div>
                    </center>

                </div>



                <div>

                    <div className="overflow-x-auto">
                        <table className="table w-full border-4">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Medicine</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr
                                        key={item._id}
                                    >
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td className='text-right'>{item.price} <span className='text-2xl'>৳</span></td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-white text-red-500 btn-lg rounded-sm"> <FaTrashAlt /> </button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyCart;
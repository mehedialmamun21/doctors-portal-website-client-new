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
            {/* <div className='flex justify-between bg-orange-300 py-10 px-20'>
                <div>
                    <div className='border border-zinc-500 bg-amber-50 px-7 py-4 ml-5 rounded-sm text-md font-mono'>
                        <h2 className='text-zinc-800 mb-1'> <span className=''>Name:</span> <span className='font-semibold'>{user?.displayName || ''}</span> </h2>
                        <h2 className='text-zinc-800'>Email: <span className='font-semibold'>{user?.email || ''}</span> </h2>
                    </div>
                    <div className='mt-10'>

                    </div>
                </div>

                <div className='bg-amber-50 px-16 py-5 border border-zinc-500 font-semibold'>
                    <h2 className='text-xl text-zinc-800 mb-6 font-mono'><span className=''>Quantity - <span className='border border-zinc-400 px-6 py-1'>{cart?.length || 0}</span> </span></h2>
                    <h2 className='text-xl text-zinc-800 mb-3 font-mono border border-b-black border-t-gray-100 border-l-gray-100 border-r-gray-100 pb-4 rounded-sm'><span className=''>Total Price = {total} ৳ </span></h2>
                    <button className="btn btn-success px-5 rounded-md ml-40 text-white btn-sm text-md uppercase">pay</button>
                </div>
            </div> */}

            <div className='flex gap-5 mb-20'>

                <div className='px-14 py-2'>

                    <div className='bg-gray-200 px-14 py-7 border border-zinc-500'>
                        <h2 className='text-zinc-800 pb-7'>Hello, <span className=''>{user?.email || ''}</span> </h2>
                        <h2 className='text-xl text-zinc-800 mb-6 font-mono font-semibold uppercase'><span className=''>Total Items - <span className=''>{cart?.length || 0}</span> </span></h2>
                        <h2 className='text-xl font-semibold text-zinc-800 font-mono border-t-gray-100 border-l-gray-100 border-r-gray-100 rounded-sm uppercase'><span className=''>Total Price = <span className=' bg-white px-3 py-2 border border-zinc-400'> {total} ৳ </span></span></h2>
                    </div>

                    <center>
                        <HiArrowNarrowDown size="1.5rem" className='mt-5' />
                    </center>

                    <center>
                        <div className='mt-5'>
                            <h2 className='uppercase font-semibold text-lg border border-b-black pb-2 mx-16'>Make Payment</h2>
                            <button className="btn btn-success flex justify-end px-7 rounded-sm mt-5 text-white btn-sm text-md uppercase">Pay</button>
                        </div>
                    </center>

                </div>



                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
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
                                        <td className='text-end'>{item.price} ৳</td>
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
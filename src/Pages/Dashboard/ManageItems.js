import React from 'react';
import useMenu from '../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageItems = () => {

    const [menu, , refetch] = useMenu();

    const handleDelete = item => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/menu/${item._id}`, {
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
        <section>

            <div>
                <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl'>Manage All Items</h2>
            </div>

            <div className='px-12 mb-5'>

                <div className="overflow-x-auto">

                    <table className="table w-full border-4">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Category</th>
                                <th>Price</th>
                                {/* <th>Update</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt='' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold"> {item.name} </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item.category}
                                    </td>

                                    <td className='text-right'>
                                        {item.price} <span className='text-2xl'>৳</span>
                                    </td>

                                    {/* <td>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </td> */}

                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-white text-red-500 btn-lg rounded-sm"> <FaTrashAlt /> </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </section>
    );
};

export default ManageItems;
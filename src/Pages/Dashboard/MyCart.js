import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const [user] = useAuthState(auth);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Calculate the initial total price from the items in the cart
        const initialTotalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price) * (item.quantity || 1), 0);
        setTotalPrice(initialTotalPrice);
    }, [cart]);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            // Update the total price by subtracting the removed item's price
                            setTotalPrice((prevTotalPrice) => prevTotalPrice - parseFloat(item.price) * (item.quantity || 1));
                            Swal.fire('Deleted!', 'The Item has been Deleted.', 'success');
                        }
                    });
            }
        });
    };

    const updateQuantity = (item, newQuantity) => {
        // Ensure the quantity does not go below 1
        if (newQuantity < 1) {
            newQuantity = 1;
        }

        fetch(`http://localhost:5000/carts/${item._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity: newQuantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.updatedItem) {
                    refetch();
                    // Update the total price when the quantity is changed
                    setTotalPrice((prevTotalPrice) => prevTotalPrice + (newQuantity - (item.quantity || 1)) * parseFloat(item.price));
                }
            });
    };

    const renderQuantityInput = (item) => {
        return (
            <div className="flex">
                <button
                    onClick={() => updateQuantity(item, item.quantity - 1)}
                    className="btn btn-ghost bg-white text-blue-500 btn-sm rounded-l-sm"
                >
                    <FaMinus />
                </button>
                <input
                    type="text"
                    value={item.quantity || 1} // Set the initial quantity to 1
                    onChange={(e) => updateQuantity(item, e.target.value)}
                    className="px-2 py-1 text-sm text-center border border-gray-300"
                />
                <button
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                    className="btn btn-ghost bg-white text-blue-500 btn-sm rounded-r-sm"
                >
                    <FaPlus />
                </button>
            </div>
        );
    };

    return (
        <div className="mt-20">
            <div className="">
                <h2 className="mt-24 mb-6 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-80 text-center uppercase text-2xl">
                    Your Cart
                </h2>
            </div>

            <h2 className="pb-5 font-mono text-center">
                <span className="text-blue-600">{user?.email || ''}</span>
            </h2>

            <div className="mb-20">
                <div className="px-5 py-2">
                    <div className="lg:flex gap-0 lg:gap-7 mx-0 lg:mx-40 justify-center bg-white border border-gray-300 rounded-sm">
                        <div className="my-6 ml-5 lg:ml-0">
                            <h2 className="text-lg text-zinc-800 mb-8 font-mono uppercase">
                                <span className="">
                                    Total Items = <span className="">{cart?.length || 0}</span>
                                </span>
                            </h2>
                            <h2 className="text-lg text-zinc-800 font-mono border-t-gray-100 border-l-gray-100 border-r-gray-100 rounded-sm uppercase">
                                <span className="">
                                    Total Price ={' '}
                                    <span className=" bg-white px-3 py-2 border border-zinc-400">
                                        <span>{totalPrice.toFixed(2)}</span> <span className="text-sm"> Tk </span>
                                    </span>
                                </span>
                            </h2>
                        </div>

                        <div>
                            <Link to="/dashboard/pay">
                                <span className="flex gap-7">
                                    <span className="mt-24"> </span>{' '}
                                    <button className="btn btn-sm bg-green-500 hover-bg-green-600 border-none mt-10 lg:mt-20 text-white px-6 font-semibold rounded-sm">Pay</button>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-5 lg:px-5">
                    <div className="overflow-x-auto">
                        <table className="table w-full border-4">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td className="text-left">
                                            {item.price} <span className="text-sm">Tk</span>
                                        </td>
                                        <td>{renderQuantityInput(item)}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-white text-red-500 btn-lg rounded-sm">
                                                <FaTrashAlt size="1rem" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;













// import React from 'react';
// import useCart from '../../hooks/useCart';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import { FaTrashAlt } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';

// const MyCart = () => {
//     const [cart, refetch] = useCart();

//     const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

//     const formattedTotal = total.toFixed(2);

//     const [user] = useAuthState(auth);

//     const handleDelete = item => {
//         Swal.fire({
//             title: 'Are you sure?',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/carts/${item._id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire(
//                                 'Deleted!',
//                                 'The Item has been Deleted.',
//                                 'success'
//                             )
//                         }

//                     })
//             }
//         })
//     }

//     return (
//         <div className='mt-20'>

//             <div className=''>
//                 <h2 className='mt-24 mb-6 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl'>Your Cart </h2>
//             </div>

//             <h2 className='pb-5 font-mono text-center'> <span className='text-blue-600'>{user?.email || ''}</span> </h2>

//             <div className='mb-20'>

//                 <div className='px-5 py-2'>

//                     <div className='flex gap-7 justify-center bg-white border border-gray-300 rounded-sm'>
//                         <div className='my-6'>
//                             <h2 className='text-lg text-zinc-800 mb-8 font-mono uppercase'><span className=''>Total Items = <span className=''>{cart?.length || 0}</span> </span></h2>
//                             <h2 className='text-lg text-zinc-800 font-mono border-t-gray-100 border-l-gray-100 border-r-gray-100 rounded-sm uppercase'>
//                                 <span className=''>Total Price = <span className=' bg-white px-3 py-2 border border-zinc-400'>
//                                     <span>{formattedTotal}</span> <span className='text-sm'> Tk </span>
//                                 </span>
//                                 </span>
//                             </h2>
//                         </div>

//                         <div>
//                             <Link to="/dashboard/pay">
//                                 <span className='flex gap-7'>
//                                     <span className='mt-24'>  </span> <button className='btn btn-sm bg-green-500 hover:bg-green-600 border-none mt-20 text-white px-6 font-semibold rounded-sm'>Pay</button>
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>


//                 </div>


//                 <div className='mt-5 px-5'>

//                     <div className="overflow-x-auto">
//                         <table className="table w-full border-4">

//                             <thead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Medicine</th>
//                                     <th>Name</th>
//                                     <th>Price</th>
//                                     <th>Delete</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     cart.map((item, index) => <tr
//                                         key={item._id}
//                                     >
//                                         <td>
//                                             {index + 1}
//                                         </td>
//                                         <td>

//                                             <div className="avatar">
//                                                 <div className="mask mask-squircle w-12 h-12">
//                                                     <img src={item.image} alt="Avatar Tailwind CSS Component" />
//                                                 </div>
//                                             </div>

//                                         </td>
//                                         <td>
//                                             {item.name}
//                                         </td>
//                                         <td className='text-left'> {item.price} <span className='text-sm'>Tk</span> </td>
//                                         <td>
//                                             <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-white text-red-500 btn-lg rounded-sm"> <FaTrashAlt size="1rem" /> </button>
//                                         </td>
//                                     </tr>)
//                                 }

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default MyCart;










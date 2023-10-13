import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useCart from '../../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';

const MediCard = ({ item }) => {
    const { name, image, price, offpercentage, _id } = item;

    const [user] = useAuthState(auth);

    const [, refetch] = useCart();

    const navigate = useNavigate();

    const handleAddToCart = item => {
        // console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    return (

        <div className=''>
            <div className="card w-96 mx-auto rounded-sm">

                <figure><img src={image} alt="img" className="hover:scale-x-125 hover:scale-y-125 duration-700 cursor-pointer" style={{ height: "170px" }} /></figure>

                <p className='font-semibold px-2 rounded-sm py-0 mr-10 mt-4 absolute right-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-white'> {offpercentage}% off</p>

                <center>
                    <div className="card-body" style={{ width: "270px" }}>

                        <h2 className="card-title mx-auto text-sm">{name}</h2>

                        <center><p className='text-red-500 font-semibold'><span className='text-2xl'>৳</span> {price}</p></center>

                        <div className="card-actions mx-auto">

                            <button
                                onClick={() => handleAddToCart(item)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-sm shadow-md flex items-center justify-center space-x-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-cart"
                                    viewBox="0 0 16 16"
                                >
                                    {/* <path
                                        fillRule="evenodd"
                                        d="M3 1a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-7.89l-.036.132-.558 2.242-1.689 6.04a1.5 1.5 0 0 1 1.464-1.864h9.764a1.5 1.5 0 0 1 1.463 1.864l-2.42 8.72a2 2 0 0 1-1.962 1.558H4a2 2 0 0 1-1.962-1.558l-2.42-8.72a1.5 1.5 0 0 1 1.463-1.864h1.723l.677-2.708a.5.5 0 0 1 .487-.392h8a.5.5 0 0 1 0 1h-7.89l-.036.132-.558 2.242-1.195 4.38-1.199-4.38L3.036 3.132 3 3H3a.5.5 0 0 1-.5-.5z"
                                    /> */}

                                    <FaShoppingCart size="1rem" className="text-white" />

                                </svg>
                                <span>Add to Cart</span>
                            </button>

                        </div>

                    </div>
                </center>

            </div>
        </div>

    );
};

export default MediCard;
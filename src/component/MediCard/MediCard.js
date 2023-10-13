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

                <p className='px-2 rounded-sm py-0 mr-14 mt-4 absolute right-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-white'> <span className='text-md'>{offpercentage}%</span> <span className='text-sm'>off</span></p>

                <center>
                    <div className="card-body" style={{ width: "270px" }}>

                        <h2 className="card-title mx-auto text-sm">{name}</h2>

                        <center><p className='text-red-500 font-semibold'> <span className='text-lg'>{price}</span> <span className='text-sm'>Tk</span> </p></center>

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
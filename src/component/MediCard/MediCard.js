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

        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto rounded-sm border border-zinc-400">
                <figure><img src={image} alt="Shoes" className="hover:scale-x-125 hover:scale-y-125 duration-700 cursor-pointer" /></figure>
                <p className='bg-slate-900 text-white px-7 py-1 mr-5 mt-4 absolute right-0'> <span className='text-2xl'>৳</span> {price}</p>
                <div className="card-body">
                    <h2 className="card-title mx-auto mt-7 text-lg">{name}</h2>
                    <center><p className='text-orange-600 font-semibold'>{offpercentage}</p></center>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-black text-white bg-orange-500 hover:bg-orange-400 border-none rounded-sm px-10 mx-auto text-md"><FaShoppingCart size="1.2rem" className="mr-2 text-white" />Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MediCard;
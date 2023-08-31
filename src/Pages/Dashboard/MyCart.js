import React from 'react';
import useCart from '../../hooks/useCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyCart = () => {
    const [cart] = useCart();
    const [user] = useAuthState(auth);

    return (
        <div className='mt-20'>
            <h2 className='text-xl text-center text-white bg-violet-500 py-2 mb-5'><span className='py-1 px-7 font-mono'>Your Cart </span></h2>
            <div className='flex justify-between bg-orange-300 py-10 px-20'>
                <div>
                    <div className='border border-zinc-500 bg-amber-50 px-7 py-4 ml-5 rounded-sm text-md font-mono'>
                        <h2 className='text-zinc-800 mb-1'> <span className=''>Name:</span> <span className='font-semibold'>{user?.displayName || ''}</span> </h2>
                        <h2 className='text-zinc-800'>Email: <span className='font-semibold'>{user?.email || ''}</span> </h2>
                    </div>
                    <div className='mt-10'>

                    </div>
                </div>

                <div className='bg-amber-50 px-16 py-5 border border-zinc-500'>
                    <h2 className='text-xl text-zinc-800 mb-6 font-mono'><span className=''>Quantity - <span className='border border-zinc-400 px-6 py-1'>{cart?.length || 0}</span> </span></h2>
                    <h2 className='text-xl text-zinc-800 mb-3 font-mono border border-b-black border-t-gray-100 border-l-gray-100 border-r-gray-100 pb-4 rounded-sm'><span className=''>Cost = </span></h2>
                    <p className='text-xl text-zinc-800 '>Your Total = ... /tk.</p>
                </div>
            </div>

            <div className='mt-6'>
                <p className='text-center text-2xl font-semibold uppercase border border-b-black border-l-gray-100 border-r-gray-100 border-t-gray-100 pb-3 mx-96'>Payment</p>
            </div>
        </div>
    );
};

export default MyCart;
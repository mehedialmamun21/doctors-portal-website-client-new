import React, { useEffect, useState } from 'react';
import Checkout from './Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe('pk_test_51O09MYK5hmfQM0j4piaYeKG5fZP2tgDHHB1Eyeh1tY5yxXfFjH08P3RyKdVpuhcSvVtTHdePwjX0U2ALTVRDJEoy00ZuyBtDdO');

const Pay = () => {
    const [cart, refetch] = useCart();
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => sum + parseFloat(item.price) * (item.quantity || 1), 0);
        setTotalPrice(newTotal);
    }, [cart]);

    return (
        <section className="">
            <div className="">
                <h2 className="mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl">Make Payment</h2>
                <p className="text-center font-semibold">Total Price = <span className="text-lg">{totalPrice.toFixed(2)}</span> Tk</p>
                <Elements stripe={stripePromise}>
                    <Checkout price={totalPrice.toFixed(2)} />
                </Elements>
            </div>
        </section>
    );
};

export default Pay;










// import React from 'react';
// import Checkout from './Checkout';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import useCart from "../../../hooks/useCart";

// //TODO: provide publishable key
// const stripePromise = loadStripe('pk_test_51O09MYK5hmfQM0j4piaYeKG5fZP2tgDHHB1Eyeh1tY5yxXfFjH08P3RyKdVpuhcSvVtTHdePwjX0U2ALTVRDJEoy00ZuyBtDdO');

// const Pay = () => {
//     const [cart] = useCart();
//     const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
//     const price = total.toFixed(2);

//     return (
//         <section className=''>
//             <div className=''>
//                 <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl'>Make Payment</h2>
//                 <p className='text-center font-semibold'>Total Price = <span className='text-lg'>{price}</span> Tk </p>
//                 <Elements stripe={stripePromise}>
//                     <Checkout price={price}></Checkout>
//                 </Elements>

//             </div>
//         </section>
//     );
// };

// export default Pay;
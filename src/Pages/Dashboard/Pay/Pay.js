import React from 'react';
import Checkout from './Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from "../../../hooks/useCart";

//TODO: provide publishable key
const stripePromise = loadStripe('pk_test_51O09MYK5hmfQM0j4piaYeKG5fZP2tgDHHB1Eyeh1tY5yxXfFjH08P3RyKdVpuhcSvVtTHdePwjX0U2ALTVRDJEoy00ZuyBtDdO');

const Pay = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <section className=''>
            <div className=''>
                <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl'>Make Payment</h2>

                <Elements stripe={stripePromise}>
                    <Checkout price={price}></Checkout>
                </Elements>

            </div>
        </section>
    );
};

export default Pay;
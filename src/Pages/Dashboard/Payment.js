import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L20brEYN1PQtsDgmqgUzgf7ieLpNAA76EfLMvb437jRE2IK59Zbdo70Skmb6SwkUFYlWj8q2OiuBKVHs281bVz000JAcg9aVz');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // loading portion

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-20'>

            <div>
                <h2 className='mt-24 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl'>Make Payment</h2>
            </div>

            <div>
                <p className='font-mono flex justify-center items-center mt-5'>Hi,<span className="pl-2">{appointment.patientName}</span></p>
            </div>

            <div>

                <div className='w-50 max-w-xl mt-5 px-5 lg:ml-48'>

                    <div class="card bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-5 rounded-sm">
                        <div class="card-body">

                            <p> <span className='font-mono'>Pay for:</span> <span className='text-blue-600 font-semibold'>{appointment.treatment}</span> </p>
                            <p> <span className='font-mono'>Appointment:</span> <span className='text-black'>{appointment.date}</span> <br /> <span className='text-black pl-28'>{appointment.slot}</span> </p>
                            <br />
                            <p> <span className='font-mono'>Please pay:</span> <span className='font-semibold border rounded-sm border-slate-600 px-3 py-1'> <span className='text-black'>{appointment.price} Tk</span> </span></p>
                        </div>
                    </div>

                    <div class="card flex-shrink-0 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-8 rounded-sm">
                        <div class="card-body py-5">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointment={appointment} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Payment;
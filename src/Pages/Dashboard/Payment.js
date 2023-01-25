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
        <div className='px-5 lg:pt-24 lg:pb-10 lg:pl-80 lg:pr-24'>

            <div className='w-50 max-w-xl'>
                <div class="card bg-slate-100 mb-12 rounded-sm border border-slate-400">
                    <div class="card-body">
                        <p className='pb-3 font-mono'>Hello, <span className="font-semibold">{appointment.patientName}</span></p>
                        {/* <p class="card-title"> <span className='text-lg'>Pay for :</span> <span className='text-secondary'>{appointment.treatment}</span> </p> */}
                        <p> <span className='font-mono'>Pay for :</span> <span className='text-cyan-500 text-lg font-semibold'>{appointment.treatment}</span> </p>
                        <p> <span className='font-mono'>Appointment :</span> <span className='text-orange-600 font-semibold'>{appointment.date}</span> at <span className='text-cyan-500 font-semibold'>{appointment.slot}</span> </p>
                        <br />
                        <p> <span className='font-mono'>Please pay :</span> <span className='font-semibold border rounded-sm border-zinc-500 px-3 py-1'>{appointment.price} Tk</span></p>
                    </div>
                </div>

                <div class="card flex-shrink-0 bg-base-100 rounded-sm border-2 border-zinc-500">
                    <div class="card-body py-8">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm appointment={appointment} />
                        </Elements>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;
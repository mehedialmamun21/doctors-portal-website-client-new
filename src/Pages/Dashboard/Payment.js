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
        <div className='px-5 my-5 py-20 lg:px-24'>

            <div className='w-50 max-w-xl'>
                <div class="card bg-slate-100 mb-12 rounded-sm border-2 border-dashed border-zinc-400">
                    <div class="card-body">
                        <p className='pb-3'>Hello, <span className="font-semibold">{appointment.patientName}</span></p>
                        {/* <p class="card-title"> <span className='text-lg'>Pay for :</span> <span className='text-secondary'>{appointment.treatment}</span> </p> */}
                        <p> <span className=''>Pay for :</span> <span className='text-secondary font-bold'>{appointment.treatment}</span> </p>
                        <p> <span className=''>Appointment :</span> <span className='text-orange-700 font-semibold'>{appointment.date}</span> at <span className='text-blue-500 font-semibold'>{appointment.slot}</span> </p>
                        <br />
                        <p> <span className=''>Please pay :</span> <span className='font-semibold border-2 border-zinc-400 px-3 py-1'>{appointment.price} Tk</span></p>
                    </div>
                </div>

                <div class="card flex-shrink-0 bg-base-100 rounded-sm border-2 border-zinc-600">
                    <div class="card-body py-10">
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
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
        <div className='px-5 lg:px-40'>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 rounded-sm">
                <div class="card-body py-10">
                    <p>Hello, <span className="text-blue-500">{appointment.patientName}</span></p>
                    {/* <p class="card-title"> <span className='text-lg'>Pay for :</span> <span className='text-secondary'>{appointment.treatment}</span> </p> */}
                    <p> <span className=''>Pay for :</span> <span className='text-secondary font-semibold'>{appointment.treatment}</span> </p>
                    <p> <span className=''>Appointment :</span> <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <br />
                    <p> <span className=''>Please pay :</span> <span className='font-semibold border-2 border-zinc-400 px-3 py-1'>{appointment.price} Tk</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-xl bg-base-100 rounded-sm">
                <div class="card-body py-10">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { BiDownArrow } from 'react-icons/bi';
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
        <div className='px-5 lg:pt-12 lg:pb-10 lg:pl-48 lg:pr-24'>

            <div className='w-50 max-w-xl'>

                <div class="card bg-base-200 mb-5 rounded-sm">
                    <div class="card-body">
                        <p className='font-mono'>Hello, <span className="text-black">{appointment.patientName}</span></p>
                        {/* <p class="card-title"> <span className='text-lg'>Pay for :</span> <span className='text-secondary'>{appointment.treatment}</span> </p> */}
                        <p> <span className='font-mono'>Pay for:</span> <span className='text-green-600 text-lg font-semibold'>{appointment.treatment}</span> </p>
                        <p> <span className='font-mono'>Appointment:</span> <span className='text-black font-semibold'>{appointment.date}</span> <br /> <span className='text-black font-semibold pl-28'>{appointment.slot}</span> </p>
                        <br />
                        <p> <span className='font-mono'>Please pay:</span> <span className='font-semibold border rounded-sm border-slate-600 px-3 py-2'> <span className='text-black'>{appointment.price} Tk</span> </span></p>
                    </div>
                </div>

                <center><BiDownArrow className='text-green-600 text-2xl' /></center>

                <div class="card flex-shrink-0 bg-base-200 mt-4 rounded-sm">
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
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { BsArrow90DegDown } from 'react-icons/bs';

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
        <div className='px-5 lg:pt-12 lg:pb-10 lg:pl-28 lg:pr-24'>

            <div className='w-50 max-w-xl'>

                <div class="card bg-white mb-5 rounded-sm">
                    <div class="card-body">
                        <p className='font-mono'>Hello, <span className="text-black">{appointment.patientName}</span></p>
                        {/* <p class="card-title"> <span className='text-lg'>Pay for :</span> <span className='text-secondary'>{appointment.treatment}</span> </p> */}
                        <p> <span className='font-mono'>Pay for:</span> <span className='text-cyan-600 font-semibold'>{appointment.treatment}</span> </p>
                        <p> <span className='font-mono'>Appointment:</span> <span className='text-black'>{appointment.date}</span> <br /> <span className='text-black pl-28'>{appointment.slot}</span> </p>
                        <br />
                        <p> <span className='font-mono'>Please pay:</span> <span className='font-semibold border rounded-sm border-slate-600 px-3 py-1'> <span className='text-black'>{appointment.price} Tk</span> </span></p>
                    </div>
                </div>

                <center><BsArrow90DegDown size="1.7rem" className='text-slate-500 text-2xl' /></center>

                <div class="card flex-shrink-0 bg-white mt-4 rounded-sm">
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
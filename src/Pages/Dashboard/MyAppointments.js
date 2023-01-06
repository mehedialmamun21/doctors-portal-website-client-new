import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);

                });
        }
    }, [user])

    return (
        <div className='pr-5'>
            <h2 className='my-5 text-xl text-center text-white bg-orange-400 p-2'><span className='border py-1 px-5'>Total Appointment - {appointments.length}</span></h2>

            <div class="overflow-x-auto">
                <table class="table w-full border-4">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td className='text-zinc-600'>{a.patientName}</td>
                                <td className='text-zinc-600'>{a.date}</td>
                                <td className='text-zinc-600'>{a.slot}</td>
                                <td className='text-zinc-600'>{a.treatment}</td>
                                <td className='text-zinc-600'>{a.phone}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-sm bg-green-500 hover:bg-green-600 border-none text-white px-5 font-semibold text-sm rounded-sm'>Pay</button> </Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-green-600 font-semibold text-lg'>Paid</span></p>
                                        <p ><span className='font-bold text-sm text-zinc-600 '>Trans. ID : </span><span className='text-zinc-600 text-sm'>{a.transactionId}</span> </p>
                                    </div>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointments;
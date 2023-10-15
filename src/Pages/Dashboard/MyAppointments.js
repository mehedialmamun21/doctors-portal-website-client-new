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
    }, [user, navigate])

    return (
        <div className='mt-20'>

            <div>
                <h2 className='mt-24 mb-5 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-80 text-center uppercase text-2xl'>Total Appointments - {appointments.length}</h2>
            </div>

            <div className='flex justify-center'>
                <p className='py-1 font-mono'> <span className='text-blue-500'>{user?.email}</span> </p>
            </div>

            <div class="overflow-x-auto my-5">
                <table class="table w-full border-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Name</th> */}
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
                                {/* <td className='font-semibold font-mono'>{a.patientName}</td> */}
                                <td className=' font-mono'>{a.date}</td>
                                <td className=' font-mono'>{a.slot}</td>
                                <td className=' font-mono'>{a.treatment}</td>
                                <td className=' font-mono'>{a.phone}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-sm bg-green-500 hover:bg-green-600 border-none text-white px-10 font-semibold rounded-sm'>Pay</button> </Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-green-500 font-semibold text-lg font-mono'>Paid</span></p>
                                        <p ><span className='text-sm text-zinc-600 font-mono font-semibold'>Transaction ID: </span> <br /> <span className='text-zinc-600 text-sm font-mono'>{a.transactionId}</span> </p>
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
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
        <div className='mt-20'>

            <h2 className='text-xl text-center text-white bg-violet-500 py-2 mt-12 mb-5'><span className='py-1 px-7 font-mono'>Total Appointments - {appointments.length}</span></h2>

            <div class="overflow-x-auto">
                <table class="table w-full border-4">
                    <thead>
                        <tr>
                            <th>#</th>
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
                                <td className='font-semibold font-mono'>{a.patientName}</td>
                                <td className='font-semibold font-mono'>{a.date}</td>
                                <td className='font-semibold font-mono'>{a.slot}</td>
                                <td className='font-semibold font-mono'>{a.treatment}</td>
                                <td className='font-semibold font-mono'>{a.phone}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-sm bg-green-500 hover:bg-green-600 border-none text-white px-10 font-semibold rounded-sm'>Pay</button> </Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-green-600 font-semibold text-lg font-mono'>Paid</span></p>
                                        <p ><span className='font-bold text-sm text-zinc-600 font-mono'>Trans. ID : </span><span className='text-zinc-600 text-sm font-mono'>{a.transactionId}</span> </p>
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
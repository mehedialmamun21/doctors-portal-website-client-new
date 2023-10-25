
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleDeleteAppointment = (id, date, treatment) => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        // Remove the deleted appointment from the state
                        setAppointments(appointments.filter(appointment => appointment._id !== id));

                        // Show a SweetAlert success message
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: `Your appointment has been deleted.`,
                        });
                    } else if (res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                })
                .catch((error) => {
                    console.error('Error deleting appointment:', error);
                    // Handle the error, e.g., display an error message to the user.
                });
        }
    };

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => {
                    setAppointments(data);
                });
        }
    }, [user, navigate]);

    return (
        <div className='mt-20'>
            <div>
                <h2 className='mt-24 mb-5 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-80 text-center uppercase text-2xl'>Total Appointments - {appointments.length}</h2>
            </div>
            <div className='flex justify-center'>
                <p className='py-1 font-mono'> <span className='text-blue-600'>{user?.email}</span> </p>
            </div>
            <div className="overflow-x-auto my-5">
                <table className="table w-full border-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Name</th> */}
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            {/* <th>Phone</th> */}
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((a, index) => (
                            <tr key={a._id}>
                                <th>{index + 1}</th>
                                {/* <td className='font-semibold font-mono'>{a.patientName}</td> */}
                                <td className='font-mono'>{a.date}</td>
                                <td className='font-mono'>{a.slot}</td>
                                <td className='font-mono'>{a.treatment}</td>
                                {/* <td className='font-mono'>{a.phone}</td> */}
                                <td>
                                    {(a.price && !a.paid) && (
                                        <Link to={`/dashboard/payment/${a._id}`}>
                                            <button className='btn btn-sm bg-green-500 hover:bg-green-600 border-none text-white px-4 lg:px-6 font-semibold rounded-sm'>Pay</button>
                                        </Link>
                                    )}
                                    {(a.price && a.paid) && (
                                        <div>
                                            <p><span className='text-green-500 font-semibold text-lg font-mono'>Paid</span></p>
                                            <p><span className='text-sm text-zinc-600 font-mono font-semibold'>Transaction ID: </span> <br /> <span className='text-zinc-600 text-sm font-mono'>{a.transactionId}</span> </p>
                                        </div>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteAppointment(a._id, a.patientName, a.date, a.treatment)}
                                        className='btn btn-ghost bg-white text-red-500 btn-lg rounded-sm'
                                    >
                                        <FaTrashAlt size="1rem" />
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;
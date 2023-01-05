import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Footer from '../Shared/Footer';
import { FaRegCaretSquareRight } from 'react-icons/fa';

import Modal from "./Modal";

const Doctors = () => {

    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)


    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    const clicked = () => {
        setModalOn(true)
    }


    return (
        <section>

            <div class="overflow-x-auto pt-5">

                <table class="table w-full border-4">

                    <thead>
                        <tr>
                            <th>Doctor Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Time</th>
                            <th>Room</th>
                            <th>Email</th>
                            <th>Phone</th>
                            {/* <th>Id</th> */}
                        </tr>
                    </thead>

                    <tbody>

                        {
                            doctors.map((doctor) =>
                                <tr>
                                    <td>
                                        <div class="avatar">
                                            <div class="w-14 rounded-sm">
                                                <img src={doctor.img} alt={doctor.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-cyan-600 font-semibold'>{doctor.name}</td>
                                    <td className='text-zinc-700 font-semibold'>{doctor.speciality}</td>
                                    <td className='text-cyan-600 font-semibold'>{doctor.time}</td>
                                    <td className='text-zinc-700 font-semibold'>{doctor.room}</td>
                                    <td className='text-cyan-600 font-semibold'>{doctor.email}</td>
                                    <td className='text-zinc-700 font-semibold'>{doctor.phone}</td>
                                    {/* <td className='text-zinc-700'>{doctor._id}</td> */}
                                </tr>
                            )
                        }

                    </tbody>
                </table>

                {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

            </div>

            <div className='flex justify-end items-end pt-5 pb-28'>
                <span className='text-blue-400 py-2'>
                    <FaRegCaretSquareRight size="30px" className='text-secondary' />
                </span>
                <div className='pl-5 py-2'>
                    <button onClick={clicked} className='bg-gradient-to-r from-secondary to-primary text-white text-lg font-semibold px-16 py-2 rounded-sm hover:scale-105 duration-300'>Doctor Entry</button>
                </div>
            </div>

            <Footer></Footer>

        </section>

    );
};

export default Doctors;
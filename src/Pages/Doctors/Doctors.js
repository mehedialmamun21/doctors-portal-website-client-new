import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Footer from '../Shared/Footer';

import Modal from "./Modal";
import { useNavigate } from 'react-router-dom';

const Doctors = () => {

    const navigate = useNavigate();

    const navigateToDoctorDetail = id => {
        navigate(`/doctor/${id}`);
    }


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

            <div class="overflow-x-auto py-5">

                <table class="table w-full border-4">

                    <thead>
                        <tr>
                            <th>Doctor Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Email</th>
                            {/* <th>Id</th> */}
                            <th>Doctor Entry</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            doctors.map((doctor) =>
                                <tr>
                                    <td>
                                        <div class="avatar">
                                            <div class="w-16 rounded-2xl">
                                                <img src={doctor.img} alt={doctor.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-bold text-zinc-700'>{doctor.name}</td>
                                    <td className='text-zinc-700 font-semibold'>{doctor.speciality}</td>
                                    <td className='text-zinc-700 font-semibold'>{doctor.email}</td>
                                    {/* <td className='text-zinc-600'>{doctor._id}</td> */}
                                    {/* <td><button onClick={clicked} className='bg-gradient-to-r from-secondary to-primary text-white font-semibold px-6 py-1 rounded-sm hover:scale-105 duration-300'>Enter</button></td> */}
                                    <td><button className='bg-gradient-to-r from-secondary to-primary text-white font-semibold px-6 py-1 rounded-sm hover:scale-105 duration-300' onClick={() => navigateToDoctorDetail(doctor._id)}>Enter</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

                {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

            </div>

            <Footer></Footer>

        </section>

    );
};

export default Doctors;
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Footer from '../Shared/Footer';
import { FaRegCaretSquareRight } from 'react-icons/fa';

import Modal from "./Modal";
import DoctorsTable from './DoctorsTable';

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
        <section className='h-screen'>

            <div className='px-40'>
                <div class="overflow-x-auto pt-12">

                    <table class="table w-full border-4">

                        <thead>
                            <tr>
                                <th>Index</th>
                                {/* <th>Doctor Image</th> */}
                                <th>Name</th>
                                <th>Degree</th>
                                <th>Speciality</th>
                                <th>Time</th>
                                {/* <th>Room</th> */}
                                <th>Email</th>
                                <th>Phone</th>
                                {/* <th>Id</th> */}
                            </tr>
                        </thead>

                        <tbody>

                            {
                                doctors.map((doctor, index) => <DoctorsTable
                                    key={doctor._id}
                                    doctor={doctor}
                                    index={index}
                                ></DoctorsTable>)
                            }

                        </tbody>
                    </table>

                    {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

                </div>

                <div className='flex justify-end items-end pt-2 pb-28 px-5'>
                    <span className='pb-9 flex justify-center items-center'>
                        <FaRegCaretSquareRight size="30px" className='text-white' />
                    </span>
                    <div className='pl-5 py-7'>
                        <button onClick={clicked} className='bg-gradient-to-r from-secondary to-primary text-white text-lg font-semibold px-16 py-2 rounded-sm hover:scale-105 duration-300 border border-white hover:border-white'>Doctor's Entry</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </section>

    );
};

export default Doctors;
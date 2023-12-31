import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
// import { BiDownArrow } from 'react-icons/bi';

// import Footer from '../Shared/Footer'

const DrDetails = () => {

    const { doctorId } = useParams();

    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/doctor/${doctorId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [doctor, doctorId]);


    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='lg:h-screen'>

                <div className='px-5 lg:px-72 pt-28 mb-20 lg:mb-0'>
                    <div className='text-center mb-7'>
                        <div>
                            <p className='text-xl lg:text-2xl font-semibold mb-3 uppercase'>Details About</p>
                            <p className='font-semibold text-sky-500 text-md'> <span className='rounded-lg lg:rounded-lg'>{doctor.name}</span> </p>
                        </div>
                    </div>
                    <div className=''>

                        <div className='text-center'>

                            <div className='flex justify-center items-center lg:bg-white lg:border lg:border-zinc-400 lg:rounded-sm lg:py-0 px-0 mx-5 lg:mx-40'>
                                <div className='hidden lg:block'>
                                    <center><img className='rounded py-5' src={doctor.img} style={{ width: 170, height: 170 }} alt="" /></center>
                                </div>
                                <div className='lg:pl-40'>
                                    <div className='py-2 lg:py-3 bg-white border border-gray-400 rounded-sm px-2 lg:px-5'>
                                        <div className='lg:pt-2'>
                                            <p className='font-mono text-left text-slate-600'> Time: {doctor.time}</p>
                                            <p className='font-mono text-left text-slate-600'> Room: {doctor.room}</p>
                                            <p className='font-mono text-left text-slate-600'> Phone: {doctor.phone}</p>
                                            {/* <p className='font-mono text-left text-slate-600'> Email: {doctor.email}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-5 mt-5 lg:mt-5 px-10 border border-zinc-400 rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white'>
                        <div className='pt-5 pb-5'>
                            <p className='font-mono text-sky-500 mb-3 lg:mb-4'>{doctor.degree} </p>
                            <p className='font-semibold text-sm'> <span className='border border-zinc-600 rounded-sm px-3 py-1'> {doctor.speciality} </span> </p>
                            {/* <p className='text-sky-500 font-mono'> {doctor.name} </p> */}
                        </div>

                        <div className=''>
                            <p className='font-mono text-sm text-zinc-800'>{doctor.description}</p>
                        </div>
                        {/* <div className='flex justify-end items-end pt-7'>
                            <button className="btn btn-ghost bg-gradient-to-r from-secondary to-primary text-white px-2 lg:px-16 hover:scale-105 duration-300 rounded-sm font-mono text-lg">Previous..</button>
                        </div> */}
                    </div>
                </div>

            </div>

            {/* <Footer /> */}

        </div>
    );
};

export default DrDetails;
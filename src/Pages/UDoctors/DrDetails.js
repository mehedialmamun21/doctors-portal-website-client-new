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
                    <div className='text-center mb-10'>
                        <h2> <span className='text-2xl'>Details About</span> <br /> <span className='font-semibold text-sky-500'>{doctor.name}</span></h2>
                    </div>
                    <div className='border border-zinc-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>

                        <div className='text-center'>

                            <div className='flex justify-center items-center'>
                                <div className='hidden lg:block'>
                                    <center><img className='rounded py-5' src={doctor.img} style={{ width: 170, height: 170 }} alt="" /></center>
                                </div>
                                <div className='lg:pl-40'>
                                    <div className='py-5 bg-white border border-gray-400 rounded-sm px-8 lg:px-10'>
                                        <div className='pt-2'>
                                            <p className='font-mono text-slate-600'> Time: {doctor.time}</p>
                                            <p className='font-mono text-left text-slate-600'> Room: {doctor.room}</p>
                                            <p className='font-mono text-left text-slate-600'> Phone: {doctor.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-5 mt-5 lg:mt-10 px-10 border border-zinc-400 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white'>
                        <div className='pt-5 pb-5'>
                            <p className='font-mono text-slate-700'>{doctor.degree} <span className='pl-2'>({doctor.speciality})</span> </p>
                            <p className='text-sky-500 font-mono'> {doctor.name} </p>
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
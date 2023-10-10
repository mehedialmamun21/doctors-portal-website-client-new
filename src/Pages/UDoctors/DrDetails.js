import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';

import Footer from '../Shared/Footer'

const DrDetails = () => {

    const { doctorId } = useParams();

    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/doctor/${doctorId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [doctor, doctorId]);

    return (
        <div>
            <div className='h-screen'>

                <div className='px-72 pt-28'>
                    <div className='border border-zinc-400 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
                        <div className='text-center'>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <center><img className='rounded py-5' src={doctor.img} style={{ width: 200, height: 200 }} alt="" /></center>
                                </div>
                                <div className='pl-40'>
                                    <div className='pt-5 pb-5 bg-white border border-zinc-400 rounded-sm px-10 py-3'>
                                        <p className='font-mono font-semibold text-lg text-orange-600 pb-2'>{doctor.speciality}</p>
                                        <center><BiDownArrow className='text-zinc-700 font-bold text-xl' /></center>
                                        <div className='pt-2'>
                                            <p className='font-mono text-md text-slate-600'> Time: {doctor.time}</p>
                                            <p className='font-mono text-md text-slate-600'> Room: {doctor.room}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-5 mt-10 px-10 border border-zinc-400 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white'>
                        <div className='pt-5 pb-5'>
                            <p className='font-mono text-lg text-slate-700'>{doctor.degree}</p>
                            <p className='text-green-500 text-xl font-bold font-mono'> {doctor.name} </p>
                        </div>

                        <div className=''>
                            <p className='font-sarif text-zinc-800'>{doctor.description}</p>
                        </div>
                        {/* <div className='flex justify-end items-end pt-7'>
                        <button className="btn btn-ghost bg-gradient-to-r from-secondary to-primary text-white px-2 lg:px-16 hover:scale-105 duration-300 rounded-sm font-mono text-lg">Previous..</button>
                    </div> */}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default DrDetails;
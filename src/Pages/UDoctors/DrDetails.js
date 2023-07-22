import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';

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
        <div className='h-screen'>

            <div className='px-60 pt-16'>
                <div>
                    <div className='text-center'>
                        <div className='flex justify-center items-center'>
                            <div>
                                <center><img className='rounded' src={doctor.img} style={{ width: 250, height: 200 }} alt="" /></center>
                                <div className='pt-5 pb-5'>
                                    <p className='font-mono text-lg text-slate-600'>{doctor.degree}</p>
                                    <p className='text-slate-600 text-xl font-bold font-mono'> {doctor.name} </p>

                                </div>
                            </div>
                            <div className='pl-40'>
                                <div className='pt-5 pb-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl px-14 py-5'>
                                    <p className='font-mono font-semibold text-lg text-cyan-500 pb-2'>{doctor.speciality}</p>
                                    <center><BiDownArrow className='text-orange-500 font-bold text-xl' /></center>
                                    <div className='pt-2'>
                                        <p className='font-mono text-md text-slate-600'> Time: {doctor.time}</p>
                                        <p className='font-mono text-md text-slate-600'> Room: {doctor.room}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-base-100 py-1 rounded'>
                        <p className='font-sarif border-white text-zinc-500 font-semibold px-8 py-8'>{doctor.description}</p>
                    </div>
                    {/* <div className='flex justify-end items-end pt-7'>
                        <button className="btn btn-ghost bg-gradient-to-r from-secondary to-primary text-white px-2 lg:px-16 hover:scale-105 duration-300 rounded-sm font-mono text-lg">Previous..</button>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default DrDetails;
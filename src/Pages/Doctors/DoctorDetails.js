import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import prescription1 from '../../assets/images/prescription1.png'
import prescription2 from '../../assets/images/prescription2.png'

import Footer from '../Shared/Footer'

const DoctorDetails = () => {

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
            <div className='h-screen mt-12 px-40'>

                <div className='flex justify-center py-5 border-l border-gray-400 border-t border-r'>
                    <div className='pr-40'>
                        <img src={prescription1} style={{ width: 140 }} alt="" />
                    </div>

                    <div className='text-center'>
                        <div className='text-white text-xl font-bold font-serif'> <i>{doctor.name}</i> </div>
                        <span className='flex justify-center items-center pb-2 text-lg text-primary'><i>{doctor.degree}</i></span>
                        <span className='text-white text-lg border-b-2  px-12 py-2 rounded-sm font-mono'><i>Dental Surgeon</i></span>
                        <span className='flex justify-center items-center pt-4 text-lg font-mono text-slate-300'><i>BMDC Reg. No. <span className='font-semibold text-primary'>{doctor._id}</span> </i></span>
                    </div>

                    <div className='pl-40'>
                        <p className='pb-2 font-mono'><i><span className='font-semibold text-white'>Chamber: </span> <span className='text-slate-300'>Dental Solutions, Dinajpur</span> </i></p>
                        <p className='font-mono'><i><span className='font-semibold text-white'>Time: </span><span className='font-semibold text-primary'>{doctor.time}</span></i></p>
                        <p className='font-mono'><i><span className='font-semibold text-white'>Room No: </span><span className='font-semibold text-primary'>{doctor.room}</span></i></p>
                        <p className='font-mono'><i><span className='font-semibold text-white'>Email: </span><span className='font-semibold text-primary'>{doctor.email}</span></i></p>
                        <p className='font-mono'><i><span className='font-semibold text-white'>Phone: </span><span className='font-semibold text-primary'>{doctor.phone}</span></i></p>
                    </div>
                </div>

                <div className='flex border border-gray-400'>
                    <div className='w-4/12 px-10 pt-5 border-r border-gray-400'>
                        <div>
                            <p className='border text-white text-center mb-5 py-1 text-xl font-bold font-mono'>Symptoms</p>
                            <ul class="symp m-0 pl-5 py-5 h-18 bg-slate-300 focus:outline-none" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                                contenteditable="true">
                            </ul>
                            <div class="symp_action pb-8 pt-3">
                                <button class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                                <button class="btn btn-sm px-3 rounded-sm ml-2 bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                            </div>
                        </div>
                        <div>
                            <p className='border text-white text-center py-1 text-xl font-bold mb-5 font-mono'>Tests</p>
                            <ul class="symp m-0 pl-5 py-5 h-18 bg-slate-300 focus:outline-none" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                                contenteditable="true">
                            </ul>
                            <div class="symp_action pb-5 pt-3">
                                <button class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                                <button class="btn btn-sm px-3 ml-2 rounded-sm bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                            </div>
                        </div>

                    </div>

                    <div className='px-5 py-5 w-full'>
                        <div className='w-8/12'>
                            <img src={prescription2} style={{ width: 90 }} alt="" />
                        </div>
                        <div className='px-6 py-5'>
                            <ul class="symp m-0 pl-5 py-5 h-52 w-full list-disc bg-slate-300 focus:outline-none" data-toggle="tooltip" data-placement="bottom" title="Click here to add medicine."
                                contenteditable="true">
                            </ul>
                            <div class="pt-5">
                                <button class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                                <button class="btn btn-sm px-3 rounded-sm ml-2 bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex justify-end items-end pt-7'>
                    <button className="btn btn-ghost bg-gradient-to-r from-secondary to-primary text-white px-2 lg:px-16 hover:scale-105 duration-300 rounded-sm font-mono text-lg border border-white hover:border-white">Download PDF</button>
                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default DoctorDetails;
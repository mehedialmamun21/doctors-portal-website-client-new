import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import prescription1 from '../../assets/images/prescription1.png'
import prescription2 from '../../assets/images/prescription2.png'

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
        <div className='h-screen mt-12 px-5'>

            <div className='flex justify-center py-5 border-2 border-gray-400'>
                <div className='pr-40'>
                    <img src={prescription1} style={{ width: 140 }} alt="" />
                </div>

                <div className='text-center'>
                    <div className='text-white text-xl font-bold font-serif'> <i>{doctor.name}</i> </div>
                    <span className='flex justify-center items-center pb-2 text-lg text-primary'><i>{doctor.degree}</i></span>
                    <span className='text-white text-lg border-b-2  px-12 py-2 rounded-sm font-mono'><i>Dental Surgeon</i></span>
                    <span className='flex justify-center items-center pt-4 text-lg font-mono text-slate-300'><i>BMDC Reg. No. <span className='font-semibold text-primary'>{doctor._id}</span> </i></span>
                </div>

                <div className='pl-28'>
                    <p className='pb-2 font-mono'><i><span className='font-semibold text-white'>Chamber: </span> <span className='text-slate-300'>Dental Solutions, Dinajpur</span> </i></p>
                    <p className='font-mono'><i><span className='font-semibold text-white'>Time: </span><span className='font-semibold text-primary'>{doctor.time}</span></i></p>
                    <p className='font-mono'><i><span className='font-semibold text-white'>Room No: </span><span className='font-semibold text-primary'>{doctor.room}</span></i></p>
                    <p className='font-mono'><i><span className='font-semibold text-white'>Email: </span><span className='font-semibold text-primary'>{doctor.email}</span></i></p>
                    <p className='font-mono'><i><span className='font-semibold text-white'>Phone: </span><span className='font-semibold text-primary'>{doctor.phone}</span></i></p>
                </div>
            </div>

            <div className='flex border-2 border-t-white border-l-gray-400 border-r-gray-400 border-b-gray-400'>
                <div className='w-4/12 px-10 pt-5 border-r'>
                    <div>
                        <p className='bg-slate-500 text-white text-center mb-5 py-1 text-xl font-bold font-mono'>Symptoms</p>
                        <ul class="symp m-0 pl-5 py-5 h-18 bg-gray-100 focus:outline-none" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                            contenteditable="true">
                        </ul>
                        <div class="symp_action pb-8 pt-3">
                            <button class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 rounded-sm ml-2 bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div>
                    <div>
                        <p className='bg-slate-500 text-white text-center py-1 text-xl font-bold mb-5 font-mono'>Tests</p>
                        <ul class="symp m-0 pl-5 py-5 h-18 bg-gray-100 focus:outline-none" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                            contenteditable="true">
                        </ul>
                        <div class="symp_action pb-5 pt-3">
                            <button class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 ml-2 rounded-sm bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div>
                    {/* <div>
                        <p className='bg-slate-400 text-white text-center py-1 mb-5 text-xl font-bold'>Advice</p>
                        <ul class="symp m-0 pl-5 py-5 h-24 bg-gray-200 focus:outline-none" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                            contenteditable="true">
                        </ul>
                        <div class="symp_action pb-5 pt-3">
                            <button class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 ml-2 rounded-sm bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div> */}
                </div>

                <div className='px-5 py-5 w-full'>
                    <div className='w-8/12 border-t-white border-r-white border-b-white'>
                        <img src={prescription2} style={{ width: 90 }} alt="" />
                    </div>
                    <div className='px-6 py-5'>
                        <ul class="symp m-0 pl-5 py-5 h-44 w-full list-disc bg-gray-100 focus:outline-none" data-toggle="tooltip" data-placement="bottom" title="Click here to add medicine."
                            contenteditable="true">
                        </ul>
                        <div class="pt-5">
                            <button class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 rounded-sm ml-2 bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div>

                    <div className='flex justify-end items-end px-6'>
                        <button className="btn btn-ghost bg-gradient-to-r from-secondary to-primary text-white px-2 lg:px-16 hover:scale-105 duration-300 rounded-sm font-mono text-lg">Download PDF</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DoctorDetails;
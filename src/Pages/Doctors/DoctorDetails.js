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
    }, [doctor]);
    return (
        <section className='h-screen pt-5'>

            <div className='flex justify-center py-5 border-2 border-b-zinc-400'>
                <div className='pr-40'>
                    <img src={prescription1} style={{ width: 140 }} alt="" />
                </div>

                <div className='text-center'>
                    <div className='text-zinc-700 text-xl font-bold'> <i>{doctor.name}</i> </div>
                    <span className='flex justify-center items-center pb-2 text-lg'><i>BDS, MS</i></span>
                    <span className='text-zinc-700 text-lg border-2 border-t-white border-l-white border-r-white border-b-zinc-400 px-12 py-2 rounded-sm'><i>Dental Surgeon</i></span>
                    <span className='flex justify-center items-center pt-3 text-lg'><i>BMDC Reg. No. {doctor._id}</i></span>
                </div>

                <div className='pl-28'>
                    <p><i><span className='font-semibold'>Chamber: </span>Dental Solutions</i></p>
                    <p><i><span className='font-semibold'>Room No: </span><span>235</span></i></p>
                    <p><i><span className='font-semibold'>Address: </span>Dinajpur-5200</i></p>
                    <p><i><span className='font-semibold'>Email: </span><span className='font-semibold text-primary'>{doctor.email}</span></i></p>
                    <p><i><span className='font-semibold'>Phone: </span><span>01521-413730</span></i></p>
                </div>
            </div>

            <div className='flex border-2'>
                <div className='w-4/12 px-10 pt-5 border-2 border-r-zinc-300 border-t-white border-l-white border-b-white'>
                    <div>
                        <p className='bg-success text-white text-center mb-5 py-1 text-xl font-bold'>Symptoms</p>
                        <ul class="symp m-0 pl-5 py-5 h-full list-disc" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                            contenteditable="true">
                        </ul>
                        <div class="symp_action pb-5 pt-3">
                            <button id="symp_save" data-prescription_id="<?php echo $presc->prescription_id; ?>"
                                class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 rounded-sm ml-2 bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div>
                    <div>
                        <p className='bg-success text-white text-center py-1 text-xl font-bold mb-5'>Tests</p>
                        <ul class="symp m-0 pl-5 py-5 h-full" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                            contenteditable="true">
                        </ul>
                        <div class="symp_action pb-5 pt-3">
                            <button id="symp_save" data-prescription_id="<?php echo $presc->prescription_id; ?>"
                                class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 ml-2 rounded-sm bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div>
                    <div>
                        <p className='bg-success text-white text-center py-1 mb-5 text-xl font-bold'>Advice</p>
                        <ul class="symp m-0 pl-5 py-5 h-full" data-toggle="tooltip" data-placement="bottom" title="Click to edit."
                            contenteditable="true">
                        </ul>
                        <div class="symp_action pb-5 pt-3">
                            <button id="symp_save" data-prescription_id="<?php echo $presc->prescription_id; ?>"
                                class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 ml-2 rounded-sm bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div>
                </div>

                <div className='px-5 py-5'>
                    <div className='w-8/12 border-t-white border-r-white border-b-white'>
                        <img src={prescription2} style={{ width: 90 }} alt="" />
                    </div>
                    <div className='pl-6 pt-10'>
                        <ul class="symp m-0 pl-5 py-5 h-full w-full list-disc" data-toggle="tooltip" data-placement="bottom" title="Click here to add medicine."
                            contenteditable="true">
                        </ul>
                        <div class="symp_action pb-5 pt-3">
                            <button id="symp_save" data-prescription_id="<?php echo $presc->prescription_id; ?>"
                                class="btn btn-sm px-3 rounded-sm bg-green-500 hover:bg-green-600 border-none text-white save">Save</button>
                            <button class="btn btn-sm px-3 rounded-sm ml-2 bg-red-500 hover:bg-red-600 border-none cancel-btn text-white">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DoctorDetails;
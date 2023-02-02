import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className='min-h-screen'>

            <div className='px-60 pt-16'>
                <div>
                    <div className='text-center'>
                        <center><img className='rounded' src={doctor.img} style={{ width: 250, height: 200 }} alt="" /></center>
                        <div className='pt-5 pb-5'>
                            <p className='font-mono text-lg text-slate-300'>{doctor.degree}</p>
                            <p className='text-white text-xl font-bold font-mono'> {doctor.name} </p>
                            <p className='font-mono text-xl text-primary pt-3'>{doctor.speciality}</p>
                            <p className='font-mono text-md text-slate-300'> Time: {doctor.time}</p>
                            <p className='font-mono text-md text-slate-300'> Room no: {doctor.room}</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-sarif border-l-2 border-cyan-700 text-white px-5 py-5 rounded-md'>{doctor.description}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default DrDetails;
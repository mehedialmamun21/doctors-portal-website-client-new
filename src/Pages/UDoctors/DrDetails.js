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

            <div className='px-60 pt-20'>
                <div>
                    <div className='text-center'>
                        <center><img src={doctor.img} style={{ width: 250, height: 200 }} alt="" /></center>
                        <div className='py-7'>
                            <p className='font-semibold font-mono'>{doctor.degree}</p>
                            <p className='text-cyan-500 text-xl font-bold font-mono'> {doctor.name} </p>
                            <p className='font-mono pt-3'>{doctor.speciality}</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-sarif border border-gray-500 px-5 py-5 rounded-md'>{doctor.description}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default DrDetails;
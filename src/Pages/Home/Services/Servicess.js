import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Servicess = () => {
    const [servicess, setServicess] = useState([]);
    useEffect(() => {
        fetch('servicess.json')
            .then(res => res.json())
            .then(data => setServicess(data))
    }, [])
    return (
        <div className='lg:px-40 px-5'>
            <div className='text-center mb-5'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className='mt-3 font-semibold text-gray-500'>Hi, You can rent our equipment from here</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* <h2>services: {servicess.length} </h2> */}
                {
                    servicess.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Servicess;
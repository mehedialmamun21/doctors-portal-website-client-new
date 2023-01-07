import React from 'react';
import DrProfiles from './DrProfiles';

const UDoctors = () => {
    return (
        <div className='h-screen mx-40'>

            <div className='pt-5 px-10'>
                <p className='text-primary text-lg'>Professionals</p>
                <p className='text-3xl'>Our Doctors</p>
            </div>

            <div className='pt-7'>
                <DrProfiles></DrProfiles>
            </div>

        </div>
    );
};

export default UDoctors;
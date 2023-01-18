import React from 'react';

import Footer from "../Shared/Footer";

import DrProfiles from './DrProfiles';

const UDoctors = () => {

    return (
        <div className='h-screen'>

            <div className='pb-28 mx-40'>
                <div className='pt-10'>
                    <p className='text-cyan-500 text-lg'>Professionals</p>
                    <p className='text-3xl font-mono '>Our Doctors</p>
                </div>

                <div className='pt-10'>
                    <DrProfiles></DrProfiles>
                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default UDoctors;
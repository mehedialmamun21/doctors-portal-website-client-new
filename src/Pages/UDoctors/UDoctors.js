import React from 'react';

import Footer from "../Shared/Footer";

import DrProfiles from './DrProfiles';

const UDoctors = () => {

    return (
        <div className='h-screen'>

            <div className='pb-28 mx-40'>
                <div className='pt-14'>
                    <p className='text-primary text-xl'>Professionals</p>
                    <p className='text-3xl font-mono text-slate-300'>Our Doctors</p>
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
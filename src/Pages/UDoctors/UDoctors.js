import React from 'react';

import Footer from "../Shared/Footer";

import DrProfiles from './DrProfiles';

const UDoctors = () => {

    return (
        <div>

            <div className='pb-28 mx-5 lg:mx-40 pt-24 lg:pt-24 h-screen'>

                <div className=''>
                    <p className='text-3xl font-mono text-slate-600'>Our Doctors</p>
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
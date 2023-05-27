import React from 'react';

import Footer from "../Shared/Footer";

import DrProfiles from './DrProfiles';
import { Link } from 'react-router-dom';

const UDoctors = () => {

    return (
        <div className='h-screen'>

            <div className='py-10 mx-16 lg:mx-40'>

                <div className='grid grid-cols-2'>
                    <div className=''>
                        <p className='text-secondary text-xl'>Professionals</p>
                        <p className='text-3xl font-mono text-slate-600'>Our Consultants</p>
                    </div>

                    {/* <div className='flex items-center justify-end list-none'>
                        <li><Link to="/dashboard/doctors"><span className='px-6 lg:px-7 py-3 font-bold rounded-sm shadow-lg bg-cyan-700 font-mono text-white'>Consultant's Entry</span></Link></li>
                    </div> */}
                </div>

                <div className='my-10'>
                    <DrProfiles></DrProfiles>
                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default UDoctors;
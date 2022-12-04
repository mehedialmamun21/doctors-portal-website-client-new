import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DoctorDetails = () => {
    return (
        <section>

            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />

                <div class="drawer-content">
                    <Outlet></Outlet>
                    <h2 className='flex justify-center py-20 text-xl text-zinc-600 font-semibold'>Coming soon..</h2>
                </div>

                <div class="drawer-side lg:mr-3">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-white lg:w-full">

                        <li><Link to=""><span className='px-10 py-3 text-center font-bold rounded-sm bg-white shadow-lg'>Prescription</span></Link></li>

                    </ul>
                </div>
            </div>

        </section>
    );
};

export default DoctorDetails;
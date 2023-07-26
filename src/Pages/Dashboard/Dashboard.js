import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

import Footer from "../Shared/Footer";

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <section>

            <div className='px-40'>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <Outlet></Outlet>
                    </div>

                    <div class="drawer-side lg:mr-3">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu pt-9 overflow-y-auto w-60 lg:w-full">

                            {!admin && <>
                                <li><Link to="/dashboard"><span className='px-4 py-3 font-bold rounded-sm shadow-lg bg-cyan-600 font-mono text-white relative'>My Appointments</span></Link></li>
                                <li><Link to="/dashboard/review"><span className='px-9 py-3 font-bold rounded-sm shadow-lg bg-cyan-600 font-mono text-white'>My Reviews</span></Link></li>
                            </>}

                            {admin && <>
                                <li><Link to="/dashboard/users"> <span className='px-9 lg:px-16 py-3 font-bold rounded-sm shadow-lg bg-cyan-600 font-mono text-white'> Make Admin</span></Link></li>
                                <li><Link to="/dashboard/addDoctor"> <span className='px-9 lg:px-14 py-3 font-bold rounded-sm shadow-lg bg-cyan-600 font-mono text-white'>Add a Doctor</span> </Link></li>
                                <li><Link to="/dashboard/manageDoctor"><span className='px-6 lg:px-12 py-3 font-bold rounded-sm shadow-lg bg-cyan-600 font-mono text-white'>Manage Doctors</span></Link></li>
                                <li><Link to="/dashboard/doctors"><span className='px-6 lg:px-10 py-3 font-bold rounded-sm shadow-lg bg-cyan-600 font-mono text-white'>Doctor's Profile</span></Link></li>
                            </>}

                        </ul>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </section>
    );
};

export default Dashboard;
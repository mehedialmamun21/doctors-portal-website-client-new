import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <section>

            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />

                <div class="drawer-content">
                    <Outlet></Outlet>
                </div>

                <div class="drawer-side lg:mr-3">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-slate-200">
                        {!admin && <>
                            <li><Link to="/dashboard"><span className='px-3 py-2 font-bold rounded'>My Appointments</span></Link></li>
                            <li><Link to="/dashboard/review"><span className='px-3 py-2 font-bold rounded'>My Reviews</span></Link></li>
                        </>}
                        {admin && <>
                            <li><Link to="/dashboard/users"> <span className='px-3 py-2 font-bold rounded'> Make Admin</span></Link></li>
                            <li><Link to="/dashboard/addDoctor"> <span className='px-3 py-2 font-bold rounded'>Add a Doctor</span> </Link></li>
                            <li><Link to="/dashboard/manageDoctor"><span className='px-3 py-2 font-bold rounded'>Manage Doctors</span></Link></li>
                        </>}
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;
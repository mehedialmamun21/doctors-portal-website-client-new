import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import { FaShoppingCart, FaBusinessTime, FaRegCommentDots } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineManageAccounts } from 'react-icons/md';
import Footer from "../Shared/Footer";

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <section className=''>

            <div className='px-40'>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <Outlet></Outlet>
                    </div>

                    <div class="drawer-side bg-violet-500 lg:mr-3 mt-20 mb-3">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu pt-3 overflow-y-auto w-60 lg:w-full">

                            {!admin && <>
                                <li><Link to="/dashboard"><span className='px-2 py-2 font-semi rounded-sm font-mono text-white relative flex items-center text-xl'> <FaBusinessTime className='mr-2' /> Appointments </span></Link></li>
                                <li><Link to="/dashboard/cart"><span className='px-2 py-2 font-bold rounded-sm font-mono text-white flex items-center text-xl'> <FaShoppingCart className='mr-3' /> My Cart </span></Link></li>
                                <li><Link to="/dashboard/review"><span className='px-2 py-2 font-bold rounded-sm font-mono text-white flex items-center text-xl'> <FaRegCommentDots className='mr-3' /> My Reviews </span></Link></li>
                            </>}

                            {admin && <>
                                <li><Link to="/dashboard/users"> <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <MdOutlineAdminPanelSettings className='mr-3' /> Make Admin </span></Link></li>
                                <li><Link to="/dashboard/addDoctor"> <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <AiOutlineUserAdd className='mr-3' /> Add a Doctor </span> </Link></li>
                                <li><Link to="/dashboard/manageDoctor"><span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <MdOutlineManageAccounts className='mr-3' /> Manage Doctors </span></Link></li>
                                {/* <li><Link to="/dashboard/doctors"><span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl'>Doctor's Profile</span></Link></li> */}
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
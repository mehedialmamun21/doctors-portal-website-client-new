import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useDoctor from '../../hooks/useDoctor';
import { FaShoppingCart, FaBusinessTime, FaRegCommentDots } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlineManageAccounts, MdManageAccounts } from 'react-icons/md';
import { CgAddR } from 'react-icons/cg';
import { FaFilePrescription } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import useCart from '../../hooks/useCart';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [isDoctor] = useDoctor(user);

    const [cart] = useCart();

    return (
        <section className=''>
            <div className='lg:px-40'>
                <div class="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <Outlet></Outlet>
                    </div>

                    <div class="drawer-side lg:bg-teal-600 lg:mr-3 mt-20 mb-3">
                        <label for="dashboard-sidebar" class="drawer-overlay"></label>
                        <ul class="menu pt-3 overflow-y-auto w-60 lg:w-full">

                            {!admin && !isDoctor && <>
                                <li>
                                    <Link to="/dashboard">
                                        <span className='px-2 py-2 font-semibold rounded-sm font-mono text-white relative flex items-center text-lg'>
                                            <FaBusinessTime className='mr-2' /> Appointments
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/cart">
                                        <span className='px-2 py-2 font-semibold rounded-sm font-mono text-white flex items-center text-lg'>
                                            <FaShoppingCart className='mr-3' /> My Cart
                                        </span>
                                        <span className="badge text-pink-500 bg-white font-bold border-none px-2 py-2">+{cart?.length || 0}</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/review">
                                        <span className='px-2 py-2 font-semibold rounded-sm font-mono text-white flex items-center text-lg'>
                                            <FaRegCommentDots className='mr-3' /> My Reviews
                                        </span>
                                    </Link>
                                </li>
                            </>}

                            {admin && !isDoctor && <>
                                <li>
                                    <Link to="/dashboard/appointmentDetails">
                                        <span className='px-4 lg:px-2 py-1 font-bold border border-white font-mono text-white text-lg flex'>
                                            All Appointments
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/users">
                                        <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-lg flex items-center'>
                                            <MdOutlineAdminPanelSettings className='mr-3' /> Set User Role
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addDoctor">
                                        <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-lg flex items-center'>
                                            <AiOutlineUserAdd className='mr-3' /> Add Doctor
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageDoctor">
                                        <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-lg flex items-center'>
                                            <MdOutlineManageAccounts className='mr-3' /> Manage Doctor
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addItem">
                                        <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-lg flex items-center'>
                                            <CgAddR className='mr-3' /> Add Item
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageItem">
                                        <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-lg flex items-center'>
                                            <MdManageAccounts className='mr-3' /> Manage Item
                                        </span>
                                    </Link>
                                </li>
                            </>}

                            {/* Add doctor-specific options */}
                            {isDoctor && (
                                <div>
                                    <li>
                                        <Link to="/dashboard/doctorDashboard">
                                            <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-lg flex items-center'>
                                                <ImProfile className='mr-3' /> Doctor Profile
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/prescription">
                                            <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-lg flex items-center'>
                                                <FaFilePrescription className='mr-3' /> Prescription
                                            </span>
                                        </Link>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Dashboard;






// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, Outlet } from 'react-router-dom';
// import auth from '../../firebase.init';
// import useAdmin from '../../hooks/useAdmin';
// import { FaShoppingCart, FaBusinessTime, FaRegCommentDots } from 'react-icons/fa';
// import { MdOutlineAdminPanelSettings } from 'react-icons/md';
// import { AiOutlineUserAdd } from 'react-icons/ai';
// import { MdOutlineManageAccounts, MdManageAccounts } from 'react-icons/md';
// import { CgAddR } from 'react-icons/cg';
// import useCart from '../../hooks/useCart';

// const Dashboard = () => {

//     const [user] = useAuthState(auth);
//     const [admin] = useAdmin(user);

//     const [cart] = useCart();

//     return (
//         <section className=''>

//             <div className='lg:px-40'>
//                 <div class="drawer drawer-mobile">
//                     <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
//                     <div class="drawer-content">
//                         <Outlet></Outlet>
//                     </div>

//                     <div class="drawer-side lg:bg-violet-500 lg:mr-3 mt-20 mb-3">
//                         <label for="dashboard-sidebar" class="drawer-overlay"></label>
//                         <ul class="menu pt-3 overflow-y-auto w-60 lg:w-full">

//                             {!admin && <>
//                                 <li><Link to="/dashboard"><span className='px-2 py-2 font-semi rounded-sm font-mono text-white relative flex items-center text-xl'> <FaBusinessTime className='mr-2' /> Appointments </span></Link></li>

//                                 <li>
//                                     <Link to="/dashboard/cart"><span className='px-2 py-2 font-bold rounded-sm font-mono text-white flex items-center text-xl'> <FaShoppingCart className='mr-3' /> My Cart </span>
//                                         <span className="badge text-white bg-pink-600 border-none px-3 py-2.5">+{cart?.length || 0}</span>
//                                     </Link>

//                                 </li>

//                                 <li><Link to="/dashboard/review"><span className='px-2 py-2 font-bold rounded-sm font-mono text-white flex items-center text-xl'> <FaRegCommentDots className='mr-3' /> My Reviews </span></Link></li>
//                             </>}

//                             {admin && <>
//                                 <li><Link to="/dashboard/users"> <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <MdOutlineAdminPanelSettings className='mr-3' /> Make Admin </span></Link></li>
//                                 <li><Link to="/dashboard/addDoctor"> <span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <AiOutlineUserAdd className='mr-3' /> Add Doctor </span> </Link></li>
//                                 <li><Link to="/dashboard/manageDoctor"><span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <MdOutlineManageAccounts className='mr-3' /> Manage Doctor </span></Link></li>
//                                 <li><Link to="/dashboard/addItem"><span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <CgAddR className='mr-3' /> Add Item </span></Link></li>
//                                 <li><Link to="/dashboard/manageItem"><span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl flex items-center'> <MdManageAccounts className='mr-3' /> Manage Item </span></Link></li>
//                                 {/* <li><Link to="/dashboard/doctors"><span className='px-2 py-3 font-bold rounded-sm font-mono text-white text-xl'>Doctor's Profile</span></Link></li> */}
//                             </>}

//                         </ul>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default Dashboard;
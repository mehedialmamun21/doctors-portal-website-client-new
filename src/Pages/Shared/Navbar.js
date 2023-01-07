import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../assets/images/navLogo.png";
import { FaCalendarCheck, FaHome, FaHandHoldingMedical, FaPhone, FaBorderAll } from 'react-icons/fa';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>
      <li><Link to="/"> <span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-blue-400"><FaHome size='1.25rem' /></span> <span>Home</span> </span> </Link></li>
      <li><Link to="/appointment"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-blue-400"><FaCalendarCheck /></span> <span>Appointment</span> </span></Link></li>
      {/* <li><Link to="/doctors"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-blue-400"> <FaHandHoldingMedical /> </span> <span>Dr.Profiles</span> </span></Link></li> */}
      <li><Link to="/udoctors"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-blue-400"> <FaHandHoldingMedical /> </span> <span className="">Doctors</span> </span></Link></li>
      <li><Link to="/contact"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-blue-400"> <FaPhone /> </span> <span>Contact</span> </span></Link></li>
      {/* <li><Link to="/blog"><span className="font-semibold text-lg text-zinc-800">Blog</span></Link></li> */}
      {
        user && <li><Link to="/dashboard"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-blue-400"> <FaBorderAll /> </span> <span>Dashboard</span> </span></Link></li>
      }

    </>
  );

  return (

    <div className="navbar px-5 lg:pr-14 lg:pl-10 bg-gray-100 py-0 sticky top-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-sm w-52">
            {menuItems}
          </ul>
        </div>
        <a href="/" className="normal-case text-xl mx-2 lg:mx-0"><img className='rounded-2xl' src={img} style={{ width: "170px", height: "70px" }} alt="" /></a>
        {/* <a href="/" className="normal-case border-2 rounded-2xl border-t-orange-400 border-l-gray-100 border-r-gray-100 border-b-orange-400 border-sm px-3 py-1 text-orange-400 text-lg lg:text-xl font-bold lg:mx-0"> <span>Dental Solution</span> </a> */}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-lg">
          {menuItems}
        </ul>
      </div>

      <div className="navbar-end">
        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>

        {user ? <button className="btn btn-ghost font-bold hover:bg-slate-600 bg-slate-700 text-white px-2 lg:px-8 mx-2 lg:mx-0 rounded-sm" onClick={logout} >Sign Out</button> : <Link to="/login" className="btn btn-ghost font-bold hover:bg-slate-600 bg-slate-700 text-white px-2 lg:px-8 mx-2 lg:mx-0 rounded-sm">Login</Link>}

      </div>

    </div>
  );
};

export default Navbar;
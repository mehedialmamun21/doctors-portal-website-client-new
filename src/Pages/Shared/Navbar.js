import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

import NavbarLogo from "../../assets/images/skyline-logo.png"

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>

      <li><Link to="/"> <span className="font-semibold text-xl  flex"> <span className="font-mono">Home</span> </span> </Link></li>

      <li><Link to="/appointment"><span className="font-semibold text-xl  flex"> <span className="font-mono">Appointment</span> </span></Link></li>

      <li><Link to="/udoctors"><span className="font-semibold text-xl  flex"> <span className="font-mono">Doctors</span> </span></Link></li>

      <li><Link to="/contact"><span className="font-semibold text-xl  flex"> <span className="font-mono">Contact</span> </span></Link></li>

      {
        user && <li><Link to="/dashboard"><span className="font-semibold text-xl  flex"> <span className="font-mono">Dashboard</span> </span></Link></li>
      }

    </>
  );

  return (

    // <div className="navbar px-5 py-0 lg:px-10 bg-white sticky lg:static top-0 z-30 shadow-xl bg-opacity-80 backdrop-blur border-b border-gray-300">
    <div className="navbar px-5 py-2 lg:px-40 bg-black text-white fixed z-30 bg-opacity-30 backdrop-blur border-b border-gray-300">

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
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-2 p-2 shadow rounded-sm w-52 text-white bg-black">
            {menuItems}
          </ul>
        </div>

        <a href="/">
          {/* <img src="https://i.postimg.cc/J4tP5mMg/images-2-removebg-preview.png" className="w-20 lg:w-28" alt="" /> */}
          <img src={NavbarLogo} className="w-20 lg:w-32" alt="" />
        </a>

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

        {/* {user ? <a href="" className="font-bold" onClick={logout} > <span className="flex items-center"><AiOutlineLogout className="text-red-600 mr-0 lg:mr-3 invisible lg:visible" size="2rem" /> <span className="text-white bg-red-600 px-2 lg:px-5 py-2 lg:py-3">Sign Out</span></span> </a> : <Link to="/login" className="font-bold"> <span className="flex items-center"> <AiOutlineLogin className="text-green-600 mr-0 lg:mr-3 invisible lg:visible" size="2rem" /> <span className="text-white bg-green-600 px-5 lg:px-8 py-2 lg:py-3">Login</span> </span> </Link>} */}
        {user ? <a href="" className="font-bold" onClick={logout} > <span className="flex items-center"> <span className="text-white bg-red-600 px-2 lg:px-5 py-2 lg:py-3">Sign Out</span></span> </a> : <Link to="/login" className="font-bold"> <span className="flex items-center"> <span className="text-white bg-green-600 px-5 lg:px-8 py-2 lg:py-3">Login</span> </span> </Link>}

      </div>

    </div>
  );
};

export default Navbar;
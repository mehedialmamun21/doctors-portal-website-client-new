import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>

      <li><Link to="/"> <span className="font-semibold text-xl text-black flex"> <span className="font-mono">Home</span> </span> </Link></li>

      <li><Link to="/appointment"><span className="font-semibold text-xl text-black flex"> <span className="font-mono">Appointment</span> </span></Link></li>

      <li><Link to="/udoctors"><span className="font-semibold text-xl text-black flex"> <span className="font-mono">Doctors</span> </span></Link></li>

      <li><Link to="/contact"><span className="font-semibold text-xl text-black flex"> <span className="font-mono">Contact</span> </span></Link></li>

      {
        user && <li><Link to="/dashboard"><span className="font-semibold text-xl text-black flex"> <span className="font-mono">Dashboard</span> </span></Link></li>
      }

    </>
  );

  return (

    // <div className="navbar px-5 py-0 lg:px-40 bg-cyan-800 sticky top-0 z-30">
    // <div className="navbar px-5 py-0 lg:px-40 bg-white sticky top-0 z-30 shadow-xl bg-opacity-80 backdrop-blur border-b border-gray-300">
    <div className="navbar px-5 py-0 lg:px-40 bg-white shadow-lg backdrop-blur border-b border-gray-300">
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

        <a href="/">
          <img src="https://i.postimg.cc/J4tP5mMg/images-2-removebg-preview.png" className="w-20 lg:w-28" alt="" />
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

        {user ? <a href="" className="font-bold" onClick={logout} > <span className="flex items-center"><AiOutlineLogout className="text-red-500 mr-0 lg:mr-3 invisible lg:visible" size="2rem" /> <span className="text-white bg-red-500 px-1 lg:px-5 py-2 lg:py-3">Sign Out</span></span> </a> : <Link to="/login" className="font-bold"> <span className="flex items-center"> <AiOutlineLogin className="text-green-500 mr-0 lg:mr-3 invisible lg:visible" size="2rem" /> <span className="text-white bg-green-500 px-5 lg:px-8 py-2 lg:py-3">Login</span> </span> </Link>}

      </div>

    </div>
  );
};

export default Navbar;
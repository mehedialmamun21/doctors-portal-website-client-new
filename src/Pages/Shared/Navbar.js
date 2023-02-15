import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
// import { FaCalendarCheck, FaHome, FaHandHoldingMedical, FaPhone, FaBorderAll } from 'react-icons/fa';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { TbDental } from "react-icons/tb";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>

      {/* <li><Link to="/"> <span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-cyan-500"><FaHome size='1.25rem' /></span> <span className="font-mono">Home</span> </span> </Link></li> */}
      <li><Link to="/"> <span className="font-semibold text-lg text-white flex"> <span className="font-mono">Home</span> </span> </Link></li>

      {/* <li><Link to="/appointment"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-cyan-500"><FaCalendarCheck /></span> <span className="font-mono">Appointment</span> </span></Link></li> */}
      <li><Link to="/appointment"><span className="font-semibold text-lg text-white flex"> <span className="font-mono">Appointment</span> </span></Link></li>

      {/* <li><Link to="/udoctors"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-cyan-500"> <FaHandHoldingMedical /> </span> <span className="font-mono">Doctors</span> </span></Link></li> */}




      <li><Link to="/udoctors"><span className="font-semibold text-lg text-white flex"> <span className="font-mono">Doctors</span> </span></Link></li>




      {/* <li><Link to="/contact"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-cyan-500"> <FaPhone /> </span> <span className="font-mono">Contact</span> </span></Link></li> */}




      <li><Link to="/contact"><span className="font-semibold text-lg text-white flex"> <span className="font-mono">Contact</span> </span></Link></li>




      {/* {
        user && <li><Link to="/dashboard"><span className="font-semibold text-lg text-zinc-800 flex"> <span className="flex justify-center items-center pr-2 text-cyan-500"> <FaBorderAll /> </span> <span className="font-mono">Dashboard</span> </span></Link></li>
      } */}

      {
        user && <li><Link to="/dashboard"><span className="font-semibold text-lg text-white flex"> <span className="font-mono">Dashboard</span> </span></Link></li>
      }

    </>
  );

  return (

    // <div className="navbar px-5 py-0 lg:px-40 bg-cyan-800 sticky top-0 z-30">
    <div className="navbar px-5 py-0 lg:px-40 bg-slate-900 sticky top-0 z-30 shadow-sm bg-opacity-80 backdrop-blur border-b border-gray-700">
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

        <a href="/" className="flex px-4 py-1 bg-cyan-500 rounded-sm"><TbDental size="2rem" className="text-white flex justify-center items-center" /> <span className="text-white pl-1 flex justify-center items-center text-2xl font-semibold">Solution</span> </a>

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

        {user ? <button className="btn btn-ghost font-bold" onClick={logout} > <AiOutlineLogout className="text-red-500" size="2rem" /> <span className="pl-3 text-white">Sign Out</span> </button> : <Link to="/login" className="btn btn-ghost font-bold"> <AiOutlineLogin className="text-green-500" size="2rem" /> <span className="pl-3 text-white">Login</span> </Link>}

      </div>

    </div>
  );
};

export default Navbar;
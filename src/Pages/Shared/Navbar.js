import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSignOutAlt, FaUser, FaTachometerAlt } from 'react-icons/fa';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";

import NavbarLogo from "../../assets/images/denta.png";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [cart] = useCart();

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/appointment", label: "Appointment" },
    { to: "/udoctors", label: "Doctors" },
    { to: "/order", label: "Products" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <div className="navbar backdrop-blur bg-opacity-80 px-5 py-2 lg:px-40 border-b border-gray-300 text-zinc-700 bg-white z-50 fixed">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex="0" className="btn btn-ghost">
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
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to}>
                  <span className="font-semibold text-lg flex">{item.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/dashboard/cart">
                <button className="btn bg-none border-none rounded-sm">
                  <div className="flex items-center">
                    <FaShoppingCart size="1.1rem" className="mr-2 text-white" />
                    <div className="badge text-white bg-pink-600 px-3 py-2.5">
                      {cart?.length || 0}
                    </div>
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/">
          <img src={NavbarLogo} className="w-28 lg:w-48" alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>
                <span className="font-semibold text-lg flex">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/dashboard/cart">
          {/* <button className="btn ml-5 my-2 lg:my-0 bg-none border-none rounded-sm">
            <div className="flex items-center">
              <FaShoppingCart size="1.1rem" className="mr-2 text-white" />
              <div className="badge text-white bg-pink-600 px-3 py-2.5">
                {cart?.length || 0}
              </div>
            </div>
          </button> */}
          <button className="btn ml-5 my-2 lg:my-0 bg-transparent hover:bg-white border-none rounded-sm">
            <div className="flex items-center">
              <FaShoppingCart size="1.2rem" className="mr-2 text-yellow-500" />
              <div className="badge text-white border-none bg-pink-600 px-3 py-2.5">
                +{cart?.length || 0}
              </div>
            </div>
          </button>

        </Link>
      </div>

      <div className="navbar-end">
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
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

        {user ? (
          <a href="#" className="font-bold" onClick={handleLogout}>
            <span className="flex items-center">
              <FaSignOutAlt className="mr-2 text-blue-500" />
              Sign Out
            </span>
          </a>
        ) :
          <Link to="/login" className="font-bold">
            <span className="flex items-center">
              <FaUser className="mr-2 text-blue-500" />
              Login
            </span>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;





// import { signOut } from "firebase/auth";
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
// import auth from "../../firebase.init";
// import { FaShoppingCart } from 'react-icons/fa';

// import NavbarLogo from "../../assets/images/denta.png"
// import useCart from "../../hooks/useCart";

// const Navbar = () => {
//   const [user, loading, error] = useAuthState(auth);

//   const [cart] = useCart();

//   const logout = () => {
//     signOut(auth);
//     localStorage.removeItem('accessToken');
//   };

//   const menuItems = (
//     <>

//       <li><Link to="/"> <span className="font-semibold text-lg flex"> <span className="">Home</span> </span> </Link></li>

//       <li><Link to="/appointment"><span className="font-semibold text-lg flex"> <span className="">Appointment</span> </span></Link></li>

//       <li><Link to="/udoctors"><span className="font-semibold text-lg flex"> <span className="">Doctors</span> </span></Link></li>

//       <li><Link to="/order"><span className="font-semibold text-lg flex"> <span className="">Products</span> </span></Link></li>

//       {
//         user && <li><Link to="/dashboard"><span className="font-semibold text-lg flex"> <span className="">Dashboard</span> </span></Link></li>
//       }

//       <Link to="/dashboard/cart">
//         <button className="btn ml-5 my-2 lg:my-0 bg-none border-none rounded-sm">
//           <div className="flex items-center">
//             <FaShoppingCart size="1.1rem" className="mr-2 text-white" />
//             <div className="badge text-white bg-pink-600 px-3 py-2.5">+{cart?.length || 0}</div>
//           </div>
//         </button>
//       </Link>

//     </>
//   );

//   return (

//     <div className="navbar px-5 py-2 lg:px-40 text-white bg-black bg-opacity-80 z-50 fixed">

//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex="0" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </label>
//           <ul tabIndex="0" className="menu menu-compact dropdown-content mt-2 p-2 shadow rounded-sm w-52 text-white bg-black">
//             {menuItems}
//           </ul>
//         </div>

//         <a href="/">
//           <img src={NavbarLogo} className="w-24 lg:w-40" alt="" />
//         </a>

//       </div>
//       <div className="navbar-end hidden lg:flex">
//         <ul className="menu menu-horizontal p-0 text-lg">
//           {menuItems}
//         </ul>
//       </div>

//       <div className="navbar-end">
//         <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//           </svg>
//         </label>

//         {user ? <a href="" className="font-bold" onClick={logout} > <span className="flex items-center"> <span className="text-white rounded-full bg-gray-600 border border-gray-400 px-5 lg:px-5 py-1 lg:py-1">Sign Out</span></span> </a> : <Link to="/login" className="font-bold"> <span className="flex items-center"> <span className="text-white rounded-full bg-gray-600 border border-gray-400 px-5 lg:px-6 py-1 lg:py-1">Login</span> </span> </Link>}

//       </div>

//     </div>
//   );
// };

// export default Navbar;








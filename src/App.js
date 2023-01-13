import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Doctors from "./Pages/Doctors/Doctors";
import DoctorDetails from "./Pages/Doctors/DoctorDetails";

import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import UDoctors from "./Pages/UDoctors/UDoctors";

function App() {

  return (

    // <div className="max-w-7xl mx-auto">
    <div className="mx-auto">

      <div className="flex justify-end pr-64 py-6 text-white bg-gray-200 border border-t-secondary">
        <a href="/facebook" target="_blank"><FaFacebook className="mr-6 cursor-pointer text-blue-600 text-xl" /></a>
        <a href="/youTube" target="_blank"><FaYoutube className="mr-6 cursor-pointer text-red-600 text-xl" /></a>
        <a href="/Twitter" target="_blank"><FaTwitter className="mr-6 cursor-pointer text-blue-400 text-xl" /></a>
        <a href="/Instagram" target="_blank"><FaInstagram className="mr-6 cursor-pointer text-pink-500 text-xl" /></a>
        <a href="/LinkedIn" target="_blank"><FaLinkedin className="cursor-pointer text-blue-500 text-xl" /></a>
      </div>

      <hr />

      <Navbar></Navbar>

      <Routes>

        <Route path="/" element={<Home></Home>} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        } />

        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>

        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contact" element={<Contact></Contact>} />

        {/* <Route path="/doctors" element={<Doctors></Doctors>} /> */}
        <Route path="/dashboard/doctors" element={<Doctors></Doctors>} />

        <Route path="/udoctors" element={<UDoctors></UDoctors>} />

        <Route path="/doctor" element={<DoctorDetails></DoctorDetails>} />
        <Route path="/doctor/:doctorId" element={<DoctorDetails />}></Route>

        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />

      </Routes>

      <ToastContainer />

    </div>

  );
}

export default App;
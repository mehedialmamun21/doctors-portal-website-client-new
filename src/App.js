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
import UDoctors from "./Pages/UDoctors/UDoctors";
import DrDetails from "./Pages/UDoctors/DrDetails";
import Emaserkrishi from "./Pages/Home/Emaserkrishi";
import BiseshPoramorsho from "./Pages/Home/Agri_Detail/BiseshPoramorsho";
import Abohaua from "./Pages/Home/Agri_Detail/Abohaua";
import RecentInnovation from "./Pages/Home/Agri_Detail/RecentInnovation";
import AushDownload from "./Pages/Home/Agri_Detail/AushDownload";
import BRI from "./Pages/Home/Agri_Detail/BRI";
import Bari from "./Pages/Home/Agri_Detail/Bari";
import CropProductionTech from "./Pages/Home/Agri_Detail/CropProductionTech";
import Danadar from "./Pages/Home/CropDetail/Danadar";
import Sobji from "./Pages/Home/CropDetail/Sobji";
import Tell from "./Pages/Home/CropDetail/Tell";
import Mosla from "./Pages/Home/CropDetail/Mosla";
import Kondal from "./Pages/Home/CropDetail/Kondal";
import DiseaseIdentify from "./Pages/Dashboard/DiseaseIdentify";



function App() {

  return (

    <div className="mx-auto">

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
          <Route path="diseaseIdentify" element={<DiseaseIdentify></DiseaseIdentify>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
        </Route>

        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/contact" element={<Contact></Contact>} />

        <Route path="/dashboard/doctors" element={<Doctors></Doctors>} />

        <Route path="/udoctors" element={<UDoctors></UDoctors>} />

        <Route path="/doctor" element={<DoctorDetails></DoctorDetails>} />
        <Route path="/doctor/:doctorId" element={<DoctorDetails />}></Route>

        <Route path='/drDetails/:doctorId' element={<DrDetails></DrDetails>}></Route>


        <Route path="/emaserkrishi" element={<Emaserkrishi></Emaserkrishi>}></Route>
        <Route path="/krishi_abohaua" element={<Abohaua></Abohaua>}></Route>
        <Route path="/biseshPoramorsho" element={<BiseshPoramorsho></BiseshPoramorsho>}></Route>
        <Route path="/recent_innovation" element={<RecentInnovation></RecentInnovation>}></Route>
        <Route path="/bri" element={<BRI></BRI>}></Route>
        <Route path="/aush_download" element={<AushDownload></AushDownload>}></Route>
        <Route path="/bari" element={<Bari></Bari>}></Route>
        <Route path="/crop_production_tech" element={<CropProductionTech></CropProductionTech>}></Route>

        <Route path="/danadar" element={<Danadar></Danadar>}></Route>
        <Route path="/sobji" element={<Sobji></Sobji>}></Route>
        <Route path="/tel" element={<Tell></Tell>}></Route>
        <Route path="/mosla" element={<Mosla></Mosla>}></Route>
        <Route path="/kondal" element={<Kondal></Kondal>}></Route>



        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />

      </Routes>

      <ToastContainer />

    </div>

  );
}

export default App;
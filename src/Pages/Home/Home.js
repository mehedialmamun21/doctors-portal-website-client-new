import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
// import ExCare from "./ExCare";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Bann from "./Bann";
import AgriInfo from "./AgriInfo";

const Home = () => {
  return (
    <div className="">
      <div className="pb-14">
        {/* <Banner></Banner> */}
        <Bann></Bann>
        {/* <Info></Info> */}
        <AgriInfo></AgriInfo>
        <Services></Services>
        {/* <ExCare></ExCare> */}
        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
// import ExCare from "./ExCare";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div className="pb-28">
        <Banner></Banner>
        <Info></Info>
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

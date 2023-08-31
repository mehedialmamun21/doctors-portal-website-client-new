import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import ContactUs from "../Home/ContactUs"
// import ShowMedicine from "./ShowMedicine";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="pb-14 pt-16">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Featured></Featured>
        {/* <ShowMedicine></ShowMedicine> */}
        <Testimonials></Testimonials>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

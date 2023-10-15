import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import ContactUs from "../Home/ContactUs"
import Order from "../Order/Order/Order";
// import ShowMedicine from "./ShowMedicine";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="pb-14 pt-16">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Featured></Featured>
        <div className="text-center mt-28">
          <h4 className='text-black text-xl lg:text-3xl font-semibold font-mono pb-2'>Dental Products</h4>
          <h3 className='text-3xl lg:text-4xl pb-2 font-mono text-slate-600'>Order Online at Discount</h3>
        </div>
        <Order></Order>
        <Testimonials></Testimonials>
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

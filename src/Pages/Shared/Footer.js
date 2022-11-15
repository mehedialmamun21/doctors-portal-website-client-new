import React from 'react';
import footerImg from '../../assets/images/footer.png';

const Footer = () => {

    //display current date

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <footer style={{
            backgroundImage: `url(${footerImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className="p-10 mt-28">

            <div className='footer lg:mx-40'>
                <div>
                    <span className="footer-title text-xl">Services</span>
                    <a href='/#' className="link link-hover font-semibold text-stone-500">Monthly Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500">Emergency Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500">Weekly Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Oral Health</span>
                    <a href='/#' className="link link-hover font-semibold text-stone-500">Fluoride Treatment</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500">Cavity Checking</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Our Address</span>
                    <a href='/#' className="link link-hover font-semibold text-stone-500"> <span className='font-bold text-primary'>DENTAL HUB</span> <br /> House- 06, Road-04, Dinajpur, Bangladesh. <br /> Specialized Dental Hospital</a>
                </div>
            </div>

            <div className='text-center text-gray-500 py-20 lg:py-10'>
                <p className='font-semibold'>Copyright © <span className='font-semibold'>{date}</span> <span className='font-bold'> Dental Hub.</span> All rights are reserved.</p>
            </div>

        </footer>
    );

};

export default Footer;
import React from 'react';
import footerImg from '../../assets/images/footer.png';

const Footer = () => {

    //display current date

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <footer style={{
            // backgroundImage: `url(${footerImg})`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
        }} className="p-5 mt-20 bg-gray-800 pt-28">

            <div className='footer lg:pl-40'>
                <div>
                    <span className="footer-title text-xl text-white">Services</span>
                    <a href='/#' className="link link-hover font-semibold text-white font-mono text-sm">Monthly Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-white font-mono">Emergency Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-white font-mono">Weekly Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-white font-mono">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title text-xl text-white">Oral Health</span>
                    <a href='/#' className="link link-hover font-semibold text-white font-mono">Fluoride Treatment</a>
                    <a href='/#' className="link link-hover font-semibold text-white font-mono">Cavity Checking</a>
                    <a href='/#' className="link link-hover font-semibold text-white font-mono">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title text-xl text-white">Our Address</span>
                    <a href='/#' className="link link-hover font-semibold text-white"> <span className='font-bold text-lg text-primary'>DENTAL SOLUTIONS</span> <br /> <br /> Kazi's Heritage, House-49, Road-11 <br /> Specialized Dental Hospital</a>
                </div>

                <div>
                    <span className="footer-title text-xl text-white">Help Center</span>
                    <a href='/#' className="link link-hover font-semibold text-white"> 01521 - 413730 <br /> 01303 - 114858 <br /> 01404 - 020304</a>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-40 text-center text-white mt-24'>
                <p className='font-semibold font-mono'>© <span className='font-semibold'>{date}</span> <span className='font-bold'>Copyright Dental Solutions, Dinajpur.</span> <br /> All rights are reserved.</p>
                <p>Powered by : <a href="/#" className='text-lg font-semibold'> <u>Dental Solutions - Dinajpur</u> </a> </p>
            </div>

        </footer>
    );

};

export default Footer;
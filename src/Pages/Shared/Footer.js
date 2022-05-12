import React from 'react';
import footerImg from '../../assets/images/footer.png';

const Footer = () => {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <footer style={{
            backgroundImage: `url(${footerImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className="p-10 my-28">

            <div className='footer mx-40'>
                <div>
                    <span className="footer-title text-xl">Services</span>
                    <a href='/#' className="link link-hover">Emergency Checkup</a>
                    <a href='/#' className="link link-hover">Monthly Checkup</a>
                    <a href='/#' className="link link-hover">Weekly Checkup</a>
                    <a href='/#' className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Oral Health</span>
                    <a href='/#' className="link link-hover">Fluoride Treatment</a>
                    <a href='/#' className="link link-hover">Cavity Checking</a>
                    <a href='/#' className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Our Address</span>
                    <a href='/#' className="link link-hover">Dhanmondi, Lab-Aid (main branch)</a>
                </div>
            </div>

            <div className='text-center py-10'>
                <p>Copyright © {date} All rights are reserved by "LabAid - Dental Solutions"</p>
            </div>

        </footer>
    );
};

export default Footer;
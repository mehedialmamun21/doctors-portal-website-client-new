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
        }} className="p-5 mt-20 bg-slate-300 pt-28">

            <div className='footer lg:pl-40'>
                <div>
                    <span className="footer-title text-xl text-zinc-900">Services</span>
                    <a href='/#' className="link link-hover font-semibold text-stone-500 font-mono text-sm">Monthly Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500 font-mono">Emergency Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500 font-mono">Weekly Checkup</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500 font-mono">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title text-xl text-zinc-900">Oral Health</span>
                    <a href='/#' className="link link-hover font-semibold text-stone-500 font-mono">Fluoride Treatment</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500 font-mono">Cavity Checking</a>
                    <a href='/#' className="link link-hover font-semibold text-stone-500 font-mono">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title text-xl text-zinc-900">Our Address</span>
                    <a href='/#' className="link link-hover font-semibold text-stone-500"> <span className='font-bold text-lg text-zinc-900'>DENTAL SOLUTION</span> <br /> <br /> Kazi's Heritage, House-49, Road-11 <br /> Specialized Dental Hospital</a>
                </div>

                <div>
                    <span className="footer-title text-xl text-zinc-900">Our Address</span>
                    <a href='/#' className="link link-hover font-semibold text-stone-500"> <span className='font-bold text-lg text-zinc-900'>DENTAL SOLUTION</span> <br /> <br /> Kazi's Heritage, House-49, Road-11 <br /> Specialized Dental Hospital</a>
                </div>
            </div>

            <div className='text-center text-gray-500 py-20 lg:pt-28'>
                <p className='font-semibold font-mono'>Copyright © <span className='font-semibold'>{date}</span> <span className='font-bold'> Dental Solution.</span> All rights are reserved.</p>
            </div>

        </footer>
    );

};

export default Footer;
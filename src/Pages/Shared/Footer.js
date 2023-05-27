import React from 'react';
// import footerImg from '../../assets/images/footer.png';

import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    //display current date

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <footer style={{
            // backgroundImage: `url(${footerImg})`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
        }} className="p-5 mt-20 bg-gray-900 pt-28 border-t border-gray-700">

            <div className='footer lg:pl-40 grid lg:grid-cols-4'>
                <div>
                    <span className="footer-title text-xl text-slate-300">Services</span>
                    <a href='/#' className="link link-hover font-semibold text-slate-300 font-mono text-sm">Farm Management</a>
                    <a href='/#' className="link link-hover font-semibold text-slate-300 font-mono">Crop and Soil Monitoring</a>
                    <a href='/#' className="link link-hover font-semibold text-slate-300 font-mono">Training and Capacity Building</a>
                    <a href='/#' className="link link-hover font-semibold text-slate-300 font-mono">Supply Agricultural Inputs</a>
                    <a href='/#' className="link link-hover font-semibold text-slate-300 font-mono">Market Access and Advisory Services</a>
                    <a href='/#' className="link link-hover font-semibold text-slate-300 font-mono">Farm Machinery and Equipment</a>
                </div>

                <div>
                    <span className="footer-title text-xl text-slate-300">Our Address</span>
                    <a href='/#' className="link link-hover font-semibold text-slate-300"> <img src="https://i.postimg.cc/fRTFj31C/cropped-logo-web-1-1.png" alt="" /> <br /> <br /> Kazi's Heritage, House-49, Road-11</a>
                </div>

                <div>
                    <span className="footer-title text-xl text-slate-300">Help Center</span>
                    <a href='/#' className="link link-hover font-semibold text-slate-300"> 01521 - 413730 <br /> 01303 - 114858</a>
                    <div className="flex justify-end pr-64 py-5 text-slate-300">
                        <a href="/facebook" target="_blank"><FaFacebook className="mr-6 cursor-pointer text-blue-500 text-xl" /></a>
                        <a href="/youTube" target="_blank"><FaYoutube className="mr-6 cursor-pointer text-red-600 text-xl" /></a>
                        <a href="/Twitter" target="_blank"><FaTwitter className="mr-6 cursor-pointer text-blue-600 text-xl" /></a>
                        <a href="/Instagram" target="_blank"><FaInstagram className="mr-6 cursor-pointer text-pink-500 text-xl" /></a>
                        <a href="/LinkedIn" target="_blank"><FaLinkedin className="cursor-pointer text-blue-500 text-xl" /></a>
                    </div>
                </div>

                <div>
                    <img src="https://i.postimg.cc/j58bPM3V/stripe-logo-strip-payment-options-1.png" className='w-2/3' alt="" />
                    <img src="https://i.postimg.cc/GmJh9xRR/bkash-payment-logo-removebg-preview.png" className='w-2/3' alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-2 gap-40 text-center text-slate-300 mt-20'>
                <p className='font-semibold font-mono'>© <span className='font-semibold'>{date}</span> <span className='font-bold'>Copyright AjkerKrishi, Dinajpur.</span> <br /> All rights are reserved.</p>
                {/* <p>Powered by <a href="/#" className='text-lg font-semibold'> <span className='border px-2 py-1'> AjkerKrishi - Dinajpur </span> </a> </p> */}
                <div className='lg:flex lg:items-center lg:justify-center'>
                    <p className='lg:pr-5 pb-2 lg:pb-0'>Powered by</p>
                    <p className='border px-2 py-1'>AjkerKrishi - Dinajpur</p>
                </div>
            </div>

        </footer>
    );

};

export default Footer;
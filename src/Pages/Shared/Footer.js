import React from 'react';
import Chat from '../Home/Chat';
import { BsInstagram } from 'react-icons/bs';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

    //display current date

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <footer style={{

        }} className="border-t border-gray-300 bg-zinc-700">

            <div className='lg:flex items-center justify-center py-10 lg:py-8 border-b border-white mx-16 lg:mx-40 mb-0 lg:mb-10'>
                <Link to="/appointment"><button className='px-10 py-2 rounded-sm font-serif text-white border border-white hover:scale-105 duration-300'>BOOK ONLINE</button></Link>
                <p className='text-white pt-5 lg:pt-0 text-lg lg:text-2xl lg:pl-10'>Find available appointments</p>
            </div>

            <div className='footer lg:grid lg:grid-cols-4 px-16 py-5 lg:py-0 lg:px-40'>
                <div className='pl-5 lg:pl-0'>
                    <center>
                        <span className="footer-title text-xl text-white">Office Hours</span>
                        <p className="text-white font-mono text-lg pt-5">Sat 8:00 am - 5:00 pm</p>
                        <p className="text-white font-mono text-lg">Sun 8:00 am - 5:00 pm</p>
                        <p className="text-white font-mono text-lg">Mon 8:00 am - 5:00 pm</p>
                        <p className="text-white font-mono text-lg">Tue 8:00 am - 5:00 pm</p>
                        <p className="text-white font-mono text-lg">Wed 8:00 am - 5:00 pm</p>
                        <p className="text-white font-mono text-lg">Thu 8:00 am - 5:00 pm</p>

                    </center>
                </div>

                <div>
                    <center>
                        <span className="footer-title text-xl text-white">Contact Us</span>
                        <p href='/#' className="text-white pt-5"> <span className='text-lg'>57 Popular Street, Dinajpur, Bangladesh</span> <br /> <br /> <span className='text-lg'>( +880 ) 1521413730</span> <br /> <span className='text-lg'>hello@popularstreetdental.com</span> </p>
                        <Chat />
                    </center>
                </div>

                <div>
                    <center>
                        <span className="footer-title text-xl text-white">Instagram</span>
                        <p className="text-white text-center text-lg pt-5"> "The cool Popular dentist who wants teeth to look as </p>
                        <p className='text-white text-center text-lg'>nice as her instagram feed"</p>

                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" > <BsInstagram size="1.5rem" className='text-white mt-3' /> </a>
                    </center>
                </div>

                <div className='flex justify-center items-center'>
                    <img src="https://i.postimg.cc/j58bPM3V/stripe-logo-strip-payment-options-1.png" className='w-2/3' alt="" />
                </div>

            </div>


            <div className='grid grid-cols-1 px-12 lg:px-0 lg:flex lg:gap-3 items-center justify-center text-white mt-5 lg:mt-5 py-5 lg:py-7 text-sm bg-zinc-800'>
                <p className='font-mono pb-2 lg:pb-0'> <span className='text-lg'>©</span> <span className=''>{date}</span> <span className='pr-5'>ALL RIGHT RESERVED BY POPULAR DENTAL </span> <span className='invisible lg:visible'>|</span> </p>
                {/* <p className='font-mono pb-2 lg:pb-0'><a href="/#" className='pl-0 lg:pl-3 pr-3'> ACCESSIBILITY STATEMENT </a> <span className='invisible lg:visible'>|</span> </p> */}
                <div className='flex items-center'>
                    <a href="https://mehedi404.web.app/" target="_blank" rel="noreferrer" className='pl-0 lg:pl-3'> <p className='font-mono'> SITE DESIGN: <span className='bg-gray-100 text-black px-3 py-1 rounded-full font-semibold'>MEHEDI AL MAMUN</span> </p> </a>
                    <a href="https://mehedi404.web.app/" target="_blank" rel="noreferrer"><FaRegHandPointLeft className='ml-3 text-gray-100' size="1.3rem" /></a>
                </div>
            </div>

        </footer>
    );

};

export default Footer;
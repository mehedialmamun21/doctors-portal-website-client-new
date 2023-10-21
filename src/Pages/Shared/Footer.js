import React, { useEffect, useState } from 'react';
import Chat from '../Home/Chat';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {

    // Initialize the time state
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update the time every second using useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // Format the date and time
    const date = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
    const time = currentTime.getHours() + ':' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();

    return (
        <footer style={{}} className="border-t border-gray-300 bg-zinc-700">

            <center>
                <div className='lg:flex items-center justify-center py-10 lg:py-8 border-b border-white mx-16 lg:mx-40 mb-0 lg:mb-10'>
                    <Link to="/appointment">
                        <button className='px-10 py-2 rounded-sm font-serif text-white border border-white hover:scale-105 duration-300'>BOOK ONLINE</button>
                    </Link>
                    <p className='text-white pt-5 lg:pt-0 text-lg lg:text-2xl lg:pl-10'>Find available appointments</p>
                </div>
            </center>

            <div className='footer lg:grid lg:grid-cols-4 px-20 lg:px-40 py-5 lg:py-0'>

                {/* <div className=''> */}

                <center>
                    <span className="footer-title text-xl text-white">Office Hours</span>
                    <p>
                        <span className="text-white font-mono text-lg pt-5">Sat 8 am - 5 pm</span>
                        <br />
                        <span className="text-white font-mono text-lg">Sun 8 am - 5 pm</span>
                        <br />
                        <span className="text-white font-mono text-lg">Mon 8 am - 5 pm</span>
                        <br />
                        <span className="text-white font-mono text-lg">Tue 8 am - 5 pm</span>
                        <br />
                        <span className="text-white font-mono text-lg">Wed 8 am - 5 pm</span>
                        <br />
                        <span className="text-white font-mono text-lg">Thu 8 am - 5 pm</span>
                    </p>
                </center>

                {/* </div> */}

                <div>
                    <center>
                        <span className="footer-title text-xl text-white">Contact Us</span>
                        <p href='/#' className="text-white pt-5">
                            <span className='text-lg'>Kazi's Heritage, House-49, Dinajpur, Bangladesh</span>
                            <br />
                            <br />
                            <span className='text-lg'>( +880 ) 1521413730</span>
                            <br />
                            <span className='text-lg'>hello@dentamart.com</span>
                        </p>
                        <Chat />
                    </center>
                </div>

                <div>
                    <center>
                        <span className="footer-title text-xl text-white">Instagram</span>
                        <p className="text-white text-center text-lg pt-5"> "The cool DentaMart dentist who wants teeth to look as </p>
                        <p className='text-white text-center text-lg'>nice as Instagram feed"</p>
                    </center>
                </div>

                <div className='flex justify-center items-center'>
                    <img src="https://i.postimg.cc/j58bPM3V/stripe-logo-strip-payment-options-1.png" className='w-2/3' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 px-12 lg:px-0 lg:flex lg:gap-3 items-center justify-center text-white mt-5 lg:mt-5 py-5 lg:py-7 text-sm bg-zinc-800'>

                <p className='font-mono pb-2 lg:pb-0'>
                    <span className='text-white mr-2 lg:mr-4 border border-white rounded-sm px-2 py-1'>{time}</span>
                    <span className=''>{date} </span>
                    <span className='pl-0 lg:pl-5 lg:pr-5 mt-3 lg:mt-0 lg:inline block'>© ALL RIGHT RESERVED BY DENTAMART</span>
                    <span className='invisible lg:visible'>|</span>
                </p>

                <div className='flex items-center'>
                    <a href="https://mehedi404.web.app/" target="_blank" rel="noreferrer" className='pl-0 lg:pl-3'>
                        <p className='font-mono'>
                            <span className='relative group'>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                                    <span className='flex items-center'>SITE DESIGN & DEVELOPED BY:</span> <span className='flex items-center justify-center rounded-full border border-white text-white py-1'>MD. MEHEDI AL MAMUN</span>
                                </div>
                                <span className='opacity-0 group-hover:opacity-100 bg-sky-600 text-white px-3 py-1 rounded-full text-xs absolute top-0 -mt-7 left-1/2 transform -translate-x-2/2'>
                                    More about <span className='font-semibold'>Mehedi</span>
                                </span>
                            </span>
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

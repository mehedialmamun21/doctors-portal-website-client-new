import React from 'react';
import featuredImg from '../../../assets/images/parallel-upper.jpg';
import './Featured.css';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <section className='featured-item bg-fixed'>
            <div className='px-40'>
                <div className='mx-auto w-5/12 pt-10'>
                    {/* <h2 className='flex items-center justify-center text-zinc-900 text-xl pt-7'>check it out</h2> */}
                    <p className='uppercase flex items-center justify-center py-4 text-2xl border-y-2 border-y-white mt-2 mb-7 font-semibold font-serif text-black'>Make an appointment today</p>
                </div>
                <div className=' grid grid-cols-2 justify-center items-center px-20 pb-20 pt-12'>
                    <div className='w-9/12'>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className='ml-10 text-zinc-900 w-full'>
                        <p className='text-lg uppercase'>We Create Beautiful Smiles</p>
                        <p className='text-lg py-7 font-serif'>The DentaMart is a modern dental clinic,
                            specialized in advanced diagnostics and treatment of dental and oral disorders.
                            We offer comprehensive services from all fields of dentistry.
                            In addition to high-end dental equipment, all services are provided in a comfortable,
                            luxury environment.</p>

                        <Link to="/appointment"><button className='text-white px-12 py-3 rounded-sm hover:scale-105 duration-300 font-serif bg-gradient-to-r from-sky-500 to-orange-500 uppercase'>Get Started</button></Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
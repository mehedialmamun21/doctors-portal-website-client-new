import React from 'react';
// import { Link } from 'react-router-dom';
import chair from '../../assets/images/chair.png';
// import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <section>
            <div className="hero pt-0 pb-10 lg:py-10 lg:h-[430px] bg-banner-section-backImg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="lg:max-w-sm rounded-lg lg:ml-20" />
                    <div>
                        <marquee scrollamount="12" className='text-2xl pt-5 lg:pt-0 lg:text-4xl text-zinc-800 font-semibold'>
                            Your new smile starts here
                        </marquee>

                        {/* <p className="py-6 text-zinc-700 w-full lg:w-5/6">Our team is filled with experienced professionals who
                        are all dedicated to your continued dental health. It is our mission to
                        keep every patient educated and comfortable during their visits, and we
                        will do everything we can to streamline your experience and leave you
                        feeling refreshed and relaxed. Whether you're getting a cleaning, a root
                        canal, or simply require help understanding your insurance, we're here for
                        you!</p> */}
                        {/* <Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
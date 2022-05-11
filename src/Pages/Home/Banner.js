import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl ml-7" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Our team is filled with experienced professionals who
                        are all dedicated to your continued dental health. It is our mission to
                        keep every patient educated and comfortable during their visits, and we
                        will do everything we can to streamline your experience and leave you
                        feeling refreshed and relaxed. Whether you're getting a cleaning, a root
                        canal, or simply require help understanding your insurance, we're here for
                        you!</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
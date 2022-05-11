import React from 'react';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';
import backPic from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='my-28'>

            <div className='bg-contact-section-backImg'>
                <h5 className='text-base text-secondary font-bold text-center pt-10'>Contact Us</h5>
                <h2 className='text-2xl text-center text-white'>Stay Connected With Us</h2>

                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="card flex-shrink-0 w-full max-w-sm">
                            <div class="card-body">
                                <div class="form-control">
                                    <input type="text" placeholder="Email Address" class="input input-bordered" />
                                </div>

                                <input type="text" placeholder="Subject" class="input input-bordered max-w-xs w-96" />

                                <textarea class="textarea textarea-bordered" placeholder="Your Message"></textarea>

                                <div class="form-control mt-4 items-center">
                                    <PrimaryButton>Submit</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
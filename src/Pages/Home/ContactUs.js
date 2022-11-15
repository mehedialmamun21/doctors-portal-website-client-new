import React from 'react';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';

const ContactUs = () => {

    return (
        <section className='my-20'>

            <div className='bg-contact-section-backImg'>

                <h2 className='text-2xl text-center text-white pt-10'>Stay Connected With Us</h2>

                <div className='w-full lg:w-full text-black px-10 md:px-20 lg:px-80 py-10'>
                    <form className='row'>
                        <div className='flex flex-col gap-4 w-full'>
                            <div className='flex gap-4 w-full'>
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control bg-[#EFEFEF] w-full py-4 px-3 outline-none rounded-sm' required />

                                <input type="email" name="user_email" placeholder='Your Email' className='form-control bg-[#EFEFEF] w-full py-4 px-3 outline-none rounded-sm' required />
                            </div>

                            <input name="user_subject" type="text" placeholder="Subject" className="form-control bg-[#EFEFEF] py-4 px-3 h-14 w-full mt-2 focus:outline-none rounded-sm"></input>

                            <div>
                                <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control bg-[#EFEFEF] w-full mt-2 py-4 px-3 outline-none rounded-sm' required />
                            </div>
                            <center>
                                <input type="submit" value="Send Message" className='form-control btn bg-slate-800 text-white w-3/4 lg:w-2/3 py-3 px-3 lg:px-8 mt-5 rounded-3xl border-none font-bold' />
                            </center>

                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
};

export default ContactUs;
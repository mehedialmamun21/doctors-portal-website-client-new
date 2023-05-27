import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8c82sgd', 'template_ycoyo1p', form.current, 'WPhPoqlYxWHkHvPyC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert("Thank you! Your message has been successfully sent.");
        e.target.reset()

    };

    return (
        <section className='mt-20'>

            <h4 className='text-3xl text-secondary pb-5 pl-5 lg:pl-40 lg:pb-10'>Contact With Us</h4>

            <div className='flex flex-col md:flex-row lg:flex-row lg:px-40 px-5 pb-5 lg:pb-16'>

                {/* <div className='w-full md:w-5/12 space-y-5 bg-home-contact-backImg rounded-md mr-12 px-7 py-5'> */}
                <div className='w-full md:w-5/12 space-y-5 rounded-md mr-12 lg:px-7 lg:py-5'>
                    <div className='flex gap-4'>
                        <span className='text-slate-700'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-green-600"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </span>
                        <div>
                            <h2 className='text-2xl text-slate-700 font-semibold font-mono'>Have a Question?</h2>
                            <p class="text-slate-700 font-mono">We are here to help</p>
                            <p class="text-slate-700 font-mono">Email us at "ajkerkrishibd@gmail.com"</p>
                        </div>
                    </div>
                    < hr />
                    <div>
                        <div className='flex gap-4'>
                            <span className='text-slate-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-green-600"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                            </span>
                            <div>
                                <h2 className='text-2xl text-slate-700 font-semibold font-mono'>Current Location</h2>
                                <p class="text-slate-700 font-mono">Dinajpur,Bangladesh.</p>

                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className='flex gap-4'>
                            <span className='text-slate-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-green-600"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                            </span>
                            <div>
                                <h2 className='text-2xl text-slate-700 font-semibold font-mono'>Contact With Us</h2>
                                <p class="text-slate-700 font-mono">Email: ajkerkrishibd@gmail.com</p>
                                <p class="text-slate-700 font-mono">Phone : +8801521-413730</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-8 md:mt-0 md:w-7/12 text-black'>
                    <form className='row' ref={form} onSubmit={sendEmail}>

                        <div className='flex flex-col gap-4 w-full'>

                            <div className='flex gap-4 w-full'>
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control bg-slate-200 w-full py-4 px-3 outline-none rounded-sm font-mono' required />

                                <input type="email" name="user_email" placeholder='Your Email' className='form-control bg-slate-200 w-full py-4 px-3 outline-none rounded-sm font-mono' required />
                            </div>

                            <input name="user_subject" type="text" placeholder="Your Subject" className="form-control bg-slate-200 py-4 px-3 h-14 w-full mt-2 focus:outline-none rounded-sm font-mono"></input>

                            <div>
                                <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control bg-slate-200 w-full mt-2 py-4 px-3 outline-none rounded-sm font-mono' required />
                            </div>

                            <input type="submit" value="Send Message" className='form-control border-none hover:scale-105 duration-300 btn bg-gradient-to-r from-secondary to-primary text-slate-700 w-2/4 lg:w-1/3 py-3 lg:px-8 mt-2 rounded-sm font-semibold' />
                        </div>

                    </form>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;
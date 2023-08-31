import Footer from '../Shared/Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Facebook from '../../assets/images/facebook.png';
import Linkedin from '../../assets/images/linkedin.png';
import Thumbup from '../../assets/images/thumbup.png';

const Contact = () => {

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
        <section className=''>

            <div className='flex flex-col lg:gap-12 md:flex-row lg:flex-row pt-24 lg:pt-14 lg:pb-28 px-5 lg:px-40 mb-10 lg:mb-10 h-screen'>

                <div className='w-full lg:w-6/12 space-y-5'>

                    <div className='flex gap-4 bg-white border border-zinc-400 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] px-5 py-6'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-cyan-500"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </span>
                        <div>
                            <h2 className='text-2xl font-semibold font-mono text-zinc-700'>Have a question?</h2>
                            <p class="font-mono text-zinc-600">We are here to help</p>
                            <p class="text-zinc-500 font-mono">Email: skylinedental@gmail.com</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex gap-4 bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] my-4 lg:my-8 px-5 py-6 border border-zinc-400'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-cyan-500"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                            </span>
                            <div>
                                <h2 className='text-2xl font-semibold font-mono text-zinc-700'>Contact With Us</h2>
                                <p class="font-mono text-zinc-600">Email: skylinedental@gmail.com</p>
                                <p class="text-zinc-500 font-mono">Phone: +8801521-413730</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-full lg:w-10/12 mt-8 lg:mt-0 text-black px-5 lg:px-14 bg-slate-100 pb-0 lg:pb-0'>
                    <div className='px-2 lg:px-24 py-5 lg:py-10 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border border-zinc-400'>

                        <form className='row' ref={form} onSubmit={sendEmail}>
                            <div className='flex flex-col gap-5 w-full'>
                                <div className='flex gap-4 w-full'>
                                    <input type="text" name="user_name" placeholder='Your Name' className='form-control bg-white w-full py-4 px-3 border border-zinc-400 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />

                                    <input type="email" name="user_email" placeholder='Your Email' className='form-control bg-white w-full py-4 px-3 border border-zinc-400 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />
                                </div>

                                <input name="user_subject" type="text" placeholder="Subject" className="form-control bg-white py-4 px-3 h-14 w-full mt-2 border border-zinc-400 focus:border-zinc-400 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></input>

                                <div>
                                    <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control bg-white w-full mt-2 py-4 px-3 border border-zinc-400 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />
                                </div>

                                <input type="submit" value="Send Message" className='form-control hover:scale-105 duration-300 btn bg-gradient-to-r from-sky-500 to-orange-500 text-white w-2/4 lg:w-1/2 py-3 lg:px-8 mt-2 rounded-sm font-semibold border border-white hover:border-white' />
                            </div>

                        </form>
                    </div>
                </div>

            </div>

            <Footer></Footer>

        </section>
    );
};

export default Contact;
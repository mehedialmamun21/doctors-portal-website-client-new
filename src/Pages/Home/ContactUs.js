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
        <section className='my-20'>

            <div className='flex flex-col md:flex-row lg:flex-row  bg-contact-section-backImg px-5 py-10'>

                <div className='w-full md:w-5/12 space-y-5 text-white'>
                    <div className='flex gap-4'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-orange-500"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </span>
                        <div>
                            <h2 className='text-2xl font-semibold'>Have a question?</h2>
                            <p class="text-gray-400">We are here to help</p>
                            <p class="text-orange-500">Email us at "dentalsolution@gmail.com"</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-orange-500"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                            </span>
                            <div>
                                <h2 className='text-2xl font-semibold'>Current Location</h2>
                                <p class="text-gray-400">Dinajpur,Bangladesh.</p>
                                <p class="text-orange-500">Serving clients worldwide</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-8 text-orange-500"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                            </span>
                            <div>
                                <h2 className='text-2xl font-semibold'>Contact With Us</h2>
                                <p class="text-gray-400">Email: dentalsolution@gmail.com</p>
                                <p class="text-orange-500">Phone : +8801521-413730</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-8 md:mt-0 md:w-7/12 text-black'>
                    <form className='row' ref={form} onSubmit={sendEmail}>

                        <div className='flex flex-col gap-4 w-full'>

                            <div className='flex gap-4 w-full'>
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control bg-white w-full py-4 px-3 outline-none rounded-sm' required />

                                <input type="email" name="user_email" placeholder='Your Email' className='form-control bg-white w-full py-4 px-3 outline-none rounded-sm' required />
                            </div>

                            <input name="user_subject" type="text" placeholder="Subject" className="form-control bg-white py-4 px-3 h-14 w-full mt-2 focus:outline-none rounded-sm"></input>

                            <div>
                                <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control bg-white w-full mt-2 py-4 px-3 outline-none rounded-sm' required />
                            </div>

                            <input type="submit" value="Send Message" className='form-control btn bg-gradient-to-r from-secondary to-primary text-white w-2/4 lg:w-1/3 py-3 lg:px-8 mt-5 rounded-sm font-bold border-none' />

                        </div>

                    </form>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;
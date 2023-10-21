import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiMessageDots } from 'react-icons/bi';
import './ContactUs.css';

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
        <section className='flex flex-col items-center justify-center mb-5 lg:mb-14 mt-10 lg:mt-20'>

            <div className='w-full lg:w-6/12 mt-8 lg:mt-0 rounded-sm text-black px-5 lg:px-5 pb-0 lg:pb-0'>

                <div className='flex items-center justify-center'>
                    <h4 className='text-2xl lg:text-3xl text-black font-semibold pb-4 lg:pb-7 flex items-center justify-center'> Get In Touch </h4>
                </div>

                <div className='px-2 lg:px-24 py-5 lg:py-10 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-300 rounded-sm'>

                    <form className='row' ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col gap-5 w-full'>
                            <div className='flex gap-4 w-full'>
                                <input type="text" name="user_name" placeholder='Your Name' className='form-control stylish-input' required />

                                <input type="email" name="user_email" placeholder='Your Email' className='form-control stylish-input' required />
                            </div>

                            <input name="user_subject" type="text" placeholder="Subject" className="form-control stylish-input"></input>

                            <div>
                                <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control stylish-textarea' required />
                            </div>

                            <div className='flex justify-end'>
                                <input type="submit" value="Send Message" className='form-control stylish-button' />
                            </div>

                        </div>

                    </form>
                </div>
            </div>

        </section >
    );
};

export default ContactUs;




// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { BiMessageDots } from 'react-icons/bi';

// const ContactUs = () => {

//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_8c82sgd', 'template_ycoyo1p', form.current, 'WPhPoqlYxWHkHvPyC')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });

//         alert("Thank you! Your message has been successfully sent.");
//         e.target.reset()

//     };

//     return (
//         <section className='flex flex-col items-center justify-center mb-14 mt-20'>

//             <div className='w-full lg:w-6/12 mt-8 lg:mt-0 rounded-sm text-black px-5 lg:px-5 pb-0 lg:pb-0'>

//                 <div className='flex items-cetner justify-center'>
//                     <h4 className='text-2xl lg:text-3xl text-black font-semibold pb-7 flex items-center justify-center'> Get In Touch </h4>
//                     <span className='pl-5 text-gray-700 flex items-center pb-7'><BiMessageDots size="2rem" /></span>
//                 </div>

//                 <div className='px-2 lg:px-24 py-5 lg:py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

//                     <form className='row' ref={form} onSubmit={sendEmail}>
//                         <div className='flex flex-col gap-5 w-full'>
//                             <div className='flex gap-4 w-full'>
//                                 <input type="text" name="user_name" placeholder='Your Name' className='form-control bg-white w-full py-4 px-3 border border-zinc-500 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />

//                                 <input type="email" name="user_email" placeholder='Your Email' className='form-control bg-white w-full py-4 px-3 border border-zinc-500 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />
//                             </div>

//                             <input name="user_subject" type="text" placeholder="Subject" className="form-control bg-white py-4 px-3 h-14 w-full mt-2 border border-zinc-500 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></input>

//                             <div>
//                                 <textarea name='message' rows="4" placeholder='Type Your Message' className='form-control bg-white w-full mt-2 py-4 px-3 border border-zinc-500 rounded-sm shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' required />
//                             </div>

//                             <div className='flex justify-end'>
//                                 <input type="submit" value="Send Message" className='form-control hover:scale-105 duration-300 btn text-white bg-gradient-to-r from-sky-500 to-orange-500 w-2/4 lg:w-5/12 lg:px-8 mt-2 rounded-sm font-semibold border-none' />
//                             </div>

//                         </div>

//                     </form>
//                 </div>
//             </div>

//         </section >
//     );
// };

// export default ContactUs;
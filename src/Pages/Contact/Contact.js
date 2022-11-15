import React from 'react';
import qrCode from '../../../src/assets/images/qr-code.png';
import Footer from '../Shared/Footer';
const Contact = () => {

    return (
        <section>

            <div className='lg:flex'>

                <div className='px-5 py-5 lg:w-1/2'>
                    <p className="font-bold text-primary mb-3 text-lg">Our Glorious Story</p>
                    <p>Dinajpur Dental Hub is a well-known name in Dental and Oral Care in Bangladesh. Dinajpur Dental Hub has been leading the way in Dental Treatment in Bangladesh for more than 40 years in keeping with the evolution of time and the modernization of the era. </p>
                    <p>We have served more than 50,000 patients. We have a successful track record of over 800 dental implant surgeries, thousands of root canals and dental prostheses. With the work experience in this center, many famous dental surgeons of the country are contributing to the Dentistry field with reputedly. With the mentality of serving people, this center is still a place of excellence for dental treatment for patients from home and abroad and a trustworthy institution for dentistry.</p>
                </div>

                <div className='pl-5 lg:pl-20 py-5 lg:w-1/2'>
                    <div>
                        <p className="font-bold mb-3 text-primary text-lg">Our Location</p>
                        <p> <span className="font-semibold">Address:</span> House- 06, Road-04, Dinajpur, Bangladesh.</p>
                        <p> <span className="font-semibold">Hours:</span> Open 24 hours</p>
                    </div>
                    <br />
                    <div className='border-l-4 border-green-400'>
                        <div className='pl-5'>
                            <p> <span className="font-semibold">Phone: </span> 09666-710606, 01303-115423</p>
                            <p> <span className="font-semibold">Fax: </span> +88 02 9615497</p>
                            <p> <span className="font-semibold">Email: </span> <span className='font-bold'> dentalhub@gmail.com </span> </p>
                            <br />
                            <p> <span className="font-semibold">For Appointment: </span> 03444-768656</p>
                            <p> <span className="font-semibold">Emergency: </span> 03444-768656</p>
                            <p> <span className="font-semibold">Website: </span> <span className='font-bold'> www.dentalhub.com </span> </p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='lg:flex'>

                <div className="px-5 pt-5 pb-10 lg:py-5 lg:w-1/2">
                    <p className="font-bold text-primary mb-3 text-lg">What Makes Us Special</p>
                    <div className='border-l-4 border-orange-400'>
                        <div className='pl-5 font-semibold'>
                            <ul>
                                <li>Laser Dentistry</li>
                                <li>Oral & Maxillofacial Surgery</li>
                                <li>Dental Implant</li>
                                <li>Painless Injection</li>
                                <li>Digital Smile Design</li>
                                <li>Cosmetic Dentistry</li>
                                <li>Autism and Special Patient Dentistry</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='pl-5 lg:pl-20 py-5 lg:w-1/2'>
                    <p className="font-bold text-primary mb-3 text-lg">QR Code of Dental Hub</p>
                    <img src={qrCode} alt="" className='w-56 lg:w-48' />
                </div>

            </div>

            <Footer></Footer>

        </section>
    );
};

export default Contact;
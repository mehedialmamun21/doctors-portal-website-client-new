import React from 'react';
import qrCode from '../../../src/assets/images/qr-code.png';

const Contact = () => {

    return (
        <section className='lg:flex h-screen bg-gray-100'>

            <div className='px-10 lg:px-10 py-10 lg:w-1/2'>
                <p> <span className="font-semibold text-lg">Address: </span>House- 06, Road-04, Dinajpur, <br />Bangladesh.</p>
                <br />
                <p> <span className="font-semibold text-lg">Phone: </span> 09666-710606, 01303-115423</p>
                <p> <span className="font-semibold text-lg">Fax: </span> +88 02 9615497</p>
                <p> <span className="font-semibold text-lg">Email: </span> <span className='font-semibold text-primary text-lg'> doctorsbd@gmail.com </span> </p>
                <p> <span className="font-semibold text-lg">For Appointment: </span> 03444-768656</p>
                <p> <span className="font-semibold text-lg">Emergency: </span> 03444-768656</p>
                <p> <span className="font-semibold text-lg">Website: </span> <span className='font-semibold text-primary text-lg'> www.doctorsbd.com </span> </p>
            </div>

            <div className='px-5 lg:px-10 py-10 lg:w-1/2'>
                <center><img src={qrCode} alt="" className='w-2/5' /></center>
                <center><p className='text-center mt-5 font-bold bg-gray-200 w-2/5 py-2 rounded-3xl'>QR Code</p></center>
            </div>

        </section>
    );
};

export default Contact;
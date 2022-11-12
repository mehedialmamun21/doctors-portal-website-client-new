import React from 'react';
import qrCode from '../../../src/assets/images/qr-code.png';

const Contact = () => {

    return (
        <div className='flex'>
            <div className='my-10 px-5 py-10 bg-gray-100 w-1/2'>
                <p> <span className="font-semibold text-lg">Address: </span>House- 06, Road-04, Dhanmondi <br /> Dhaka-1205, Bangladesh.</p>
                <br />
                <p> <span className="font-semibold text-lg">Phone: </span> 09666-710606, 01303-115423</p>
                <p> <span className="font-semibold text-lg">Fax: </span> +88 02 9615497</p>
                <p> <span className="font-semibold text-lg">Email: </span> <span className='font-semibold text-primary text-lg'> doctorsbd@gmail.com </span> </p>
                <p> <span className="font-semibold text-lg">For Appointment: </span> 03444-768656</p>
                <p> <span className="font-semibold text-lg">Emergency: </span> 03444-768656</p>
                <p> <span className="font-semibold text-lg">Website: </span> <span className='font-semibold text-primary text-lg'> www.doctorsbd.com </span> </p>
            </div>
            <div className='my-10 px-5 py-10 bg-gray-100 w-1/2'>
                <div className='mb-3 font-bold text-xl'>
                    <p className='text-amber-500'>QR code :</p>
                </div>
                <div>
                    <img src={qrCode} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
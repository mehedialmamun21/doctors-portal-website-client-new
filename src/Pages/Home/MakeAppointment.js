import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointmentPic from '../../assets/images/appointment.png';
import PrimaryButton from '../../component/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section style={{
            // background: `url(${appointmentPic})`
        }}
            className='flex justify-center items-center py-7 px-5 lg:px-40 bg-contact-section-backImg'>
            <div className='flex-1 hidden lg:block bg-fixed'>
                {/* <img className='mt-[-354px]' src={doctor} alt="" /> */}
                <img className='h-90 flex justify-center items-center' src={doctor} alt="" />
            </div>
            <div className='flex-1 lg:px-10 py-7'>
                <div className='pb-14'>
                    {/* <h3 className='text-2xl text-cyan-500 pb-2 font-serif'>Appointment</h3> */}
                    <h2 className='text-4xl text-slate-200 font-serif text-center'>Make an appointment Today</h2>
                </div>
                {/* <p className='text-slate-300 pt-6 pb-7 font-serif'>The first step towards a beautiful,
                    healthy smile is to schedule for an appointment.
                    Please contact our office by phone or complete the associate appointment request form.
                    Our practice is conveniently located Spearwood.
                    Plenty of parking is available in the front.
                    We are accessible via public transport. After - hours care is available.
                    We are open on Saturdays and Sundays. We are committed to give you the best service.
                    Thank you..</p> */}
                <center><Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link></center>
            </div>
        </section>
    );
};

export default MakeAppointment;
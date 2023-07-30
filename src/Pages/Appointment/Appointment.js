import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className=''>
            <div className='pb-28'>
                <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
                <AvailableAppointments date={date}></AvailableAppointments>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
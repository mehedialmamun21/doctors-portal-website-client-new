import React, { useState } from 'react';
import dentistChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    // const [selected, setSelected] = useState(new Date());
    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day : </p>;
    if (selected) {
        footer = <p>You have selected : {format(selected, 'PP')}</p>;
    }

    return (
        <section>
            <div className="hero min-h-screen bg-banner-section-backImg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={dentistChair} alt="" className="max-w-sm rounded-lg shadow-2xl lg:ml-20" />
                    <div className='lg:pr-10'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;
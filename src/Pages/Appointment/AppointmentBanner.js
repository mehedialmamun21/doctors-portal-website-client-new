import dentistChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero bg-banner-section-backImg pt-0 pb-0 lg:py-14">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={dentistChair} alt="" className="lg:max-w-sm rounded-lg shadow-2xl lg:ml-20" />
                <div className='lg:pr-10'>
                    <div className='pt-7 lg:pt-0'>
                        {/* <marquee scrollamount="10" className='text-lg text-center text-primary'>
                            Choose your Appointment date
                        </marquee> */}
                        <p className='text-lg text-center text-primary font-semibold'>Set your Appointment date from here</p>
                        <div>
                            <DayPicker
                                mode="single"
                                date={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AppointmentBanner;
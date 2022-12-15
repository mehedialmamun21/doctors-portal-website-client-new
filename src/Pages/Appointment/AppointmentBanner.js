import dentistChair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero bg-banner-section-backImg pt-0 pb-0 lg:py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={dentistChair} alt="" className="lg:max-w-sm rounded-lg shadow-2xl lg:ml-20" />
                <div className='lg:pr-10'>
                    <div>
                        <marquee scrollamount="10" className='text-lg text-center text-blue-800 font-semibold rounded-2xl'>
                            Choose your appointment date
                        </marquee>
                        <div className='py-5'>
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
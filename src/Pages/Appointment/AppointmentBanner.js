// import dentistChair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { FaArrowRight } from 'react-icons/fa';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero bg-banner-section-backImg lg:px-44 py-5">

            <div className="hero-content grid grid-cols-1 lg:grid-cols-3 gap-0 lg:border-2 lg:border-zinc-300">

                <div className='pt-7 lg:pt-0 flex justify-center items-center'>

                    <div className='rounded-lg w-96'>
                        <DayPicker
                            mode="single"
                            date={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <FaArrowRight size='2rem' />
                </div>

                <div className='text-center text-2xl'>
                    <div className='pb-9'>Available Appointments on</div>
                    <span className='text-zinc-700 text-2xl border border-cyan-400 bg-slate-100 px-20 py-2 rounded-sm font-semibold'>{format(date, 'PP')}</span>
                </div>

            </div>
        </div >
    );
};

export default AppointmentBanner;
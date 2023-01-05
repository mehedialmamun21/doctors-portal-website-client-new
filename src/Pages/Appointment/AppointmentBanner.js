// import dentistChair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { FaLongArrowAltRight } from 'react-icons/fa';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero bg-banner-section-backImg lg:px-40 py-5">

            <div className="hero-content grid grid-cols-1 lg:grid-cols-3 gap-0 lg:border-2 rounded-2xl lg:border-gray-300">

                <div className='pt-7 lg:pt-0 flex justify-center items-center'>

                    <div className='rounded-lg w-96'>
                        <DayPicker
                            mode="single"
                            date={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>

                <div className='flex justify-center items-center text-gray-500'>
                    <FaLongArrowAltRight size='2rem' />
                </div>

                <div className='text-center text-2xl'>
                    <div className='pb-7 font-semibold text-zinc-700'>Available Appointments on</div>
                    <span className='text-zinc-700 text-xl border bg-slate-100 px-16 py-4 rounded-sm font-semibold'>{format(date, 'PP')}</span>
                </div>

            </div>
        </div >
    );
};

export default AppointmentBanner;
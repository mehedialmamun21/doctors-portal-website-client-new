// import dentistChair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { BsChevronCompactRight } from 'react-icons/bs';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        // <div className="hero bg-banner-section-backImg lg:px-80 py-5">
        <div className="hero lg:px-72 py-5">

            <div className="hero-content grid grid-cols-1 lg:grid-cols-3 gap-0 lg:border-2 rounded-lg bg-gray-100 lg:border-gray-300">

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
                    <BsChevronCompactRight size={30} />
                </div>

                <div className='text-center text-2xl'>
                    <div className='pb-7 font-semibold text-zinc-700'>Available Appointments on</div>
                    <span className='text-primary text-xl border bg-white px-16 py-4 rounded-sm font-semibold'>{format(date, 'PP')}</span>
                </div>

            </div>
        </div >
    );
};

export default AppointmentBanner;
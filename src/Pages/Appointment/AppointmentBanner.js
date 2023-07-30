// import dentistChair from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { ImArrowDown, ImArrowRight } from 'react-icons/im';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';

const AppointmentBanner = ({ date, setDate }) => {
    return (

        // <div className="hero px-5 lg:px-64 pt-10 lg:pt-10 pb-10 lg:pb-14">
        <div className="hero px-5 lg:px-64 pt-24 lg:pt-32 pb-10 lg:pb-14">

            <div className="hero-content grid grid-cols-1 lg:grid-cols-3 rounded-sm text-lg text-black shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:px-36 bg-sky-300">

                <div className='lg:pb-0 flex justify-center items-center'>

                    <div className='rounded-lg w-80 lg:w-96 font-mono'>
                        <DayPicker
                            mode="single"
                            date={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>

                <div className='flex justify-center items-center text-white invisible lg:visible'>
                    {/* <BsChevronCompactRight size="3rem" /> */}
                    {/* <BiRightArrow size="2rem" /> */}
                    {/* <ImArrowRight size="2rem" /> */}
                    <BiRightArrow size="2rem" />
                </div>

                <div className='text-center text-lg lg:text-2xl'>
                    <div className='pb-5 lg:pb-10 font-semibold text-black font-mono'>Available Appointments on</div>
                    <span className='text-black bg-white px-5 lg:px-7 py-2 lg:py-2 rounded-sm font-semibold font-mono lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>{format(date, 'PP')}</span>
                    <center><BiDownArrow size="2rem" className='mt-20 text-green-500 invisible lg:invisible' /></center>

                </div>

            </div>

        </div >
    );
};

export default AppointmentBanner;
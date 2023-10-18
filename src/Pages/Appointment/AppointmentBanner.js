import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { BiDownArrow } from 'react-icons/bi';
import { IoArrowRedoOutline } from 'react-icons/io5';

const AppointmentBanner = ({ date, setDate }) => {
    return (

        <section>
            <div className="hero px-5 lg:px-60 pt-24 lg:pt-20 pb-10 lg:pb-0">

                <div className="hero-content grid grid-cols-1 lg:grid-cols-3 rounded-sm text-lg text-black lg:px-36">

                    <div className='lg:pb-0 flex justify-center items-center'>

                        <div className='rounded-lg w-80 lg:w-96 font-mono'>
                            <DayPicker
                                mode="single"
                                date={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>

                    <div className='flex justify-center items-center text-zinc-700 invisible lg:visible'>
                        <IoArrowRedoOutline size="1.8rem" />
                    </div>

                    <div className='text-center'>
                        <div className='pb-5 lg:pb-7 text-black font-mono text-lg lg:text-2xl'>Available Appointments on</div>
                        <span className='text-black bg-white border border-gray-300 px-5 lg:px-8 py-2 lg:py-1 rounded-full font-mono lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-lg lg:text-xl'>{format(date, 'PP')}</span>
                        {/* <center><BiDownArrow size="2rem" className='mt-20 text-green-500 invisible lg:invisible' /></center> */}

                    </div>

                </div>

            </div >

            <p className='text-2xl mt-1 mb-10 text-black font-mono flex items-center justify-center'>  <span className=''>Select A Service From Here</span>  </p>

        </section>
    );
};

export default AppointmentBanner;
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { IoArrowRedoOutline } from 'react-icons/io5';

const AppointmentBanner = ({ date, setDate }) => {
    return (

        <section>
            <div className="hero px-5 lg:px-60 pt-20 lg:pt-24 pb-5 lg:pb-5">

                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 rounded-2xl text-lg border border-zinc-300 text-black lg:px-36  bg-white">

                    <div className='lg:pb-0 flex justify-center items-center'>

                        <div className='rounded-lg w-80 lg:w-96 font-mono'>
                            <DayPicker
                                mode="single"
                                date={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>

                    {/* <div className='flex justify-center items-center text-zinc-700 invisible lg:visible'>
                        <IoArrowRedoOutline size="1.8rem" />
                    </div> */}

                    <div className='text-center mb-5 lg:mb-0'>
                        <div className='pb-5 lg:pb-9 text-black font-mono text-xl lg:text-2xl'>Available Appointments on</div>
                        <span className='text-black bg-white border border-gray-300 px-5 lg:px-8 py-2 lg:py-2 rounded-full font-mono lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-lg lg:text-xl'>{format(date, 'PP')}</span>
                    </div>

                </div>

            </div >

            {/* <p className='text-xl lg:text-2xl px-5 lg:px-0 mt-1 mb-10 text-black font-mono flex items-center justify-center'>  <span className=''>Select Your Desired Service</span>  </p> */}

        </section>
    );
};

export default AppointmentBanner;
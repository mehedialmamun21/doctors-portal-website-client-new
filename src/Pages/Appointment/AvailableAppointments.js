import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading'
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className='text-center text-2xl pt-7 pb-6 lg:pb-14'>
                <div className='pb-4 text-zinc-700'>Available Appointments on</div>
                <span className='text-zinc-700 text-2xl lg:font-semibold border-2 border-zinc-400 px-12 py-1 rounded-sm'>{format(date, 'PP')}</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 pt-10'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}

        </section>
    );
};

export default AvailableAppointments;
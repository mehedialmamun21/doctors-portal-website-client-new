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
                <div className='pb-7'>Available Appointments on</div>
                <span className='text-zinc-700 text-2xl border border-cyan-400 bg-slate-100 px-20 py-2 rounded-2xl font-semibold'>{format(date, 'PP')}</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 pt-5'>
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
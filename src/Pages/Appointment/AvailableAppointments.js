import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading'
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://glacial-bayou-47586.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='my-28'>
            <h4 className='text-center text-secondary text-2xl'>Available Appointments on - {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-20'>
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
import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { BiAddToQueue } from 'react-icons/bi';

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date()); // State for current date

    useEffect(() => {
        // Fetch appointments and set loading state
        fetchAppointments();
    }, []);

    // Fetch appointments and set loading state
    const fetchAppointments = () => {
        fetch('http://localhost:5000/api/appointments')
            .then((response) => response.json())
            .then((data) => {
                setAppointments(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching appointments:', error);
                setLoading(false);
            });
    };

    // Update current date every 24 hours
    useEffect(() => {
        const updateCurrentDate = () => {
            setCurrentDate(new Date()); // Update the current date
        };

        // Call updateCurrentDate every 24 hours (24 * 60 * 60 * 1000 milliseconds)
        const intervalId = setInterval(updateCurrentDate, 24 * 60 * 60 * 1000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const groupedAppointments = {};
    appointments.forEach((appointment) => {
        const treatment = appointment.treatment;
        if (!groupedAppointments[treatment]) {
            groupedAppointments[treatment] = [];
        }
        groupedAppointments[treatment].push(appointment);
    });

    const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd HH:mm:ss').split(' ')[0];

    return (
        <section className=''>
            <div>
                <p className='mt-24 mb-20 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-60 text-2xl uppercase text-center'>Todays Appointments <br /> <span className='text-zinc-700 text-lg'>( {format(currentDate, 'yyyy-MM-dd')} )</span>  </p>
                {/* <p className='text-lg text-center'>Find Yours</p> */}
            </div>

            {Object.keys(groupedAppointments).map((treatment) => {
                const sortedAppointments = groupedAppointments[treatment]
                    .filter(appointment => {
                        const appointmentDate = new Date(appointment.date);
                        return (
                            isToday(appointmentDate) &&
                            format(appointmentDate, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd')
                        );
                    })
                    .sort((a, b) => a.slot.localeCompare(b.slot));

                const totalAppointmentsCategory = sortedAppointments.length;

                return (

                    <div key={treatment} className='mb-20'>

                        <div className='mb-5'>
                            <div className='flex items-center justify-center pb-2'>
                                <div className='flex items-center bg-white px-5 py-1 rounded-sm'>
                                    <BiAddToQueue className='' size="1.2rem" />
                                    <h2 className='text-lg font-semibold pl-2 text-zinc-700'> {treatment} </h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                {totalAppointmentsCategory === 0 ? (
                                    <p className='text-red-500 font-semibold'>Total = 0</p>
                                ) : (
                                    <p className='text-blue-500 font-semibold'>Total = {totalAppointmentsCategory}</p>
                                )}
                            </div>
                        </div>

                        {totalAppointmentsCategory === 0 ? (
                            <p className='text-center text-lg text-red-500'>( No appointments available till now )</p>
                        ) : (
                            <table style={{ border: '1px solid #000', width: '100%' }}>
                                <thead className='text-left'>
                                    <tr>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Patient Name</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Phone</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Date</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Slot</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Price <span className='text-xs'>(Tk)</span> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedAppointments.map((appointment) => (
                                        <tr key={appointment._id}>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.patientName}</td>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.phone}</td>
                                            <td style={{
                                                border: '1px solid #000',
                                                padding: '8px',
                                                textAlign: 'left',
                                            }}>
                                                {formatDate(appointment.date)}
                                            </td>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.slot}</td>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                );
            })}
        </section>
    );
};

export default DoctorDashboard;






// import React, { useState, useEffect } from 'react';
// import format from 'date-fns/format';
// import isToday from 'date-fns/isToday';
// import { BiAddToQueue } from 'react-icons/bi';

// const DoctorDashboard = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('http://localhost:5000/api/appointments')
//             .then((response) => response.json())
//             .then((data) => {
//                 setAppointments(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching appointments:', error);
//                 setLoading(false);
//             });
//     }, []);


//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     const groupedAppointments = {};
//     appointments.forEach((appointment) => {
//         const treatment = appointment.treatment;
//         if (!groupedAppointments[treatment]) {
//             groupedAppointments[treatment] = [];
//         }
//         groupedAppointments[treatment].push(appointment);
//     });

//     const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd HH:mm:ss').split(' ')[0];
//     const currentDate = new Date();

//     return (
//         <section>
//             <div>
//                 <h2 className='mt-24 mb-10 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-60 text-2xl uppercase text-center'>Todays Appointments <br /> <span className='text-lg'>( Find Yours )</span> </h2>
//             </div>

//             {Object.keys(groupedAppointments).map((treatment) => {
//                 const sortedAppointments = groupedAppointments[treatment]
//                     .filter(appointment => {
//                         const appointmentDate = new Date(appointment.date);
//                         return (
//                             isToday(appointmentDate) &&
//                             format(appointmentDate, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd')
//                         );
//                     })
//                     .sort((a, b) => a.slot.localeCompare(b.slot));

//                 // Calculate the total number of appointments for this category
//                 const totalAppointmentsCategory = sortedAppointments.length;

//                 return (
//                     <div key={treatment} className='mb-10'>
//                         <div className='pb-5'>
//                             <div className='flex items-center pb-5'>
//                                 <BiAddToQueue className='' size="1.2rem" />
//                                 <h2 className='text-lg font-semibold pl-2 text-zinc-700'> <u>{treatment}</u> </h2>
//                             </div>
//                             {totalAppointmentsCategory === 0 ? (
//                                 <p className='text-red-500 font-semibold pl-7'>Total = 0</p>
//                             ) : (
//                                 <p className='text-blue-500 font-semibold pl-7'>Total = {totalAppointmentsCategory}</p>
//                             )}
//                         </div>

//                         {totalAppointmentsCategory === 0 ? (
//                             <p className='text-center text-lg text-red-500'>( No appointments for this treatment category )</p>
//                         ) : (
//                             <table style={{ border: '1px solid #000', width: '100%' }}>
//                                 <thead className='text-left'>
//                                     <tr>
//                                         <th style={{ border: '1px solid #000', padding: '8px' }}>Patient Name</th>
//                                         <th style={{ border: '1px solid #000', padding: '8px' }}>Phone</th>
//                                         <th style={{ border: '1px solid #000', padding: '8px' }}>Date</th>
//                                         <th style={{ border: '1px solid #000', padding: '8px' }}>Slot</th>
//                                         <th style={{ border: '1px solid #000', padding: '8px' }}>Price <span className='text-xs'>(Tk)</span> </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {sortedAppointments.map((appointment) => (
//                                         <tr key={appointment._id}>
//                                             <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.patientName}</td>
//                                             <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.phone}</td>
//                                             <td style={{
//                                                 border: '1px solid #000',
//                                                 padding: '8px',
//                                                 textAlign: 'left',
//                                                 // color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                                 // fontWeight: isToday(new Date(appointment.date)) ? 'bold' : 'normal',
//                                             }}>
//                                                 {formatDate(appointment.date)}
//                                             </td>
//                                             <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.slot}</td>
//                                             <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{appointment.price}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         )}
//                     </div>
//                 );
//             })}
//         </section>
//     );
// };

// export default DoctorDashboard;


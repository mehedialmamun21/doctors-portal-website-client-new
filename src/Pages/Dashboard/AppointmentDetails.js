import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { BiAddToQueue } from 'react-icons/bi';

const AppointmentDetails = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

    const totalAppointments = appointments.length;
    const todayAppointments = appointments.filter(appointment => isToday(new Date(appointment.date))).length;

    const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd HH:mm:ss').split(' ')[0];

    return (
        <section>
            <div>
                <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-52 text-center text-2xl'>Appointments by Treatment Category</h2>
            </div>

            <div className='my-10 text-center'>
                <p className='font-semibold'> <span className='border border-zinc-800 rounded-sm px-5 py-1'> <span className='text-zinc-800'>Total Appointments = {totalAppointments} ,</span> <span className='pl-5 text-blue-600 font-semibold'> Today = {todayAppointments} </span> </span></p>
            </div>

            {Object.keys(groupedAppointments).map((treatment) => {
                const sortedAppointments = groupedAppointments[treatment].sort((a, b) => {
                    // Compare dates first
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);

                    if (dateA < dateB) {
                        return -1;
                    } else if (dateA > dateB) {
                        return 1;
                    } else {
                        // If dates are the same, compare time slots
                        const timeSlotA = parseFloat(a.slot.split(' ')[0]);
                        const timeSlotB = parseFloat(b.slot.split(' ')[0]);

                        return timeSlotA - timeSlotB;
                    }
                });

                // Calculate total and today's appointment numbers for this category
                const totalAppointmentsCategory = sortedAppointments.length;
                const todayAppointmentsCategory = sortedAppointments.filter(appointment => isToday(new Date(appointment.date))).length;

                return (
                    <div key={treatment} className='mb-10'>

                        <div className='flex gap-7'>
                            <div className='pb-5 flex items-center'>
                                <BiAddToQueue className='' size="1.2rem" />
                                <h2 className='text-lg font-semibold pl-2 text-zinc-700'> <u>{treatment}</u> </h2>
                            </div>

                            <div className='mb-5 bg-white px-3 py-1 rounded-sm'>
                                <p className='text-zinc-900'>Total = {totalAppointmentsCategory}</p>
                                <p className='text-zinc-900 font-semibold'>Today = {todayAppointmentsCategory}</p>
                            </div>
                        </div>

                        <table style={{ border: '1px solid #000', width: '100%' }}>
                            <thead className='text-left'>
                                <tr>
                                    <th style={{ border: '1px solid #000', padding: '8px' }}>Patient Name</th>
                                    <th style={{ border: '1px solid #000', padding: '8px' }}>Phone</th>
                                    <th style={{ border: '1px solid #000', padding: '8px' }}>Date</th>
                                    <th style={{ border: '1px solid #000', padding: '8px' }}>Slot</th>
                                    <th style={{ border: '1px solid #000', padding: '8px' }}>Price <span className="text-xs">(Tk)</span> </th>
                                    <th style={{ border: '1px solid #000', padding: '8px' }}>Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedAppointments.map((appointment) => (
                                    <tr key={appointment._id}>
                                        <td style={{
                                            border: '1px solid #000',
                                            padding: '8px',
                                            textAlign: 'left',
                                            color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                        }}>
                                            {appointment.patientName}
                                        </td>
                                        <td style={{
                                            border: '1px solid #000',
                                            padding: '8px',
                                            textAlign: 'left',
                                            color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                        }}>
                                            {appointment.phone}
                                        </td>

                                        <td style={{
                                            border: '1px solid #000',
                                            padding: '8px',
                                            textAlign: 'left',
                                            color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                            fontWeight: isToday(new Date(appointment.date)) ? 'bold' : 'normal',
                                        }}>
                                            {formatDate(appointment.date)}
                                        </td>
                                        <td style={{
                                            border: '1px solid #000',
                                            padding: '8px',
                                            textAlign: 'left',
                                            color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                        }}>
                                            {appointment.slot}
                                        </td>
                                        <td style={{
                                            border: '1px solid #000',
                                            padding: '8px',
                                            textAlign: 'left',
                                            color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                        }}>
                                            {appointment.price}
                                        </td>
                                        <td style={{
                                            border: '1px solid #000',
                                            padding: '8px',
                                            textAlign: 'left',
                                            color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                        }}>
                                            {appointment.transactionId ? appointment.transactionId : 'UNPAID'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </section>
    );
};

export default AppointmentDetails;









// import React, { useState, useEffect } from 'react';
// import format from 'date-fns/format';
// import isToday from 'date-fns/isToday';
// import { BiAddToQueue } from 'react-icons/bi';

// const AppointmentDetails = () => {
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

//     const totalAppointments = appointments.length;
//     const todayAppointments = appointments.filter(appointment => isToday(new Date(appointment.date))).length;

//     const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd HH:mm:ss').split(' ')[0];

//     return (
//         <section>
//             <div>
//                 <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-52 text-center text-2xl'>Appointments by Treatment Category</h2>
//             </div>

//             <div className='my-10 text-center'>
//                 <p className='font-semibold'> <span className='border border-zinc-800 rounded-sm px-5 py-1'> <span className='text-zinc-800'>Total Appointments = {totalAppointments} ,</span> <span className='pl-5 text-blue-600 font-semibold'> Today = {todayAppointments} </span> </span></p>
//             </div>

//             {Object.keys(groupedAppointments).map((treatment) => {
//                 const sortedAppointments = groupedAppointments[treatment].sort((a, b) => {
//                     // Compare dates first
//                     const dateA = new Date(a.date);
//                     const dateB = new Date(b.date);

//                     if (dateA < dateB) {
//                         return -1;
//                     } else if (dateA > dateB) {
//                         return 1;
//                     } else {
//                         // If dates are the same, compare time slots
//                         const timeSlotA = parseFloat(a.slot.split(' ')[0]);
//                         const timeSlotB = parseFloat(b.slot.split(' ')[0]);

//                         return timeSlotA - timeSlotB;
//                     }
//                 });

//                 // Calculate total and today's appointment numbers for this category
//                 const totalAppointmentsCategory = sortedAppointments.length;
//                 const todayAppointmentsCategory = sortedAppointments.filter(appointment => isToday(new Date(appointment.date))).length;

//                 return (
//                     <div key={treatment} className='mb-10'>

//                         <div className='flex gap-7'>
//                             <div className='pb-5 flex items-center'>
//                                 <BiAddToQueue className='' size="1.2rem" />
//                                 <h2 className='text-lg font-semibold pl-2 text-zinc-700'> <u>{treatment}</u> </h2>
//                             </div>

//                             <div className='mb-5'>
//                                 <p className='text-zinc-600'>Total = {totalAppointmentsCategory}</p>
//                                 <p className='text-zinc-600 font-semibold'>Today = {todayAppointmentsCategory}</p>
//                             </div>
//                         </div>

//                         <table style={{ border: '1px solid #000', width: '100%' }}>
//                             <thead className='text-left'>
//                                 <tr>
//                                     <th style={{ border: '1px solid #000', padding: '8px' }}>Patient Name</th>
//                                     {/* <th style={{ border: '1px solid #000', padding: '8px' }}>Email</th> */}
//                                     <th style={{ border: '1px solid #000', padding: '8px' }}>Phone</th>
//                                     <th style={{ border: '1px solid #000', padding: '8px' }}>Date</th>
//                                     <th style={{ border: '1px solid #000', padding: '8px' }}>Slot</th>
//                                     <th style={{ border: '1px solid #000', padding: '8px' }}>Price <span className="text-xs">(Tk)</span> </th>
//                                     <th style={{ border: '1px solid #000', padding: '8px' }}>Transaction ID</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {sortedAppointments.map((appointment) => (
//                                     <tr key={appointment._id}>
//                                         <td style={{
//                                             border: '1px solid #000',
//                                             padding: '8px',
//                                             textAlign: 'left',
//                                             color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                         }}>
//                                             {appointment.patientName}
//                                         </td>
//                                         {/* <td style={{
//                                             border: '1px solid #000',
//                                             padding: '8px',
//                                             textAlign: 'left',
//                                             color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                         }}>
//                                             {appointment.patient}
//                                         </td> */}
//                                         <td style={{
//                                             border: '1px solid #000',
//                                             padding: '8px',
//                                             textAlign: 'left',
//                                             color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                         }}>
//                                             {appointment.phone}
//                                         </td>

//                                         <td style={{
//                                             border: '1px solid #000',
//                                             padding: '8px',
//                                             textAlign: 'left',
//                                             color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                             fontWeight: isToday(new Date(appointment.date)) ? 'bold' : 'normal',
//                                         }}>
//                                             {formatDate(appointment.date)}
//                                         </td>
//                                         <td style={{
//                                             border: '1px solid #000',
//                                             padding: '8px',
//                                             textAlign: 'left',
//                                             color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                         }}>
//                                             {appointment.slot}
//                                         </td>
//                                         <td style={{
//                                             border: '1px solid #000',
//                                             padding: '8px',
//                                             textAlign: 'left',
//                                             color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                         }}>
//                                             {appointment.price}
//                                         </td>
//                                         <td style={{
//                                             border: '1px solid #000',
//                                             padding: '8px',
//                                             textAlign: 'left',
//                                             color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
//                                         }}>
//                                             {appointment.transactionId}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 );
//             })}
//         </section>
//     );
// };

// export default AppointmentDetails;
import React, { useState, useEffect, useRef } from 'react';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { BiAddToQueue } from 'react-icons/bi';

const AppointmentDetails = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryRefs, setCategoryRefs] = useState({});
    const stickyCategoryRef = useRef();

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

    useEffect(() => {
        if (!loading) {
            const refs = {};
            Object.keys(groupedAppointments).forEach((treatment) => {
                refs[treatment] = React.createRef();
            });
            setCategoryRefs(refs);
        }
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const scrollToCategory = (treatment) => {
        categoryRefs[treatment].current.scrollIntoView({ behavior: 'smooth' });
    };

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
            <div className='sticky top-0 z-10 bg-white' ref={stickyCategoryRef}>
                <h2 className='mt-20 lg:mt-24 mb-8 font-semibold border-2 border-b-zinc-400 border-t-white border-x-white py-3 mx-5 lg:mx-52 text-center text-lg lg:text-2xl'>
                    Appointments by Treatment Category
                </h2>
                <div className='flex justify-center space-x-4 pb-3 mb-5 lg:mb-10'>
                    {Object.keys(groupedAppointments).map((treatment) => (
                        <button
                            key={treatment}
                            className='text-blue-500 hover:text-white text-md font-semibold border bg-white hover:bg-blue-500 px-2 py-1 rounded-md border-blue-600'
                            onClick={() => scrollToCategory(treatment)}
                        >
                            {treatment}
                        </button>
                    ))}
                </div>
            </div>

            <div className='my-10 text-center'>
                <p className='font-semibold'>
                    <span className='border border-zinc-500 px-5 py-1'>
                        <span className='text-zinc-800'>Total Appointments = {totalAppointments} ,</span>
                        <span className='pl-5 text-blue-500 font-semibold'> Today = {todayAppointments} </span>
                    </span>
                </p>
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
                    <div key={treatment} ref={categoryRefs[treatment]} className='mb-10 px-0 lg:px-5 pb-5 bg-blue-100 py-0'>

                        <div className='flex justify-center lg:mt-10'>
                            <div className='flex gap-7'>
                                <div className='py-5 flex items-center'>
                                    <BiAddToQueue className='' size="1.2rem" />
                                    <h2 className='text-sm lg:text-lg uppercase font-semibold pl-2 text-zinc-800'> {treatment} </h2>
                                </div>
                                <div className='my-5 px-2 py-1 rounded-sm border border-zinc-600'>
                                    <p className='text-zinc-900 border border-b-zinc-600 border-t-blue-100 border-x-blue-100'>Total = {totalAppointmentsCategory}</p>
                                    <p className='text-zinc-900 font-semibold'>Today = {todayAppointmentsCategory}</p>
                                </div>
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
                                        <td
                                            style={{
                                                border: '1px solid #000',
                                                padding: '8px',
                                                textAlign: 'left',
                                                color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                            }}
                                        >
                                            {appointment.patientName}
                                        </td>
                                        <td
                                            style={{
                                                border: '1px solid #000',
                                                padding: '8px',
                                                textAlign: 'left',
                                                color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                            }}
                                        >
                                            {appointment.phone}
                                        </td>
                                        <td
                                            style={{
                                                border: '1px solid #000',
                                                padding: '8px',
                                                textAlign: 'left',
                                                color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                                fontWeight: isToday(new Date(appointment.date)) ? 'bold' : 'normal',
                                            }}
                                        >
                                            {formatDate(appointment.date)}
                                        </td>
                                        <td
                                            style={{
                                                border: '1px solid #000',
                                                padding: '8px',
                                                textAlign: 'left',
                                                color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                            }}
                                        >
                                            {appointment.slot}
                                        </td>
                                        <td
                                            style={{
                                                border: '1px solid #000',
                                                padding: '8px',
                                                textAlign: 'left',
                                                color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                            }}
                                        >
                                            {appointment.price}
                                        </td>
                                        <td
                                            style={{
                                                border: '1px solid #000',
                                                padding: '8px',
                                                textAlign: 'left',
                                                color: isToday(new Date(appointment.date)) ? 'blue' : 'black',
                                            }}
                                        >
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
//                 <p className='font-semibold'> <span className='border border-zinc-800 rounded-sm px-5 py-1'> <span className='text-zinc-800'>Total Appointments = {totalAppointments} ,</span> <span className='pl-5 text-blue-500 font-semibold'> Today = {todayAppointments} </span> </span></p>
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
import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { BiAddToQueue, BiSearchAlt2 } from 'react-icons/bi';

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAppointments, setFilteredAppointments] = useState({});
    const [incorrectSearch, setIncorrectSearch] = useState(false); // State for incorrect search

    useEffect(() => {
        fetchAppointments();
    }, []);

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

    useEffect(() => {
        const updateCurrentDate = () => {
            setCurrentDate(new Date());
        };

        const intervalId = setInterval(updateCurrentDate, 24 * 60 * 60 * 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = {};

        Object.keys(groupedAppointments).forEach((treatment) => {
            if (treatment.toLowerCase().includes(query)) {
                filtered[treatment] = groupedAppointments[treatment];
            }
        });

        setFilteredAppointments(filtered);

        // Set incorrectSearch to true if there are no matching categories
        if (Object.keys(filtered).length === 0) {
            setIncorrectSearch(true);
        } else {
            setIncorrectSearch(false);
        }
    };

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
        <section>
            <div>
                <p className='mt-24 mb-10 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-60 text-2xl uppercase text-center'>
                    Todays Appointments <br />
                    <span className='text-zinc-700 text-lg'>( {format(currentDate, 'yyyy-MM-dd')} )</span>
                </p>
            </div>

            <p className='text-center text-lg font-mono mb-7 lg:mb-7 px-5 lg:px-0'>"Search for Your Patient's Appointments Here"</p>

            <div className='mb-10 lg:mb-14 px-5 lg:px-0'>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center rounded-sm' style={{ maxWidth: '400px', width: '100%' }}>
                        <input
                            type="text"
                            placeholder="Search by Treatment Category.."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="text-zinc-700 text-sm font-semibold bg-white border-none focus:outline-none"
                            style={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #808080',
                                borderRadius: '0px',
                                fontSize: '14px',
                                paddingLeft: '14px',
                                paddingRight: '32px',
                                width: '100%',
                                height: '40px',
                            }}
                        />
                        <span style={{ marginLeft: '-30px' }}>
                            <BiSearchAlt2 size="1.4rem" className='text-gray-500' />
                        </span>
                    </div>
                </div>
            </div>

            {incorrectSearch && (
                <div className='mb-5 lg:mb-10 px-5'>
                    <p className='text-zinc-700 text-lg font-semibold text-center'>
                        <span className='text-red-500'>
                            Provide correct name of treatment category..
                        </span>
                    </p>
                </div>
            )}

            {Object.keys(searchQuery ? filteredAppointments : groupedAppointments).map((treatment) => {
                const appointmentsToDisplay = searchQuery ? filteredAppointments[treatment] : groupedAppointments[treatment];

                if (appointmentsToDisplay.length === 0) {
                    return null;
                }

                const sortedAppointments = appointmentsToDisplay
                    .filter(appointment => {
                        const appointmentDate = new Date(appointment.date);
                        return (
                            isToday(appointmentDate) &&
                            format(appointmentDate, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd')
                        );
                    })
                    .sort((a, b) => a.slot.localeCompare(b.slot));

                return (
                    <section>
                        <div key={treatment} className='mb-5 lg:mb-14 bg-amber-200 px-5 py-5'>
                            <div className='mb-5'>
                                <div className='flex items-center justify-center pb-2'>
                                    <div className='flex items-center px-5 py-1 rounded-full border border-gray-500'>
                                        {/* <BiAddToQueue className='' size="0.9rem" /> */}
                                        <h2 className='text-md font-semibold pl-2 text-zinc-700'>{treatment}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-blue-500 font-semibold'>Total = {sortedAppointments.length}</p>
                                </div>
                            </div>
                            <table style={{ border: '1px solid #000', width: '100%' }}>
                                <thead className='text-left'>
                                    <tr>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Patient Name</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Phone</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Date</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Slot</th>
                                        <th style={{ border: '1px solid #000', padding: '8px' }}>Price <span className='text-xs'>(Tk)</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedAppointments.map((appointment) => (
                                        <tr key={appointment._id}>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                                                {appointment.patientName}
                                            </td>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                                                {appointment.phone}
                                            </td>
                                            <td
                                                style={{
                                                    border: '1px solid #000',
                                                    padding: '8px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {formatDate(appointment.date)}
                                            </td>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                                                {appointment.slot}
                                            </td>
                                            <td style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>
                                                {appointment.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
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
//     const [currentDate, setCurrentDate] = useState(new Date()); // State for current date

//     useEffect(() => {
//         // Fetch appointments and set loading state
//         fetchAppointments();
//     }, []);

//     // Fetch appointments and set loading state
//     const fetchAppointments = () => {
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
//     };

//     // Update current date every 24 hours
//     useEffect(() => {
//         const updateCurrentDate = () => {
//             setCurrentDate(new Date()); // Update the current date
//         };

//         // Call updateCurrentDate every 24 hours (24 * 60 * 60 * 1000 milliseconds)
//         const intervalId = setInterval(updateCurrentDate, 24 * 60 * 60 * 1000);

//         // Clear the interval when the component unmounts
//         return () => {
//             clearInterval(intervalId);
//         };
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

//     return (
//         <section className=''>
//             <div>
//                 <p className='mt-24 mb-20 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-60 text-2xl uppercase text-center'>Todays Appointments <br /> <span className='text-zinc-700 text-lg'>( {format(currentDate, 'yyyy-MM-dd')} )</span>  </p>
//                 {/* <p className='text-lg text-center'>Find Yours</p> */}
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

//                 const totalAppointmentsCategory = sortedAppointments.length;

//                 return (

//                     <div key={treatment} className='mb-20'>

//                         <div className='mb-5'>
//                             <div className='flex items-center justify-center pb-2'>
//                                 <div className='flex items-center bg-white px-5 py-1 rounded-sm'>
//                                     <BiAddToQueue className='' size="1.2rem" />
//                                     <h2 className='text-lg font-semibold pl-2 text-zinc-700'> {treatment} </h2>
//                                 </div>
//                             </div>
//                             <div className='flex items-center justify-center'>
//                                 {totalAppointmentsCategory === 0 ? (
//                                     <p className='text-red-500 font-semibold'>Total = 0</p>
//                                 ) : (
//                                     <p className='text-blue-500 font-semibold'>Total = {totalAppointmentsCategory}</p>
//                                 )}
//                             </div>
//                         </div>

//                         {totalAppointmentsCategory === 0 ? (
//                             <p className='text-center text-lg text-red-500'>( No appointments available till now )</p>
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
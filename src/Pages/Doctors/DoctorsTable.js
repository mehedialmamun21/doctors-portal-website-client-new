import React from 'react';

const DoctorsTable = ({ doctor, index }) => {
    return (

        <tr>
            <th>{index + 1}</th>

            {/* <td>
                <div class="avatar">
                    <div class="w-14 rounded-sm">
                        <img src={doctor.img} alt={doctor.name} />
                    </div>
                </div>
            </td> */}

            <td className='text-cyan-600 font-semibold font-mono'>{doctor.name}</td>
            <td className='text-zinc-700 font-semibold font-mono'>{doctor.degree}</td>
            <td className='text-cyan-600 font-semibold font-mono'>{doctor.speciality}</td>
            <td className='text-zinc-700 font-semibold font-mono'>{doctor.time}</td>

            {/* <td className='text-zinc-700 font-semibold'>{doctor.room}</td> */}

            <td className='text-cyan-600 font-semibold font-mono'>{doctor.email}</td>
            <td className='text-zinc-700 font-semibold font-mono'>{doctor.phone}</td>

            {/* <td className='text-zinc-700 font-semibold'>{doctor.detail}</td> */}

            {/* <td className='text-zinc-700'>{doctor._id}</td> */}
        </tr>

    );
};

export default DoctorsTable;
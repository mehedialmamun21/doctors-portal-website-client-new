import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, speciality, img, email, phone } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            {/* <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td> */}
            <td className='font-mono'>{name}</td>
            <td className='font-mono'>{speciality}</td>
            <td className='font-mono'>{email}</td>
            <td className='font-mono'>{phone}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white px-6 rounded-sm font-bold">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;
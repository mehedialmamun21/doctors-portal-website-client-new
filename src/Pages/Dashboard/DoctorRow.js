import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, speciality, img, phone } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td className='text-cyan-600 font-semibold'>{name}</td>
            <td className='text-zinc-600'>{speciality}</td>
            <td className='text-zinc-600'>{phone}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-sm bg-red-400 hover:bg-red-500 border-none text-white px-6 rounded-sm font-bold">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;
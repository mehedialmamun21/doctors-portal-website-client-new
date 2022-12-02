import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            })
    }

    const handleDelete = email => {
        const proceed = window.confirm("sure to Delete the user?");
        if (proceed) {

            fetch(`http://localhost:5000/user/${email}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        toast.success(`User: ${email} is deleted.`);
                        refetch();
                    }
                })
        }

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-bold'>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm btn-success text-white px-3 font-semibold rounded-sm">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-sm btn-error text-white px-3 font-semibold rounded-sm">Remove User</button></td>
        </tr>
    );
};

export default UserRow;
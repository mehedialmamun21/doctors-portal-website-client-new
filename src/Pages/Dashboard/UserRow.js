import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { _id, email, role } = user;

    const makeAdmin = () => {
        const proceed = window.confirm("Sure to make an Admin?");
        if (proceed) {
            fetch(`http://localhost:5000/user/admin/${email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 403) {
                        toast.error('Failed to make an Admin');
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.modifiedCount > 0) {
                        refetch();
                        toast.success(`Successfully made an Admin`);
                    }
                })
        }
    }

    const makeDoctor = (email) => {
        const proceed = window.confirm("Sure to make a Doctor?");
        if (proceed) {
            fetch(`http://localhost:5000/user/doctor/${email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 403) {
                        toast.error('Failed to make a Doctor');
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.modifiedCount > 0) {
                        refetch();
                        toast.success(`Successfully made a Doctor`);
                    }
                });
        }
    };

    const handleDelete = email => {
        const proceed = window.confirm("Sure to Remove the user?");
        if (proceed) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`User: ${email} has been Removed.`);
                        refetch();
                    }
                });
        }
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='font-mono'>{_id}</td>
            <td className='font-mono'>{email}</td>
            <td>
                {role === 'admin' ? (
                    <strong>Admin</strong>
                ) : (
                    role !== 'doctor' && (
                        <button onClick={makeAdmin} className="btn btn-sm bg-green-600 hover-bg-green-700 border-none text-white px-2 rounded-sm">
                            Make Admin
                        </button>
                    )
                )}
            </td>
            <td>
                {role === 'doctor' ? (
                    <strong>Doctor</strong>
                ) : (
                    role !== 'admin' && (
                        <button onClick={() => makeDoctor(email)} className="btn btn-sm bg-blue-600 hover:bg-blue-700 border-none text-white px-2 rounded-sm">
                            Make Doctor
                        </button>
                    )
                )}
            </td>
            <td>
                <button onClick={() => handleDelete(email)} className="btn btn-ghost bg-white text-red-500 btn-lg rounded-sm">
                    <FaTrashAlt size="1.1rem" />
                </button>
            </td>
        </tr>
    );
};

export default UserRow;










// import React from 'react';
// import { toast } from 'react-toastify';

// const UserRow = ({ user, refetch, index }) => {
//     const { _id, email, role } = user;

//     const makeAdmin = () => {
//         const proceed = window.confirm("Sure to make an Admin?");
//         if (proceed) {
//             fetch(`http://localhost:5000/user/admin/${email}`, {
//                 method: 'PUT',
//                 headers: {
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => {
//                     if (res.status === 403) {
//                         toast.error('Failed to make an Admin');
//                     }
//                     return res.json()
//                 })
//                 .then(data => {
//                     if (data.modifiedCount > 0) {
//                         refetch();
//                         toast.success(`Successfully made an Admin`);
//                     }
//                 })
//         }
//     }









//     const makeDoctor = (email) => {
//         const proceed = window.confirm("Sure to make a Doctor?");
//         if (proceed) {
//             fetch(`http://localhost:5000/user/doctor/${email}`, {
//                 method: 'PUT',
//                 headers: {
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => {
//                     if (res.status === 403) {
//                         toast.error('Failed to make a Doctor');
//                     }
//                     return res.json();
//                 })
//                 .then(data => {
//                     if (data.modifiedCount > 0) {
//                         refetch();
//                         toast.success(`Successfully made a Doctor`);
//                     }
//                 });
//         }
//     };










//     const handleDelete = email => {
//         const proceed = window.confirm("Sure to Remove the user?");
//         if (proceed) {

//             fetch(`http://localhost:5000/user/${email}`, {
//                 method: 'DELETE',
//                 headers: {
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     // console.log(data);
//                     if (data.deletedCount) {
//                         toast.success(`User: ${email} has Removed.`);
//                         refetch();
//                     }
//                 })
//         }

//     }

//     return (
//         <tr>
//             <th>{index + 1}</th>
//             <td className='font-mono'>{_id}</td>
//             <td className='font-mono'>{email}</td>
//             <td>
//                 {role !== 'admin' &&
//                     <button onClick={makeAdmin} class="btn btn-sm bg-green-600 hover:bg-green-700 border-none text-white px-1 rounded-sm">
//                         Make Admin
//                     </button>}
//             </td>
//             <td>
//                 {role !== 'doctor' && (
//                     <button onClick={() => makeDoctor(email)} className="btn btn-sm bg-blue-600 hover:bg-blue-700 border-none text-white px-1 rounded-sm">
//                         Make Doctor
//                     </button>
//                 )}
//             </td>
//             <td><button onClick={() => handleDelete(email)} class="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white px-1 rounded-sm">Remove User</button></td>
//         </tr>
//     );
// };

// export default UserRow;
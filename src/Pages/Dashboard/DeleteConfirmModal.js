import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;


    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())

            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is deleted.`);
                    setDeletingDoctor(null);
                    refetch();
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom lg:modal-middle">
                <div class="modal-box">
                    <h3 class="text-lg text-black">Are you sure to delete <span className='text-red-500 pl-2 font-semibold'> {name} ?</span></h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs bg-red-500 hover:bg-red-600 border-none text-white px-3 py-1 rounded-sm">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs bg-slate-700 hover:bg-slate-800 text-white px-3 py-1 rounded-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;
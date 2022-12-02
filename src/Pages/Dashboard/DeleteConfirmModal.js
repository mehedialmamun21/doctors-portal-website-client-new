import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;


    const handleDelete = () => {
        fetch(`https://limitless-inlet-88208.herokuapp.com/doctor/${email}`, {
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
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-semibold text-lg text-red-500">Are you sure to delete <span className='text-slate-600'>{name}</span> ?</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error rounded-sm">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs rounded-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;
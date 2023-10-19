import React, { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const initialEditData = {}; // Initialize the edit data as an empty object
    menu.forEach((item) => {
        initialEditData[item._id] = {}; // Initialize each item's edit data as an empty object
    });
    const [editItemData, setEditItemData] = useState(initialEditData);
    const [editItemId, setEditItemId] = useState(null);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/menu/${item._id}`, {
                    method: 'DELETE'
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })

            }
        })
    };

    const openEditForm = (item) => {
        setEditItemData({ ...editItemData, [item._id]: { ...item } }); // Copy item data to edit data
        setEditItemId(item._id);
    };

    const handleEdit = (item) => {
        const { _id, ...updatedItemData } = editItemData[item._id];

        fetch(`http://localhost:5000/menu/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItemData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === 'Item updated successfully') {
                    refetch(); // Refetch the menu data to update the UI
                    // Show a success message using Swal or any other notification method
                    Swal.fire('Updated!', 'Your item has been updated.', 'success');
                } else {
                    // Handle error
                    Swal.fire('Error', 'Failed to update the item.', 'error');
                }
            });

        // Clear the edit data and close the edit form for the specific row
        setEditItemData({ ...editItemData, [item._id]: {} });
        setEditItemId(null);
    };

    const isFieldEditable = (fieldKey, itemId) => {
        return editItemId === itemId && fieldKey in editItemData[itemId];
    };

    return (
        <section>
            <div>
                <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-80 text-center uppercase text-2xl'>Manage All Items</h2>
            </div>
            <div className="px-0 lg:px-5 mb-24 lg:mb-5">
                <div className="overflow-x-auto">
                    <table className="table w-full border-4">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {isFieldEditable('name', item._id) ? (
                                            <input
                                                type="text"
                                                value={editItemData[item._id].name}
                                                onChange={(e) => setEditItemData({ ...editItemData, [item._id]: { ...editItemData[item._id], name: e.target.value } })}
                                                className="border-2 border-blue-500"
                                            />
                                        ) : (
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold">{item.name}</div>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {isFieldEditable('category', item._id) ? (
                                            <input
                                                type="text"
                                                value={editItemData[item._id].category}
                                                onChange={(e) => setEditItemData({ ...editItemData, [item._id]: { ...editItemData[item._id], category: e.target.value } })}
                                                className="border-2 border-blue-500"
                                            />
                                        ) : (
                                            item.category
                                        )}
                                    </td>
                                    <td className="text-right">
                                        {isFieldEditable('price', item._id) ? (
                                            <input
                                                type="text"
                                                value={editItemData[item._id].price}
                                                onChange={(e) => setEditItemData({ ...editItemData, [item._id]: { ...editItemData[item._id], price: e.target.value } })}
                                                className="border-2 border-blue-500"
                                            />
                                        ) : (
                                            <div>
                                                {item.price} <span className="text-sm">Tk</span>
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                if (editItemId === item._id) {
                                                    handleEdit(item);
                                                } else {
                                                    openEditForm(item);
                                                }
                                            }}
                                            className="btn btn-ghost btn-lg text-blue-500 rounded-sm"
                                        >
                                            {editItemId === item._id ? 'Save' : <BiEdit className='' size="1.2rem" />}
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-white text-red-500 btn-lg rounded-sm">
                                            <FaTrashAlt size="1.1rem" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageItems;




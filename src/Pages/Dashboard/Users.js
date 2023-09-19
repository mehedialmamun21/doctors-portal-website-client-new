import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // loading section
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-20'>
            <h2 className='text-xl text-center mt-12 mb-5 text-white bg-violet-500 py-2 font-mono'><span>Total User - {users.length} </span> </h2>
            <div class="overflow-x-auto">
                <table class="table w-full border-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Id</th>
                            <th>User Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
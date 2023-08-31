import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // loading section 

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='mt-20'>
            <h2 className="text-xl text-center mt-12 mb-5 text-white bg-violet-500 py-2 font-mono"><span>Total Doctor - {doctors.length}</span></h2>
            <div class="overflow-x-auto">
                <table class="table w-full border-4">

                    <thead>
                        <tr>
                            <th>Index</th>
                            {/* <th>Doctor Image</th> */}
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action ( delete )</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteConfirmModal>}
        </section>
    );
};

export default ManageDoctors;
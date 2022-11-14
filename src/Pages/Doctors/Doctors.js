import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Footer from '../Shared/Footer';

const Doctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('https://limitless-inlet-88208.herokuapp.com/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <div class="overflow-x-auto mt-5 ">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Doctor's Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Doctor's Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map(doctor =>
                                <tr>
                                    <td>
                                        <div class="avatar">
                                            <div class="w-16 rounded-2xl">
                                                <img src={doctor.img} alt={doctor.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.email}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </section>

    );
};

export default Doctors;
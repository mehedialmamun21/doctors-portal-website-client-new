import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Footer from '../Shared/Footer';
import { Link } from 'react-router-dom';

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
            <div class="overflow-x-auto mt-3">
                <table class="table w-full border-4">

                    <thead>
                        <tr>
                            <th>Doctor Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Email</th>
                            <th>Doctor Entry</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            doctors.map((doctor) =>
                                <tr>
                                    <td>
                                        <div class="avatar">
                                            <div class="w-16 rounded-2xl">
                                                <img src={doctor.img} alt={doctor.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-secondary font-semibold'>{doctor.name}</td>
                                    <td className='font-semibold'>{doctor.speciality}</td>
                                    <td className='font-semibold'>{doctor.email}</td>
                                    <td>{<Link to="/doctorDetails" className="btn btn-sm bg-orange-500 text-white border-none hover:bg-orange-600 px-3 lg:px-7 font-semibold rounded-sm">Enter</Link>}</td>
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
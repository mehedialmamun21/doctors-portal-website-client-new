import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DrProfilesCard from './DrProfilesCard';

const DrProfiles = ({ doctor }) => {

    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10'>
                {
                    doctors.map((doctor) => <DrProfilesCard
                        key={doctor._id}
                        doctor={doctor}
                    ></DrProfilesCard>)
                }
            </div>

        </section>
    );
};

export default DrProfiles;
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
        <div>

            <div className='grid grid-cols-3 gap-7'>
                {
                    doctors.map((doctor) => <DrProfilesCard
                        key={doctor._id}
                        doctor={doctor}
                    ></DrProfilesCard>)
                }
            </div>

        </div>
    );
};

export default DrProfiles;
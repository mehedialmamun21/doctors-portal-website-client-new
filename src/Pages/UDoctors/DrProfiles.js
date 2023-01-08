import React from 'react';
import DrProfilesCard from './DrProfilesCard';

const DrProfiles = () => {
    const profiles = [

        {
            _id: 1,
            name: "Dr. Shamim Al Mamun",
            description1: "BDS (DDC), FCPS (Orthodontics)",
            description2: "Special Training on Dental Implant",
            description3: "Asst. Prof. Dept. of Orthodontics",
            url: "https://i.postimg.cc/Z5LnyLJP/doctor-Shamim-al-Mamun-20191207212102719-1.jpg"
        },
        {
            _id: 2,
            name: "Dr. Qazi Tanzin Ahmed",
            description1: "BDS (RMC)",
            description2: "Oral & Dental Surgeon",
            description3: "Dental Solution, Dinajpur",
            url: "https://i.postimg.cc/15rVpSHN/doctor-Sanowar-Hossain-Khan-20191205043431802-1.jpg"

        },
        {
            _id: 3,
            name: "Dr. Fatema Tuz Zohura",
            description1: "BDS (DHAKA)",
            description2: "Oral & Dental Surgeon",
            description3: "Dental Solution, Dinajpur",
            url: "https://i.postimg.cc/SK0qZ2VT/doctor-Nargis-Salahuddin-20191204215133963-1.jpg"

        }
    ];

    return (
        <div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-2xl'>
                {
                    profiles.map(profile => <DrProfilesCard
                        key={profile._id}
                        profile={profile}
                    ></DrProfilesCard>)
                }
            </div>

        </div>
    );
};

export default DrProfiles;
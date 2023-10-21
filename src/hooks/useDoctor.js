import { useEffect, useState } from "react";
const useDoctor = user => {
    const [isDoctor, setIsDoctor] = useState(false);
    const [doctorLoading, setDoctorLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            // Make an API call to check the user's role (e.g., "doctor" or "admin")
            fetch(`http://localhost:5000/checkDoctorRole/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setIsDoctor(data.isDoctor);
                    setDoctorLoading(false);
                })
                .catch(error => {
                    // Handle errors if the API call fails
                    console.error(error);
                    setDoctorLoading(false);
                });
        }
    }, [user]);

    return [isDoctor, doctorLoading];
}

export default useDoctor;






// // useDoctor.js
// import { useEffect, useState } from "react";

// const useDoctor = (user) => {
//     const [isDoctor, setIsDoctor] = useState(false);
//     const [doctorLoading, setDoctorLoading] = useState(true);

//     useEffect(() => {
//         const email = user?.email;
//         if (email) {
//             // Make an API request to check if the user is a doctor
//             fetch(`http://localhost:5000/checkDoctorRole/${email}`, { // Replace with your API endpoint
//                 method: 'GET',
//                 headers: {
//                     'content-type': 'application/json',
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then((res) => res.json())
//                 .then((data) => {
//                     setIsDoctor(data.isDoctor);
//                     setDoctorLoading(false);
//                 });
//         }
//     }, [user]);

//     return [isDoctor, doctorLoading];
// };

// export default useDoctor;

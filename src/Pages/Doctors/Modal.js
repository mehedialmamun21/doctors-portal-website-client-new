import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom"
import Loading from "../Shared/Loading";

const Modal = ({ setModalOn, setChoice }) => {

    const navigate = useNavigate();

    const navigateToDoctorDetail = id => {
        navigate(`/doctor/${id}`);
    }

    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div className="bg-zinc-500 opacity-80 fixed inset-0 z-50">

            <div className="flex h-screen justify-center items-center">

                <div className="flex-col justify-center bg-white py-12 px-20 rounded-sm ">

                    <div className="flex justify-center text-2xl text-zinc-900 font-bold font-mono" >Want to Enter in Your Profile?</div>

                    <div className="flex pt-16">

                        {
                            doctors.map((doctor) =>
                                <div className="flex mr-7">
                                    <div className="flex items-center justify-center bg-cyan-600 px-5 py-8">
                                        <p className="font-semibold text-white font-serif"> {doctor.name} </p> <br />
                                    </div>

                                    <div className="flex items-center justify-center border-2 border-cyan-600 px-3 py-5">
                                        <button onClick={() => navigateToDoctorDetail(doctor._id)} className="rounded-sm px-4 py-1 text-white bg-green-600 hover:bg-green-700">Yes</button>
                                        <button onClick={handleCancelClick} className="rounded-sm px-4 py-1 ml-2 text-white bg-red-600 hover:bg-red-700 ">No</button>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal
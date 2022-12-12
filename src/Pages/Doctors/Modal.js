import { Link } from "react-router-dom"

const Modal = ({ setModalOn, setChoice }) => {

    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="   bg-zinc-300 opacity-80 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-lg ">

                    <div className="flex justify-center text-xl text-zinc-700 pb-10 font-bold" >Are you a Doctor ?</div>

                    <div className="flex">
                        <Link to="/doctorDetails"> <button className="rounded-sm px-6 py-2 ml-1 text-white bg-blue-500">Yes</button> </Link>
                        <button onClick={handleCancelClick} className="rounded-sm px-6 py-2 ml-4 text-white bg-blue-500">No</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal
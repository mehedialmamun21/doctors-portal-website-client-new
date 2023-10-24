import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { useParams } from 'react-router-dom';

function DoctorDetails() {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState({});
    const [symptomValue, setSymptomValue] = useState('');
    const [testValue, setTestValue] = useState('');
    const [adviceValue, setAdviceValue] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [nextMeetDate, setNextMeetDate] = useState('');
    const [medications, setMedications] = useState([]);
    const [isMorningInvalid] = useState(false);
    const [isDayInvalid] = useState(false);
    const [isNightInvalid] = useState(false);

    // Function to format the current date as "DD/MM/YYYY"
    const formatDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const addMedication = () => {
        setMedications([...medications, { med: '', morning: '', day: '', night: '' }]);
    };

    const updateMedication = (index, field, value) => {
        const updatedMedications = [...medications];
        updatedMedications[index][field] = value;
        setMedications(updatedMedications);
    };

    useEffect(() => {
        const url = `http://localhost:5000/doctor/${doctorId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDoctor(data));

        // Set the current date when the component mounts
        setCurrentDate(formatDate());
    }, [doctorId]);

    const clearFields = () => {
        setSymptomValue('');
        setTestValue('');
        setAdviceValue('');
        setNextMeetDate('');
        setMedications([]);
    };

    const downloadDataAsPDF = () => {
        const doc = new jsPDF();
        const margin = 10;
        const verticalSpacing = 20; // Adjust this value to control the vertical gap between medication sections

        doc.text(`Date: ${currentDate}`, margin, 10);

        doc.text(`Name: ${doctor.name}`, margin, 30);
        doc.text(`Degree: ${doctor.degree}`, margin, 40);
        doc.text(`Reg: ${doctor._id}`, margin, 50);
        doc.text(`Email: ${doctor.email}`, margin, 60);
        doc.text(`Phone: ${doctor.phone}`, margin, 70);
        doc.text(`Time: ${doctor.time}`, margin, 80);
        doc.text(`Room No: ${doctor.room}`, margin, 90);
        doc.text(`Chamber: DentaMart, Dinajpur`, margin, 100);

        if (!symptomValue || !testValue || !adviceValue) {
            alert('Symptoms, Tests, and Advice are required fields.');
            return;
        }

        if (medications.length === 0) {
            alert('Please add at least one medication before downloading.');
            return;
        }

        const hasMedicationWithMissingFields = medications.some(
            (medication) => !medication.morning || !medication.day || !medication.night
        );

        if (hasMedicationWithMissingFields) {
            alert('Morning, Day, and Night fields are mandatory for all medications.');
            return;
        }

        doc.text(`Symptoms: ${symptomValue}`, margin, 120);
        doc.text(`Tests: ${testValue}`, margin, 130);
        doc.text(`Advice: ${adviceValue}`, margin, 140);

        medications.forEach((medication, index) => {
            const blueColor = 'blue';
            const blackColor = 'black';
            doc.setTextColor(blueColor);
            doc.text(`Med ${index + 1}: ${medication.med}`, margin, 160 + index * verticalSpacing);
            doc.setTextColor(blackColor);
            doc.text(`Morning: ${medication.morning}`, margin, 170 + index * verticalSpacing);
            doc.text(`Day: ${medication.day}`, 100, 170 + index * verticalSpacing);
            doc.text(`Night: ${medication.night}`, 170, 170 + index * verticalSpacing);
        });

        if (nextMeetDate) {
            doc.text(`Next Meet: ${nextMeetDate}`, margin, 230 + medications.length * verticalSpacing);
        }

        doc.save('data.pdf');
    };


    return (
        <section className='h-screen'>
            <div className='pt-24 lg:pt-28 pb-24 lg:pb-10 text-center'>
                <p className='mb-8 lg:mb-12 font-semibold uppercase'><span className='font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-80 text-center uppercase text-lg lg:text-2xl'>Create Prescription Here</span></p>
                <div className='grid grid-cols-1 lg:grid-cols-3 bg-blue-200 border border-zinc-400 py-5 mx-5 lg:mx-32 px-5 lg:px-24'>
                    <div>
                        <p className='text-black text-lg font-bold font-serif flex justify-start'>{doctor.name}</p>
                        <p className='flex items-center pb-3 text-black'>{doctor.degree}</p>
                        <p className='flex items-center font-mono text-black'>Reg:<span className='text-black'>{doctor._id} </span></p>
                        <p className='font-mono flex justify-start'><span className='text-black'>Email: </span><span className='font-semibold text-black'>{doctor.email}</span></p>
                    </div>
                    <div>
                        <p className='font-mono flex justify-start'><span className='text-black'>Phone: </span><span className='font-semibold text-black'>{doctor.phone}</span></p>
                        <br />
                        <p className='font-mono flex justify-start'><span className='text-black'>Time: </span><span className='font-semibold text-black'>{doctor.time}</span></p>
                        <p className='font-mono flex justify-start'><span className='text-black'>Room No: </span><span className='font-semibold text-black'>{doctor.room}</span></p>
                        <p className='pb-2 font-mono flex justify-start'><span className='text-black'>Chamber: </span> <span className='font-semibold text-black'>DentaMart, Dinajpur</span></p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold flex justify-start">Date: {currentDate}</p>
                        <div className='flex justify-start mt-4'>
                            <label htmlFor="nextMeet">Next Meet: </label>
                            <input
                                type="text"
                                id="nextMeet"
                                className='ml-2'
                                value={nextMeetDate}
                                onChange={(e) => setNextMeetDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-24 pt-5 mx-5 lg:mx-32 pb-5 lg:pb-0 bg-amber-200 border border-l-zinc-400 border-r-zinc-400 border-b-zinc-400'>
                    <div className=''>
                        <div>
                            <label htmlFor="symptom" className='flex justify-start font-semibold'>Symptoms: </label>
                            <input
                                type="text"
                                id="symptom"
                                value={symptomValue}
                                onChange={(e) => setSymptomValue(e.target.value)}
                                className='flex justify-start mt-2'
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="test" className='flex justify-start font-semibold'>Tests: </label>
                            <input
                                type="text"
                                id="test"
                                value={testValue}
                                onChange={(e) => setTestValue(e.target.value)}
                                className='flex justify-start mt-2'
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="advice" className='flex justify-start font-semibold'>Advice: </label>
                            <input
                                type="text"
                                id="advice"
                                value={adviceValue}
                                onChange={(e) => setAdviceValue(e.target.value)}
                                className='flex justify-start mt-2'
                            />
                        </div>
                        <br />
                    </div>
                    <div>
                        <div className='flex justify-start'>
                            <button
                                type="button"
                                onClick={addMedication}
                                className="btn btn-ghost bg-green-500 hover:bg-green-600 border-none text-white px-5 lg:px-14 rounded-sm font-mono text-lg"
                            >
                                Add Medication
                            </button>
                        </div>

                        <br />
                        {medications.map((medication, index) => (
                            <div key={index}>
                                <div className='flex justify-start'>
                                    <label htmlFor={`med${index}`} className='flex justify-start font-bold'>Med {index + 1}: </label>
                                    <input
                                        type="text"
                                        id={`med${index}`}
                                        value={medication.med}
                                        onChange={(e) => updateMedication(index, 'med', e.target.value)}
                                        className='flex justify-start ml-2'
                                    />
                                </div>
                                <div className='flex justify-start my-2'>
                                    <label htmlFor={`morning${index}`} className='flex justify-start'>Morning: </label>
                                    <input
                                        type="text"
                                        id={`morning${index}`}
                                        value={medication.morning}
                                        onChange={(e) => updateMedication(index, 'morning', e.target.value)}
                                        className={`flex justify-start ml-2 ${isMorningInvalid ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                <div className='flex justify-start my-2'>
                                    <label htmlFor={`day${index}`} className='flex justify-start'>Day: </label>
                                    <input
                                        type="text"
                                        id={`day${index}`}
                                        value={medication.day}
                                        onChange={(e) => updateMedication(index, 'day', e.target.value)}
                                        className={`flex justify-start ml-2 ${isDayInvalid ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                <div className='flex justify-start'>
                                    <label htmlFor={`night${index}`} className='flex justify-start'>Night: </label>
                                    <input
                                        type="text"
                                        id={`night${index}`}
                                        value={medication.night}
                                        onChange={(e) => updateMedication(index, 'night', e.target.value)}
                                        className={`flex justify-start ml-2 ${isNightInvalid ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='flex lg:justify-end mb-5 lg:mb-10'>
                            <button
                                type="button"
                                onClick={clearFields}
                                className="btn btn-ghost bg-red-500 border-none text-white px-5 lg:px-14 hover:bg-red-600 rounded-sm font-mono text-lg"
                            >
                                Clear
                            </button>
                        </div>
                        <div className='flex lg:justify-end'>
                            <button
                                type="button"
                                onClick={downloadDataAsPDF}
                                className="btn btn-ghost bg-gradient-to-r from-sky-500 to-orange-500 border-none text-white px-5 lg:px-14 hover:scale-105 duration-300 rounded-sm font-mono text-lg"
                            >
                                PRINT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoctorDetails;
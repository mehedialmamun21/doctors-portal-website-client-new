import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { useParams } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

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

    const deleteMedication = (index) => {
        const updatedMedications = [...medications];
        updatedMedications.splice(index, 1);
        setMedications(updatedMedications);
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
        const smallFontSize = 8;
        const mediumFontSize = 10;
        doc.setFontSize(smallFontSize);
        const pageWidth = doc.internal.pageSize.width;
        doc.text(`Date (Today): ${currentDate}`, margin, 10);
        if (nextMeetDate) {
            const nextMeetTextWidth = doc.getStringUnitWidth(`Next Meet: ${nextMeetDate}`) * smallFontSize / doc.internal.scaleFactor;
            doc.text(`Next Meet: ${nextMeetDate}`, pageWidth - margin - nextMeetTextWidth, 10);
        }
        doc.text(`Name: ${doctor.name}`, margin, 30);
        doc.text(`Degree: ${doctor.degree}`, margin, 40);
        doc.text(`BMDC Reg. No: ${doctor._id}`, margin, 50);
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
            (medication) => !medication.med || !medication.morning || !medication.day || !medication.night
        );

        if (hasMedicationWithMissingFields) {
            alert('Med, Morning, Day, and Night fields are mandatory for all medications.');
            return;
        }

        doc.text(`-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`, margin, 110);
        doc.setFontSize(mediumFontSize);
        doc.text(`Symptoms: ${symptomValue}`, margin, 120);
        doc.text(`Tests: ${testValue}`, margin, 130);
        doc.text(`Advice: ${adviceValue}`, margin, 140);
        doc.setFontSize(smallFontSize);
        doc.text(`-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`, margin, 150);
        doc.setFontSize(mediumFontSize);
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

        // doc.setFontSize(smallFontSize);
        // if (nextMeetDate) {
        //     doc.text(`Next Meet: ${nextMeetDate}`, margin, 210 + medications.length * verticalSpacing);
        // }
        doc.save('data.pdf');
        window.print();
    };

    return (
        <section className='h-screen'>
            <div className='pt-24 lg:pt-28 pb-24 lg:pb-10 text-center'>
                <p className='mb-8 lg:mb-12 font-semibold uppercase'>
                    <span className='font-semibold text-center uppercase text-lg lg:text-2xl'>
                        Prescription
                    </span>
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-3 bg-blue-200 border border-zinc-300 py-5 mx-5 lg:mx-40 px-5 lg:px-24'>
                    <div>
                        <p className='text-black text-md lg:text-lg font-bold font-serif flex justify-start'>{doctor.name}</p>
                        <p className='flex items-center pb-3 text-black text-sm'>{doctor.degree}</p>
                        <p className='font-mono flex justify-start'><span className='text-black'>BMDC Reg:</span><span className='text-black'>{doctor._id} </span></p>
                        <p className='font-mono flex justify-start'><span className='text-black'>Email:</span><span className='text-black'>{doctor.email}</span></p>
                        <p className='font-mono flex justify-start'><span className='text-black'>Phone:</span><span className='text-black'>{doctor.phone}</span></p>
                    </div>
                    <div>
                        <p className='font-mono flex justify-start'><span className='text-black'>Time:</span><span className='text-black'>{doctor.time}</span></p>
                        <p className='font-mono flex justify-start'><span className='text-black'>Room No:</span><span className='text-black'>{doctor.room}</span></p>
                        <p className='pb-2 font-mono flex justify-start'><span className='text-black'>Chamber:</span><span className='text-black'>DentaMart, HSTU, Dinajpur</span></p>
                    </div>
                    <div>
                        <p className="font-mono text-black flex justify-start">Date: {currentDate}</p>
                        <div className='flex items-center justify-start mt-4'>
                            <label htmlFor="nextMeet" className='text-black font-mono'>Next Meet: </label>
                            <input
                                type="text"
                                id="nextMeet"
                                className='ml-2 pl-2'
                                value={nextMeetDate}
                                onChange={(e) => setNextMeetDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-24 pt-7 pb-5 lg:pb-7 mx-5 lg:mx-40 bg-amber-200 border border-l-zinc-300 border-r-zinc-300 border-b-zinc-300'>
                    <div className='mb-5 lg:mb-0'>
                        <div className='mb-3'>
                            <label htmlFor='symptom' className='flex justify-start font-semibold text-sm uppercase'>
                                Symptoms:
                            </label>
                            <input
                                type='text'
                                id='symptom'
                                value={symptomValue}
                                onChange={(e) => setSymptomValue(e.target.value)}
                                className='flex justify-start mt-2 pl-2'
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='test' className='flex justify-start font-semibold text-sm uppercase'>
                                Tests:
                            </label>
                            <input
                                type='text'
                                id='test'
                                value={testValue}
                                onChange={(e) => setTestValue(e.target.value)}
                                className='flex justify-start mt-2 pl-2'
                            />
                        </div>

                        <div>
                            <label htmlFor='advice' className='flex justify-start font-semibold text-sm uppercase'>
                                Advice:
                            </label>
                            <input
                                type='text'
                                id='advice'
                                value={adviceValue}
                                onChange={(e) => setAdviceValue(e.target.value)}
                                className='flex justify-start mt-2 pl-2'
                            />
                        </div>

                    </div>
                    <div>
                        <div className='flex justify-start'>
                            <button
                                type='button'
                                onClick={addMedication}
                                className='btn btn-ghost bg-green-500 hover:bg-green-600 border-none text-white px-5 lg:px-14 rounded-sm font-mono text-lg'
                            >
                                Add Medication
                            </button>
                        </div>
                        <br />
                        {medications.map((medication, index) => (
                            <div key={index}>
                                <div className='flex items-center justify-start mb-5'>
                                    <label htmlFor={`med${index}`} className='flex justify-start font-bold'>
                                        Med {index + 1}:
                                    </label>
                                    <input
                                        type='text'
                                        id={`med${index}`}
                                        value={medication.med}
                                        onChange={(e) => updateMedication(index, 'med', e.target.value)}
                                        className='flex justify-start ml-2 pl-2'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => deleteMedication(index)}
                                        className='btn btn-ghost btn-sm border-none bg-red-500 hover:bg-red-600 text-white px-2 ml-1 lg:ml-3 rounded-sm font-mono text-sm'
                                    >
                                        <FaTrashAlt size="1rem" />
                                    </button>
                                </div>
                                <div className='flex items-center justify-start my-2'>
                                    <label htmlFor={`morning${index}`} className='flex justify-start'>
                                        Morning:
                                    </label>
                                    <div className='flex w-1/12'>
                                        <input
                                            type='text'
                                            id={`morning${index}`}
                                            value={medication.morning}
                                            onChange={(e) => updateMedication(index, 'morning', e.target.value)}
                                            className={`flex justify-start ml-2 pl-1 ${isMorningInvalid ? 'border-red-500' : ''} w-full`}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center justify-start my-2'>
                                    <label htmlFor={`day${index}`} className='flex justify-start'>
                                        Day:
                                    </label>
                                    <div className='flex w-1/12'>
                                        <input
                                            type='text'
                                            id={`day${index}`}
                                            value={medication.day}
                                            onChange={(e) => updateMedication(index, 'day', e.target.value)}
                                            className={`flex justify-start ml-2 pl-1 ${isDayInvalid ? 'border-red-500' : ''} w-full`}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center justify-start my-2'>
                                    <label htmlFor={`night${index}`} className='flex justify-start'>
                                        Night:
                                    </label>
                                    <div className='flex w-1/12'>
                                        <input
                                            type='text'
                                            id={`night${index}`}
                                            value={medication.night}
                                            onChange={(e) => updateMedication(index, 'night', e.target.value)}
                                            className={`flex justify-start ml-2 pl-1 ${isNightInvalid ? 'border-red-500' : ''} w-full`}
                                        />
                                    </div>
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='flex lg:justify-end mb-5 lg:mb-10'>
                            <button
                                type='button'
                                onClick={clearFields}
                                className='btn btn-ghost bg-red-500 border-none text-white px-7 lg:px-14 hover:bg-red-600 rounded-sm font-mono text-lg'
                            >
                                Clear
                            </button>
                        </div>
                        <div className='flex lg:justify-end'>
                            <button
                                type='button'
                                onClick={downloadDataAsPDF}
                                className='btn btn-ghost bg-gradient-to-r from-sky-500 to-orange-500 border-none text-white px-7 lg:px-14 hover:scale-105 duration-300 rounded-sm font-mono text-lg'
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
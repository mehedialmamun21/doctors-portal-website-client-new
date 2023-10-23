import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function DoctorDetails() {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/doctor/${doctorId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDoctor(data));
    }, [doctorId]);

    const [field1Value, setField1Value] = useState('');
    const [field2Value, setField2Value] = useState('');
    const [field3Value, setField3Value] = useState('');
    const [symptomValue, setSymptomValue] = useState('');
    const [testValue, setTestValue] = useState('');
    const [adviceValue, setAdviceValue] = useState('');

    const downloadDataAsPDF = () => {
        const doc = new jsPDF();
        const margin = 10;
        let isEmpty = true;

        doc.text(`Name: ${doctor.name}`, margin, 20);
        doc.text(`Degree: ${doctor.degree}`, margin, 30);
        doc.text(`Reg: ${doctor._id}`, margin, 40);
        doc.text(`Email: ${doctor.email}`, margin, 50);
        doc.text(`Time: ${doctor.time}`, margin, 60);
        doc.text(`Phone: ${doctor.phone}`, margin, 70);
        doc.text(`Room No: ${doctor.room}`, margin, 80);
        doc.text(`Chamber: DentaMart, Dinajpur`, margin, 90);

        if (!symptomValue || !testValue || !adviceValue) {
            alert('Symptoms, Tests, and Advice are required fields.');
            return;
        }

        if (field1Value || field2Value || field3Value) {
            isEmpty = false;
        }

        if (symptomValue) {
            doc.text(`Symptoms: ${symptomValue}`, margin, 100);
        }
        if (testValue) {
            doc.text(`Tests: ${testValue}`, margin, 110);
        }
        if (adviceValue) {
            doc.text(`Advice: ${adviceValue}`, margin, 120);
        }

        if (field1Value) {
            doc.text(`Med 1: ${field1Value}`, margin, 130);
        }
        if (field2Value) {
            doc.text(`Med 2: ${field2Value}`, margin, 140);
        }
        if (field3Value) {
            doc.text(`Med 3: ${field3Value}`, margin, 150);
        }

        if (isEmpty) {
            alert('Please fill at least one of the Med fields before downloading.');
        } else {
            doc.save('data.pdf');
            // Clear the input fields
            setField1Value('');
            setField2Value('');
            setField3Value('');
            setSymptomValue('');
            setTestValue('');
            setAdviceValue('');
        }
    };

    return (
        <section className='h-screen'>
            <div className='pt-28 text-center'>
                <div className='mb-20'>
                    <p className='text-xl font-semibold'><span className='border border-black bg-white px-10 py-2'>Prescribe from here:</span></p>
                </div>

                <div className='grid grid-cols-4 bg-amber-200 py-20 mx-10'>

                    <div className='pl-40'>
                        <p className='text-black text-xl font-bold font-serif'>{doctor.name}</p>
                        <p className='flex justify-center items-center pb-2 text-lg text-black'>{doctor.degree}</p>
                        <p className='flex justify-center items-center font-mono text-black'>Reg:<span className='text-black'>{doctor._id} </span></p>
                        <p className='font-mono'><span className='text-black'>Email: </span><span className='font-semibold text-black'>{doctor.email}</span></p>

                    </div>
                    <div>
                        <p className='font-mono'><span className='text-black'>Time: </span><span className='font-semibold text-black'>{doctor.time}</span></p>
                        <p className='font-mono'><span className='text-black'>Phone: </span><span className='font-semibold text-black'>{doctor.phone}</span></p>
                        <p className='font-mono'><span className='text-black'>Room No: </span><span className='font-semibold text-black'>{doctor.room}</span></p>
                        <p className='pb-2 font-mono'><span className='text-black'>Chamber: </span> <span className='font-semibold text-black'>DentaMart, Dinajpur</span></p>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="symptom">Symptoms: </label>
                            <input
                                type="text"
                                id="symptom"
                                value={symptomValue}
                                onChange={(e) => setSymptomValue(e.target.value)}
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="test">Tests: </label>
                            <input
                                type="text"
                                id="test"
                                value={testValue}
                                onChange={(e) => setTestValue(e.target.value)}
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="advice">Advice: </label>
                            <input
                                type="text"
                                id="advice"
                                value={adviceValue}
                                onChange={(e) => setAdviceValue(e.target.value)}
                            />
                        </div>
                        <br />
                    </div>

                    <div>
                        <div>
                            <label htmlFor="field1">Med 1: </label>
                            <input
                                type="text"
                                id="field1"
                                value={field1Value}
                                onChange={(e) => setField1Value(e.target.value)}
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="field2">Med 2: </label>
                            <input
                                type="text"
                                id="field2"
                                value={field2Value}
                                onChange={(e) => setField2Value(e.target.value)}
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="field3">Med 3: </label>
                            <input
                                type="text"
                                id="field3"
                                value={field3Value}
                                onChange={(e) => setField3Value(e.target.value)}
                            />
                        </div>
                        <br />
                    </div>
                </div>

                <button type="button" onClick={downloadDataAsPDF} className="btn btn-ghost bg-gradient-to-r from-sky-500 to-orange-500 text-white px-2 lg:px-14 mt-10 hover:scale-105 duration-300 rounded-sm font-mono text-lg">
                    PRINT
                </button>
            </div>
        </section>
    );
}

export default DoctorDetails;
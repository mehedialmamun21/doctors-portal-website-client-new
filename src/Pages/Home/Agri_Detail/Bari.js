import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MdPictureAsPdf } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Bari = () => {
    return (
        <div className='pt-10 lg:px-40 lg:pb-5'>

            <div className='lg:pb-5'>
                <a href="BARI1.pdf" download="BARI1.pdf" className='inline-block'>
                    <button className='flex items-center text-md rounded hover:text-orange-500'>
                        <MdPictureAsPdf className='text-red-600 mr-2' />
                        <p className='mr-2'>বারি উদ্ভাবিত সম্ভাবনাময় কৃষি যন্ত্রপাতি</p>
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </button>
                </a>
            </div>

            <div className='lg:pb-5'>
                <a href="BARI2.pdf" download="BARI2.pdf" className='inline-block'>
                    <button className='flex items-center text-md rounded hover:text-orange-500'>
                        <MdPictureAsPdf className='text-red-600 mr-2' />
                        <p className='mr-2'>উদ্যানতাত্ত্বিক ফসলের সমন্বিত সার ও পানি ব্যবস্থাপনা প্রযুক্তি</p>
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </button>
                </a>
            </div>
            <div className='lg:pb-5'>
                <a href="BARI3.pdf" download="BARI3.pdf" className='inline-block'>
                    <button className='flex items-center text-md rounded hover:text-orange-500'>
                        <MdPictureAsPdf className='text-red-600 mr-2' />
                        <p className='mr-2'>বাংলাদেশে এরোপনিক্স পদ্ধতিতে মানসম্পন্ন বীজ আলু (মিনি-টিউবার) উৎপাদন</p>
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </button>
                </a>
            </div>
            <div className='lg:pb-5'>
                <a href="BARI4_Dragon.pdf" download="BARI4_Dragon.pdf" className='inline-block'>
                    <button className='flex items-center text-md rounded hover:text-orange-500'>
                        <MdPictureAsPdf className='text-red-600 mr-2' />
                        <p className='mr-2'>বারি ড্রাগন ফল-১ এর উৎপাদন কলাকৌশল</p>
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </button>
                </a>
            </div>
            <div className='lg:pb-5'>
                <a href="BARI5_Bhutta.pdf" download="BARI5_Bhutta.pdf" className='inline-block'>
                    <button className='flex items-center text-md rounded hover:text-orange-500'>
                        <MdPictureAsPdf className='text-red-600 mr-2' />
                        <p className='mr-2'>বারি হাইব্রিড ভুট্টা-১৩ এর উৎপাদন কৌশল</p>
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </button>
                </a>
            </div>
            <div className='lg:pb-5'>
                <a href="BARI6.pdf" download="BARI6.pdf" className='inline-block'>
                    <button className='flex items-center text-md rounded hover:text-orange-500'>
                        <MdPictureAsPdf className='text-red-600 mr-2' />
                        <p className='mr-2'>হাইড্রোপনিক পদ্ধতিতে উদ্যানতাত্ত্বিক ফসলের চাষ</p>
                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </button>
                </a>
            </div>

        </div>
    );
};

export default Bari;
import React from 'react';
import Footer from '../../Shared/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { MdPictureAsPdf } from 'react-icons/md';

const BiseshPoramorsho = () => {
    return (
        <div className='h-screen'>
            <div>
                <h2 className='text-2xl text-cener font-semibold px-40 pt-10'>বিশেষ পরামর্শঃ</h2>
            </div>
            <div>
                <div className='px-5 pt-10 lg:px-40 lg:pb-5'>
                    <a href="potato_disease.pdf" download="potato_disease.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>আলুর মড়ক রোগ দমনে করণীয়</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>

                <div className='px-5 lg:px-40'>
                    <a href="rice_gachforing.pdf" download="rice_gachforing.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>ধানে বাদামি গাছ ফড়িং দমনে করণীয়</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>

                <div className='px-5 lg:px-40 pt-5'>
                    <a href="boro_rice.pdf" download="boro_rice.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>ঠান্ডা পরবর্তী সময়ে বোরো ধান পরিচর্যায় কৃষক ভাইদের করণীয়</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>

                <div className='px-5 pt-5 lg:px-40'>
                    <a href="flood_activity.pdf" download="flood_activity.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>বন্যা ও বন্যা পরবর্তীতে চাষি ভাইদের করণীয়</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>
                <div className='px-5 pt-5 lg:px-40'>
                    <a href="rice_disease.pdf" download="rice_disease.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>ধানের ক্ষতিকারক রোগ ব্যবস্থাপনা</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>
                <div className='px-5 pt-5 lg:px-40 lg:pb-5'>
                    <a href="fartilizer.pdf" download="fartilizer.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>সুষম সার ব্যবহারের পরামর্শ</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default BiseshPoramorsho;
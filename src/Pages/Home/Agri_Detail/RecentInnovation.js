import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MdPictureAsPdf } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const RecentInnovation = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold px-40 py-10'>সাম্প্রতিক উদ্ভাবনঃ</h2>
            <div className='h-screen px-5 lg:px-40'>
                <div className='flex items-center pb-3'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/bri"><span className='hover:font-bold bg-gray-200 px-5 py-1 rounded'>ব্রি উদ্ভাবিত ধানের জাতসমূহ</span></Link>
                </div>
                <div className='flex items-center py-3'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/bari"><span className='hover:font-bold bg-gray-200 px-5 py-1 rounded'>বারি উদ্ভাবিত নতুন প্রযুক্তি</span></Link>
                </div>

                <div className='py-3'>
                    <a href="BRI_Jat.pdf" download="BRI_Jat.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>বিএআরআই উদ্ভাবিত জাত</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>

                <div className='flex items-center py-3'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    {/* <Link to="/aush_rice"><span className='text-sm hover:font-bold'>বিনা উদ্ভাবিত নতুন ধানের জাত</span></Link> */}
                    <a href="https://i.postimg.cc/qMHxgCYG/Bina.jpg" className='bg-gray-200 px-5 py-1 rounded hover:font-bold'>বিনা উদ্ভাবিত নতুন ধানের জাত</a>
                </div>

                {/* <div className='flex items-center pb-3'>
                <MdPictureAsPdf className='text-red-600 mr-2' />
                <Link to="/aush_rice"><span className='text-sm hover:font-bold'>বিএসআরআই উদ্ভাবিত নতুন আখের জাত</span></Link>
            </div> */}

                <div className='py-3'>
                    <a href="BSRI_akh.pdf" download="BSRI_akh.pdf" className='inline-block'>
                        <button className='flex items-center text-md rounded hover:text-orange-500'>
                            <MdPictureAsPdf className='text-red-600 mr-2' />
                            <p className='mr-2 bg-gray-200 px-5 py-1 rounded'>বিএসআরআই উদ্ভাবিত নতুন আখের জাত</p>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </button>
                    </a>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default RecentInnovation;
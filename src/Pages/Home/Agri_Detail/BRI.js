import React from 'react';
import { MdPictureAsPdf } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const BRI = () => {
    return (
        <div className='h-screen'>
            <div className='px-5 lg:px-40'>
                <h2 className='text-2xl text-cener font-semibold py-10'>ব্রি উদ্ভাবিত ধানের জাতসমূহঃ <br /> <span className='text-xl'>(সর্বমোট ১০৬)</span> </h2>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_download"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>আউশ ধানের জাত</span></Link>
                </div>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_rice"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>আমন ধানের জাত</span></Link>
                </div>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_rice"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>বোরো ধানের জাত</span></Link>
                </div>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_rice"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>হাইব্রিড ধানের জাত</span></Link>
                </div>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_rice"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>জিংক সমৃদ্ধ ধানের জাত</span></Link>
                </div>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_rice"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>খরা সহিষ্ণু জাত</span></Link>
                </div>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_rice"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>জলমগ্নতা সহিষ্ণু ধানের জাত</span></Link>
                </div>
                <div className='flex items-center pb-5'>
                    <MdPictureAsPdf className='text-red-600 mr-2' />
                    <Link to="/aush_rice"><span className=' hover:font-bold bg-gray-200 px-5 py-1 rounded'>এন্টি অক্সিডেন্ট সমৃদ্ধ ধানের জাত</span></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BRI;
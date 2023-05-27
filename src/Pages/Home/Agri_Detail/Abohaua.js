import React from 'react';
import Footer from '../../Shared/Footer';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Abohaua = () => {
    return (
        <div>
            <div className='px-5 pt-10 lg:px-40 lg:pb-28'>

                <div className='grid grid-cols-3 gap-10'>

                    <div>
                        <h2 className='font-bold text-gray-500'>আবহাওয়া সম্পর্কিত তথ্য</h2>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>পর্যবেক্ষিত আবহাওয়া তথ্য</span></Link>
                        </div>
                        <br />


                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>মধ্য মেয়াদি পূর্বাভাস</span></Link>
                        </div>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>অন্যান্য পূর্বাভাস</span></Link>
                        </div>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>আবহাওয়া সতর্কবার্তা</span></Link>
                        </div>
                        <br />

                    </div>



                    <div>
                        <h2 className='font-bold text-gray-500'>জলবায়ু সম্পর্কিত তথ্য</h2>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>বৃষ্টিপাত</span></Link>
                        </div>
                        <br />


                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>সর্বোচ্চ তাপমাত্রা </span></Link>
                        </div>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>সর্বনিম্ন তাপমাত্রা</span></Link>
                        </div>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>সর্বোচ্চ আর্দ্রতা</span></Link>
                        </div>
                        <br />
                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>সর্বনিম্ন আর্দ্রতা</span></Link>
                        </div>
                        <br />
                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>বাতাসের গতি</span></Link>
                        </div>
                        <br />
                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>বাতাসের দিক</span></Link>
                        </div>
                        <br />

                    </div>




                    <div>
                        <h2 className='font-bold text-gray-500'>অন্যান্য তথ্য</h2>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>নদ-নদীর অবস্থা</span></Link>
                        </div>
                        <br />


                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>খরা পর্যবেক্ষণ</span></Link>
                        </div>
                        <br />

                        <div className='flex'>
                            <div className='flex items-center justify-center text-green-500 mr-3'>
                                <BiRightArrow></BiRightArrow>
                            </div>
                            <Link to="/home"><span className='text-sm hover:font-bold'>বন্যা সম্পর্কিত তথ্য</span></Link>
                        </div>

                    </div>



                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Abohaua;
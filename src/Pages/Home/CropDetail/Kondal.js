import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Pagination from '../../../component/PrimaryButton/Pagination';

const Kondal = () => {
    return (
        <div >

            <div>
                <div className='lg:px-40 lg:pt-10'>
                    <h2 className='text-green-600 text-xl'> <u>সর্বশেষ প্রকাশিত কন্দালঃ</u> </h2>

                    <div className='pt-10'>
                        <div className='flex'>
                            <img className='w-60 h-54 pt-3' src="https://i.postimg.cc/cLj7r831/Metealu.jpg" alt="" />
                            <div className='pt-3'>
                                <p className='font-semibold pl-3'>মেটে আলু</p>
                                <p className='pl-3'>মেটে আলু কন্দালজাতীয় ফসল। আমাদের দেশে এটি সবজি হিসেবে ব্যবহৃত হয়।
                                    বাণিজ্যিকভাবে এর চাষবাস তেমনটি দেখা যায় না, তবে প্রতিটি জেলায় বাড়ির চারপাশে, গাছের নিচে,
                                    মাচায়, আঙিনায়, বেড়ার ধারে এর চাষাবাদ হতে দেখা যায়। মেটে আলু গরম আবহাওয়ায় ভালো জন্মে।
                                    ঠান্ডায় গাছ বাড়ে না, শীতে গাছ শুকিয়ে মারা যায়। হালকা দো-আঁশ মাটি বেশি উপযোগী।</p>
                                <p className='pl-3 font-semibold'> জলবায়ু ও মাটিঃ</p>
                                <p className='pl-3'>দীর্ঘ সময়ব্যাপী উষ্ণ ও আর্দ্র আবহাওয়া মেটে আলু চাষের জন্য উত্তম।</p>
                                <div className='flex items-center justify-center pt-5'>
                                    <div className='flex items-center justify-center'>
                                        <FaHandPointRight className='text-gray-500' />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <Link to="/kondal"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-10'>
                        <div className='flex'>
                            <img className='w-60 h-54 pt-3' src="https://i.postimg.cc/X76Y7NXM/alu.jpg" alt="" />
                            <div className='pt-3'>
                                <p className='font-semibold pl-3'>আলু</p>
                                <p className='pl-3 font-semibold'>আলুর উৎপাদন প্রযুক্তি</p> <br />
                                <p className='pl-3 font-semibold'>পুষ্টি মূল্য:</p>
                                <p className='pl-3'>আলু পুষ্টির দিক দিয়ে ভাত ও গমের সাথে তুল্য।
                                    এছাড়া খাদ্য হিসাবে আলু সহজেই হজম হয়। আলুতে যথেষ্ঠ পরিমানে খাদ্য
                                    শক্তি রয়েছে। তাছাড়া ভিটামিন ও খনিজ লবণও পাওয়া যায়।</p>
                                <p className='pl-3'> <span className='font-semibold'>ব্যবহার :</span> আলু দিয়ে মিষ্টি,
                                    সেমাই, নানা রকম ভর্তাসহ বিভিন্ন মুখরোচক খাবার তৈরি করা যায়। তরকারি হিসাবে
                                    খাওয়া ছাড়াও প্রক্রিয়াজাত করে চিপস বিক্রি করে গৃহবধূ ও মেয়েরা আর্থিকভাবে
                                    লাভবান হতে পারে।</p>
                                <div className='flex items-center justify-center pt-5'>
                                    <div className='flex items-center justify-center'>
                                        <FaHandPointRight className='text-gray-500' />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <Link to="/kondal"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='pt-10'>
                        <div className='flex'>
                            <img className='w-60 h-54 pt-3' src="https://i.postimg.cc/xTCVQcST/kochu.jpg" alt="" />
                            <div className='pt-3'>
                                <p className='font-semibold pl-3'>কচু</p>
                                <p className='pl-3 font-semibold'>পানি কচুর উৎপাদন প্রযুক্তি</p>
                                <p className='pl-3 font-semibold'>পুষ্টি মূল্য:</p>
                                <p className='pl-3'>কচুতে ভিটামিন এ এবং প্রচুর পরিমানে লৌহ থাকে।</p>
                                <p className='pl-3'> <span className='font-semibold'>ব্যবহার :</span>যে সমস্ত কচু দাড়াঁনো পানিতে চাষ
                                    করা যায় তাকে পানি কচু বলে। আমাদের দেশে কচু একটি সুস্বাদু সবজি হিসেবে পরিচিত।
                                    বাংলাদেশের পানি কচুর বিভিন্ন নাম রয়েছে যেমন নারিকেল কচু, জাত কচু, বাশঁ কচু ইত্যাদি।</p>
                                <div className='flex items-center justify-center pt-5'>
                                    <div className='flex items-center justify-center'>
                                        <FaHandPointRight className='text-gray-500' />
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <Link to="/kondal"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination></Pagination>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Kondal;
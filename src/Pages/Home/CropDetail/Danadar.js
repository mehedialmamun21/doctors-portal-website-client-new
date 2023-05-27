import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Pagination from '../../../component/PrimaryButton/Pagination';

const Danadar = () => {
    return (
        <div>
            <div>
                <div className='lg:px-40 lg:pt-10'>
                    <h2 className='text-green-600 text-xl'> <u>সর্বশেষ প্রকাশিত দানাদারঃ</u> </h2>
                    <div className='grid grid-cols-2 gap-5'>


                        <div className='pt-10'>
                            <p>কাউন</p>
                            <div className='flex'>
                                <img className='w-60 h-54 pt-3' src="https://i.postimg.cc/3rqX4rrn/Grain-millet-early-grain-fill-Tifton-7-3-02.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='pl-3 font-semibold'>ভেষজগুনঃ</p>
                                    <p className='pl-3'> <span className='font-semibold'>ব্যবহারঃ</span> ছোট দানা বিশিষ্ট শস্যটি এ দেশে গরীবদের খাদ্য হিসেবে বিবেচিত হয়।</p>
                                    <p className='pl-3 font-semibold'> উপযুক্ত জমি ও মাটিঃ</p>
                                    <p className='pl-3'>প্রায় সব ধরনের মাটিতে কাউনের চাষ করা যায়। তবে পানি দাঁড়ায় না এমন বেলে দোঁআশ মাটিতে এর ফলন ভাল হয়।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/danadar"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='pt-10'>
                            <p>ভুট্টা</p>
                            <div className='flex'>
                                <img className='pt-3 w-60 h-54' src="https://i.postimg.cc/YCR3vVrt/maiz.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='pl-3'> <span className='font-semibold'>ফসলের নাম:</span> ভুট্টা </p>
                                    <p className='pl-3'> <span className='font-semibold'>পুষ্টি মূল্যঃ</span> ধান ও গমের তুলনায় ভুট্টার পুষ্টিমান বেশী।
                                        এতে প্রায় ১১% আমিষ জাতীয় উপাদান রয়েছে। এছাড়া হলদে রংয়ের ভুট্টা দানায় প্রতি ১০০
                                        গ্রামে প্রায় ৯০ মিলিগ্রাম ক্যারোটিন বা ভিটামিন "এ" থাকে। </p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/danadar"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='pt-10'>
                            <p>ধানের রোগ</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/QMwhrfWq/Rice-stemrust-inset.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='pl-3'> <span className='font-semibold'>ব্যাকটেরিয়াজনিত পাতা পোড়া রোগ (Bacterial Blight)</span></p>
                                    <p className='pl-3'> <span className='font-semibold'>রোগের জীবাণু- <i>Xanthomonas oryzae pv. oryzae</i> </span></p>
                                    <p className='pl-3'>এটি ঝলসানো রোগ নামেও পরিচিত। শিশির, সেচের পানি, বৃষ্টি, বন্যা এবং ঝড়ো হাওয়ার মাধ্যমে
                                        এ রোগ ছড়ায়। এ রোগের ফলে গাছের বিভিন্ন বয়সে তিনটি ভিন্ন ভিন্ন লক্ষণ
                                        (ক্রিসেক, পাতা পোড়া ও ফ্যাকাশে হলুদ) দেখা দেয়।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/danadar"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p>ধানের পোকামাকড়</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/8PNHHDnh/insect-01.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='pl-3'>বর্তমানে দেশে প্রায় ১০ লক্ষ হেক্টর জমিতে হাইব্রিড
                                        জাতের ধান আবাদ করা হচ্ছে। স্থানীয় জাতের তুলনায় এসব জাতে
                                        পোকামাকড়ের আক্রমণ বেশি হয়। এসব আধুনিক জাতের ভাল ফলন
                                        পাওয়ার জন্য স্থানীয় জাতের তুলনায় বেশি সার ও সেচ দিতে হয়।
                                        এজন্য পোকামাকড়ের আক্রমণও বৃদ্ধি পায়। ১৯৮৫ সালে এ দেশে ধান
                                        ফসলের জন্য ক্ষতিকর ১৭৫ প্রজাতির পোকাকে শক্ত করা হয়।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/danadar"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p>ধানের জাত</p>
                            <div className='flex'>
                                <img className='pt-3 w-48 h-48' src="https://i.postimg.cc/bJRTXBZG/rice-field-284x150.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='pl-3'>অধিক ফলন ও লাভের জন্য এলাকা ভিত্তিক চাষ
                                        উপযোগী সঠিক জাত নির্বাচন একটি গুরুত্বপূর্ণ বিষয়। ভাল বংশ ও মা
                                        ছাড়া যেমন ভাল সমন্বিত আশা করা যায় না তেমনি ভাল জাতের ভাল বীজ
                                        ছাড়া উত্তম ফসল পাওয়া যায় না।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/danadar"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p>গম</p>
                            <div className='flex'>
                                <img className='pt-3 w-48 h-48' src="https://i.postimg.cc/vZ365x4V/Wheat-production.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='pl-3'> <span className='font-semibold'>ফসলের নাম:</span> গম </p>
                                    <p className='pl-3'> <span className='font-semibold'>পুষ্টি মূল্যঃ</span> গম হতে যে আটা হয় তার প্রতি ১০০
                                        গ্রাম আটায় আমিষ ১২.১ গ্রাম, শর্করা ৬৯.৪ গ্রাম, ক্যালসিয়াম ৪৮
                                        মিলিগ্রাম, লৌহ ১১.৫ মিলিগ্রাম, ক্যারোটিন ২৯ মাইক্রোগ্রাম,
                                        ভিটামিন বি-১ ০.৪৯ মিলিগ্রাম, ভিটামিন বি-২ ০.২৯ মিলিগ্রাম,
                                        আঁশ ১.৯ গ্রাম, খনিজ পদার্থ ২.৭ গ্রাম এবং জলীয় অংশ থাকে ১২.২
                                        গ্রাম।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/danadar"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <Pagination />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Danadar;
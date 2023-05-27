import React from 'react';
import Footer from '../../Shared/Footer';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pagination from '../../../component/PrimaryButton/Pagination';

const Tell = () => {
    return (
        <div>
            <div>
                <div className='lg:px-40 lg:pt-10'>


                    <h2 className='text-green-600 text-xl'> <u>সর্বশেষ প্রকাশিত তেল ফসলঃ</u> </h2>
                    <div className='grid grid-cols-2 gap-5'>


                        <div className='pt-10'>
                            <p className=''>বাদাম</p>
                            <div className='flex'>
                                <img className='w-60 h-54 pt-3' src="https://i.postimg.cc/BvxtmdVF/chinabadam.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>বাদাম</p>
                                    <p className='pl-3 font-semibold'> চরাঞ্চলের বাদাম চাষ :</p>
                                    <p className='pl-3'>চরাঞ্চলের জমিতে বাদাম চাষের জন্য খুবই
                                        উপযোগী। প্রতি বছরই বাদাম চাষ করার সুযোগ রয়েছে। ভালো ফলন
                                        হলে একর প্রতি ২২-২৪ মন বাদাম উৎপাদন করা সম্ভাব। প্রয়োজন
                                        সরকারি পৃষ্ঠপোষকতা, পুজি ও প্রশিক্ষণ প্রদান করা। কারণ,
                                        তেলজাতীয় ফসলের মধ্যে চীনা বাদাম একটি গুরুত্বপূর্ন।
                                        গুনাগুন দিক থেকে চীনাবাদাম সরিষার তেলের পাশাপাশি।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/tel"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <div className='flex'>
                                <img className='pt-3 w-60 h-54' src="https://i.postimg.cc/MHXQ39R8/sunflower.png" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>সুর্যমুখী (Sunflower)<br /> <i> Hellianthus annus</i> </p>
                                    <p className='pl-3'>১. <span className='font-semibold'>পুষ্টিমূল্য/উপাদান :</span> বীজে লিনোলিক এসিড বিদ্যমান। উন্নতমানের তৈল থাকে।</p>
                                    <p className='pl-3'>২. <span className='font-semibold'>ভেষজগুণ :</span>  হৃদরোগীদের জন্য সূর্যমুখীর তেল খুবই উপকারী।</p>
                                    <p className='pl-3'>৩. <span className='font-semibold'>ব্যবহার :</span>সূর্যমুখীর খৈল গরু ও
                                        মহিষের উৎকৃষ্টমানের খাদ্য হিসেবে ব্যবহৃত হয়। এর বীজ ছাড়ানোর পর মাথাগুলো গরুর খাদ্য হিসেবে
                                        ব্যবহার করা যায়। গাছ ও পুষ্পস্তবক জ্বালানী হিসেবে ব্যবহৃত হয়।</p>

                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/tel"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='pt-10'>
                            <p className=''>পামওয়েল</p>
                            <div className='flex'>
                                <img className='w-60 h-54 pt-3' src="https://i.postimg.cc/W4rSX1V7/palm-oil-1.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>পামওয়েল বৃক্ষ</p>
                                    <p className='pl-3'>পামওয়েল বৃক্ষ
                                        পাম ওয়েল গাছ একটি বর্ষজীবি উদ্ভিদ। রোপণের ৩-৪ বছরের
                                        মধ্যে ফলন শুরু হয়। একটানা ৬০-৭০ বছর ফল দিয়ে থাকে।
                                        বছওে ৮-১০টি কাঁদি আহরণ করা যায়। একটি কাঁদিও ওজন ৪০-৮০
                                        কেজি পর্যন্ত হয়। ঝড় জলোচ্ছাসে এই গাছ সহজে ক্ষতি হয় না।
                                        অন্যান্য গাছ থেকে ১০ গুণ বেশি অক্সিজেন দেয়।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/tel"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p>তিসি</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/WzJMb94w/Linseed.png" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>তিসি (Linseed) <br /> <i>Vigna sesquipedalis</i> </p>
                                    <p className='pl-3'> <span className='font-semibold'>পরিবার:</span> Linaceae.</p>
                                    <p className='pl-3'>১. <span className='font-semibold'>পুষ্টিমূল্য/উপাদান :</span> প্রোটিন, তেল, কার্বোহাইড্রেট, ছাই, আঁশ বিদ্যমান।</p>
                                    <p className='pl-3'>২. <span className='font-semibold'>উপযুক্ত জমি ও মাটি :</span>এঁটেল মাটি তিসি চাষের জন্য
                                        সবচেয়ে বেশি উপযোগী। পলি দো-আঁশ ও এঁটেল দো-আঁশ মাটিতেও এর চাষ করা যায়।</p>
                                    <p className='pl-3'>৩. <span className='font-semibold'>ব্যবহার :</span>যন্ত্রপাতির জন্য গ্রিজ ও সাবান তৈরিতে ব্যবহার করা হয়।</p>

                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/sobji"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p>সরিষা</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/Z51PXzKK/sorisha.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>সরিষা</p>
                                    <p className='font-semibold pl-3'>সরিষা চাষ ব্যবস্থাপনা:</p>
                                    <p className='font-semibold pl-3'>ভূমিকা:</p>
                                    <p className='pl-3'>সরিষা বাংলাদেশের প্রধান ভোজ্য তেল ফসল।
                                        বর্তমানে প্রায় সাড়ে ৩ লক্ষ হেক্টর জমিতে এর চাষাবাদ করা হয় এবং
                                        প্রায় আড়াই লক্ষ টন তেল পাওয়া যায়। বিভিন্ন জাতরে সরিষার বীজে
                                        প্রায় ৪০-৪৪% তেল থাকে। খৈলে প্রায় ৪০% আমিষ থাকে। তাই খৈল
                                        গরু ও মহিষের জন্য খুব পুষ্টিকর খাদ্য।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/sobji"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='pt-10'>
                            <p>গর্জন তিল</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/yYhTg8Bq/gorjontil.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>গর্জন তিল <br /> <i>Guizotia Abyssinica Coss.</i> </p>
                                    <p className='pl-3'> <span className='font-semibold'>পরিবার: </span>Comositae.</p>
                                    <p className='pl-3'>১. <span className='font-semibold'>পুষ্টিমূল্য/উপাদান :</span> লিনোনিক ফ্যাটি এসিড ও প্রোটিন আছে।</p>
                                    <p className='pl-3'>২. <span className='font-semibold'>ভেষজগুণ :</span>কোলেস্টেরল ফ্রি। আবশ্যকীয় ফ্যাটি এসিড সমূহের উৎস হিসেবে কাজ করে।</p>
                                    <p className='pl-3'>৩. <span className='font-semibold'>ব্যবহার :</span>ভোজ্য তেল হিসেবে ব্যবহার
                                        ছাড়াও সাবান ও প্রসাধনী তৈরিতে এর ব্যবহার হয়। এর খৈল গো-মহিষের খুব উপাদেয় খাদ্য।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/sobji"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
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

export default Tell;
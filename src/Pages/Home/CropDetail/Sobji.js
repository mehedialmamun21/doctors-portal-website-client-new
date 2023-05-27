import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Pagination from '../../../component/PrimaryButton/Pagination';

const Sobji = () => {
    return (
        <div>
            <div>
                <div className='lg:px-40 lg:pt-10'>
                    <h2 className='text-green-600 text-xl'> <u>সর্বশেষ প্রকাশিত সবজিঃ</u> </h2>
                    <div className='grid grid-cols-2 gap-5'>


                        <div className='pt-10'>
                            <div className='flex'>
                                <img className='w-60 h-54 pt-3' src="https://i.postimg.cc/5NVNP9vN/jhinga.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>ঝিঙ্গা</p>
                                    <p className='pl-3'>ঝিঙ্গা বাংলাদেশের একটি জনপ্রিয় গ্রীষ্মকালীন সবজি।
                                        এর প্রতি ১০০ গ্রাম ভক্ষণযোগ্য অংশের মধ্যে রয়েছে ০.৫ গ্রাম প্রোটিন,
                                        ৩৩.৬ মাইক্রো গ্রাম বিটা-ক্যারোটিন, ৫ মিগ্রা ভিটামিন সি, ১৮ মিলিগ্রাম
                                        ক্যালসিয়াম এবং ২৭ মিলিগ্রাম ফসফরাস। </p>
                                    <p className='pl-3 font-semibold'> জলবায়ু ও মাটিঃ</p>
                                    <p className='pl-3'>দীর্ঘ সময়ব্যাপী উষ্ণ ও আর্দ্র আবহাওয়া এবং প্রচুর সূর্যালোক থাকে এমন এলাকা ঝিঙ্গা চাষের জন্য উত্তম।</p>
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
                            <div className='flex'>
                                <img className='pt-3 w-60 h-54' src="https://i.postimg.cc/yxYBHxTF/mula.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>মুলা <br /> মূলা <br /> <i>Raphanus sativus</i> </p>

                                    <p className='pl-3'> মূলা একটি পুষ্টিকর সবজি হলেও অনেকেই মূলা খতে পছন্দ করেন না।
                                        মূলাতে প্রচুর পরিমাণে ক্যারোটিন তথা ভিটামিন এ, ক্যালসিয়াম ও লৌহ রয়েছে।
                                        এ দেশে মূলার আবাদ দিন দিন বাড়ছে। বিশেষ করে অমৌসুমে মূলা আবাদের দিকে
                                        চাষিরা ঝুঁকে পড়েছেন। </p>
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
                            <div className='flex'>
                                <img className='pt-3 h-48' src="https://i.postimg.cc/MTt2dx8X/Derosh.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>ঢেঁড়শ</p>
                                    <p className='pl-3'> ঢেঁড়শ এদেশের একটি জনপ্রিয় সবজি। ঢেঁড়শে প্রচুর পরিমাসে ভিটামিন
                                        নি ও সি এবং এছাড়াও পর্যাপ্ত পরিমানে আয়োজিন, ভিটামিন “এ“ ও বিভিন্ন  খনিজ পদার্থ রয়েছে।
                                        ঢেঁড়শ নিয়মিত খেলে গলাফোলা রোগ হবার সম্ভাবনা থাকে না এবং এটা হজম শক্তি বৃদ্ধিতেও সহায়তা
                                        করে। </p>
                                    <p className='font-semibold pl-3'>মাটি</p>
                                    <p className='pl-3'>দোআশ ও বেলে দোআশ ঢেঁড়শ চাষের জন্য সবচেয়ে উপযোগী।
                                        পানি নিষ্কাশনের সুবিধা  থাকলে এটেল মাটিতেও চাষ করা যায়</p>
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
                            <p>বরবটি</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/d1Tn0cqD/Borboti.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>বরবটি <br /> <i>Vigna sesquipedalis</i> </p>
                                    <p className='pl-3'>বরবটি আমিষ সমৃদ্ধ একটি সবজি। প্রায় সারা বছরই এটি ফলানো যায়।
                                        তবে খরিপ তথা গ্রীষ্মকালে ভাল হয়। খুব শীতে ভাল হয় না।</p>
                                    <p className='font-semibold pl-3'>মাটি</p>
                                    <p className='pl-3'>দোআঁশ ও বেলে দোআঁশ মাটি বরবটি চাষের জন্য উপযোগী।</p>
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
                            <p>গাজর</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/TwHgfj2J/Carrot.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>গাজর</p>
                                    <p className='pl-3'>ভিটামিন এ সমৃদ্ধ পুষ্টিকর সবজি। তাছাড়া এতে
                                        ক্যালসিয়াম, লৌহ, ফসফরাস, শ্বেতসার এবং অন্যান্য ভিটামিন যথেষ্ট
                                        পরিমাণে রয়েছে। তরকারী ও সালাদ হিসেবে গাজর খাওয়া যায়।
                                        গাজরের হালুয়া অনেকের প্রিয় খাবার। দেশে গাজরের কোন অনুমোদিত
                                        জাত নেই। বিদেশ থেকে বিভিন্ন জাতের গাজরের বীজ আমদানি করে চাষ
                                        করা হয়। যেমন-রয়েল ক্রস, কোরেল ক্রস, কিনকো সানটিনে রয়েল ও
                                        স্কারলেট নান্টেস। </p>
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
                            <p>বেগুন</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/G21mWqyy/Brinjal.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>বেগুন</p>
                                    <p className='pl-3'>মাটি</p>
                                    <p className='pl-3'>হালকা বেলে থেকে ভারী এটেল মাটি অর্থাৎ প্রায়
                                        সব ধরনের মাটিতেই বেগুনের চাষ করা হয়। হালকা বেলে মাটি আগাম
                                        জাতের বেগুন চাষের জন্য উপযোগী। এই ধরণের মাটিতে বেগুন চাষ
                                        করতে হলে প্রচুর পরিমাণ জৈবসারসহ অন্যান্য সার ঘন ঘন প্রয়োগ করতে
                                        হবে। এটেঁল দো-আঁশ ও পলি দো-আঁশ মাটি বেগুন চাষের জন্য উপযোগী </p>
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

export default Sobji;
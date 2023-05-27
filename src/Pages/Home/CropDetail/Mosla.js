import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Pagination from '../../../component/PrimaryButton/Pagination';

const Mosla = () => {
    return (
        <div>
            <div>
                <div className='lg:px-40 lg:pt-10'>


                    <h2 className='text-green-600 text-xl'> <u>সর্বশেষ প্রকাশিত মসলাঃ</u> </h2>
                    <div className='grid grid-cols-2 gap-5'>


                        <div className='pt-10'>
                            <p className=''>হলুদ</p>
                            <div className='flex'>
                                <img className='w-54 h-40 pt-3' src="https://i.postimg.cc/MK52qxn5/holud.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>হলুদ</p>
                                    <p className='pl-3'> <span className='font-semibold '>ভূমিকা:</span> হলুদ মসলা হিসেবে একটি জনপ্রিয় এবং বহুল ব্যবহৃত মসলা ফসল। এছাড়াও হলুদের অনেক ভেষজ গুণও রয়েছে।</p>
                                    <p className='pl-3'> <span className='font-semibold'>উপযুক্ত জমি ও মাটিঃ</span> সব ধরনের মাটিতে হলুদ চাষ করা যায়। তবে দো-আঁশ ও বেলে-দো-আঁশ মাটি হলুদ চাষের জন্য অতি উত্তম।</p>
                                    <p className='pl-3'><span className='font-semibold'>বীজ বপন: </span> চৈত্র মাস কন্দ লাগানোর উপযুক্ত সময়। সাধারণতঃ ১৫-২০ গ্রাম ওজনের ১-২টি ঝুঁড়ি বিশিষ্ট কন্দ  লাগাতে হয়। ৫০ সে.মি. দূরে দূরে সারি করে ২৫ সে.মি. দূরে দূরে ৫-৭ সে.মি. গভীরে কন্দ লাগাতে হয়। প্রতি হেক্টরে ২৫০০ কেজি কন্দ প্রয়োজন হয়। কন্দ লাগানোর পর ভেলী করে দিতে হয়। </p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/mosla"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p className=''>পেঁয়াজ</p>
                            <div className='flex'>
                                <img className='pt-3 w-60 h-48' src="https://i.postimg.cc/vTBYdBGJ/piaj.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>পেঁয়াজ (Onion)</p>
                                    <p className='font-semibold ml-3'>পেঁয়াজ চাষ ব্যবস্থাপনা</p>
                                    <p className='pl-3'>১. <span className='font-semibold'>পুষ্টিমূল্য/উপাদান :</span> এত প্রচুর ক্যালসিয়াম ও সামান্য ভিটামিন ‘সি’ আছে।</p>
                                    <p className='pl-3'>২. <span className='font-semibold'>ভেষজগুণ :</span> <br />
                                        উত্তেজক হিসেবে কাজ করে <br />
                                        প্রস্রাবের বেগ বাড়ায় <br />
                                        শ্বাসনালীর মিউকাস কমায় <br />
                                        ঋতুস্রাব বাড়ায় <br />
                                        হজমি নালার জ্বালা কমায় <br />
                                    </p>
                                    <p className='pl-3'>৩. <span className='font-semibold'>ব্যবহার :</span>তরকারীতে মসলা হিসেবে ব্যবহার ছাড়াও বিভিন্ন মুখরোচক খাবার তৈরিতে পেঁয়াজের ব্যবহার রয়েছে।</p>

                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/mosla"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='pt-10'>
                            <p className=''>আদা</p>
                            <div className='flex'>
                                <img className='w-60 h-48 pt-3' src="https://i.postimg.cc/TPgFpXkp/Ginger.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>আদা</p>
                                    <p className='pl-3'> <span className='font-semibold'>উপযুক্ত জমি ও মাটিঃ</span> পানি নিকাশের সুব্যবস্থা  আছে এমন উঁচু বেলে-দো-আঁশ ও ও বেলে মাটি আদা চাষের জন্য উপযোগী।</p>
                                    <p className='pl-3'> <span className='font-semibold'>বীজ রোপণ:</span>ফাল্গুন থেকে বৈশাখ মাস পর্যন্ত
                                        লাগানো যায়। সাধারণত ১২-১৫ গ্রাম ওজনের ১-২টি কুঁড়ি বিশিষ্ট কন্দ লাগানো হয়। ৪০-৪৫ সে.মি.
                                        দূরে দূরে সারি করে ২০ সে.মি. দূরে ৫ সে.মি. গভীরে আদা লাগানো হয়। </p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/mosla"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p>রসুন</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/VLzMJyR5/Garlic-sprouts1.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>রসুন</p>
                                    <p className='pl-3 font-semibold'>রসুন চাষ ব্যবস্থাপনা</p>
                                    <p className='pl-3'>১. <span className='font-semibold'>পুষ্টিমূল্য/উপাদান :</span> রসুনে আমিষ, প্রচুর ক্যালসিয়াম ও সামান্য ভিটামিন ‘সি’ থাকে। </p>
                                    <p className='pl-3'>২. <span className='font-semibold'>উপযুক্ত জমি ও মাটি :</span>
                                        <br /> কৃমি নাশক <br />
                                        শ্বাস কষ্ট কমায় <br />
                                        হজমে সহায়তা করে <br />
                                        প্রস্রাবের বেগ বাড়ায় <br />
                                        শ্বাসনালীর মিউকাস বের করে দেয়
                                    </p>
                                    <p className='pl-3'>৩. <span className='font-semibold'>ব্যবহার :</span>মসলা হিসেবে রসুন ব্যবহৃত হয়। তাছাড়া বিভিন্ন আচার ও মুখরোচক খাবার তৈরিতে রসুনের ব্যবহার রয়েছে।</p>

                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/mosla"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <p>গোল মরিচ</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/nrfDpgdK/Black-Pepper-1.png" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>গোল মরিচ</p>
                                    <p className='pl-3'> <span className='font-semibold'>পুষ্টিমূল্যঃ</span>গোল মরিচে আমিষ, চর্বি এবং প্রচুর পরিমাণে ক্যারোটিন, ক্যালসিয়াম ও লৌহ থাকে।</p>
                                    <p className='pl-3'> <span className='font-semibold'>ভেষজগুণঃ</span> <br /> হজমে সহায়তা করে <br />
                                        স্নায়ু শক্তি বাড়ায় <br />
                                        দাঁতের ব্যাথা কমানোতে সহায়তা করে <br />
                                        মাংসপেশী ও হাড়ের জোড়ার ব্যাথা উপশম করে <br />
                                        কোষ্ঠকাঠিন্য দূর করে
                                    </p>
                                    <p className='pl-3'>৩. <span className='font-semibold'>ব্যবহার :</span>মসলা হিসেবে গোল মরিচের ব্যবহার রয়েছে।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/mosla"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='pt-10'>
                            <p>মরিচ</p>
                            <div className='flex'>
                                <img className='pt-3 w-54 h-48' src="https://i.postimg.cc/g0wsJ9K1/marich.jpg" alt="" />
                                <div className='pt-3'>
                                    <p className='font-semibold pl-3'>মরিচ</p>
                                    <p className='pl-3'>১. <span className='font-semibold'>পুষ্টিমূল্য/উপাদান :</span>শুকনো মরিচে আমিষ, প্রচুর পরিমাণে ক্যালসিয়াম ও ভিটামিন ‘সি’ থাকে।</p>
                                    <p className='pl-3'>২. <span className='font-semibold'>ভেষজগুণ :</span>নিয়মিতভাবে কাঁচা মরিচ খেলে মুখে ‘ঘা’ হয় না।</p>
                                    <p className='pl-3'>৩. <span className='font-semibold'>ব্যবহার :</span>রান্না-বান্না ও মুখরোচক খাবার তৈরি ছাড়াও মরিচ বিভিন্ন ধরনের আচার তৈরির উপাদান হিসেবে ব্যবহার হয়। অনেকে মরিচের আচারও করে থাকেন।</p>
                                    <div className='flex items-center justify-center pt-5'>
                                        <div className='flex items-center justify-center'>
                                            <FaHandPointRight className='text-gray-500' />
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <Link to="/mosla"><span className='text-sm text-orange-700 font-semibold hover:text-gray-600 flex justify-center pl-2'>বিস্তারিত</span></Link>
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

export default Mosla;
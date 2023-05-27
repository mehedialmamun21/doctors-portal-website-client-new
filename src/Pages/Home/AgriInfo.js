import React from 'react';
import esomoyer from '../../assets/images/esomoyer.jpg'
import somosamoyik from '../../assets/images/somosamoyik.jpg'
import krishitottho from '../../assets/images/krishitottho.jpg'
import onnanno from '../../assets/images/onnanno.jpg'
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AgriInfo = () => {
    return (
        <div className='px-5 pt-10 lg:px-40 lg:py-28'>
            <h1 className='text-2xl text-center font-bold'>কৃষি সম্পর্কে আপনি যা জানতে <br /> চান তা এখানেই পাবেন !</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 lg:mt-28'>


                <div className=''>
                    <div className=''>
                        <p className='font-semibold text-center'>এ সময়ের কৃষি</p>
                    </div> <br />
                    <div className='lg:flex justify-center'>
                        <div className='flex justify-center mb-3 lg:mb-0'>
                            <img src={esomoyer} className='w-40' alt="" />
                        </div>
                        <div>
                            <div className='flex justify-center'>

                                <div className='flex items-center justify-center'>
                                    <div className='grid grid-cols-1'>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                {/* <a href="./AgriDetail/Emaserkrishi.js"> <span className='text-sm'>এ মাসের কৃষি</span> </a> */}
                                                {/* <Link to="/emaserkrishi"><span className='text-sm hover:font-bold'>এ মাসের কৃষি</span></Link> */}
                                                <Link to="/emaserkrishi"><span className='text-sm hover:font-bold'>এ মাসের কৃষি</span></Link>
                                            </div>
                                        </div>

                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                {/* <a href="/"> <span className='text-sm hover:font-bold'>বিশেষ পরামর্শ</span> </a> */}
                                                <Link to="/biseshPoramorsho"><span className='text-sm hover:font-bold'>বিশেষ পরামর্শ</span></Link>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/recent_innovation"> <span className='text-sm hover:font-bold'>সাম্প্রতিক উদ্ভাবন</span> </a>
                                            </div>
                                        </div>
                                        {/* <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <Link to="/krishi_abohaua"><span className='text-sm hover:font-bold'>কৃষি আবহাওয়া</span></Link>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className=''>
                    <div>
                        <p className='font-semibold text-center'>সমসাময়িক কৃষি প্রযুক্তি</p>
                    </div> <br />
                    <div className='lg:flex justify-center'>
                        <div className='flex justify-center mb-3 lg:mb-0'>
                            <img src={somosamoyik} className='w-40' alt="" />
                        </div>
                        <div>
                            <div className='flex justify-center'>

                                <div className='flex items-center justify-center'>
                                    <div className='grid grid-cols-1'>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>বোরো ধানের বীজতলা তৈরি</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>ধান কাটা, মাড়াই ও সংরক্ষণ</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>ভেজাল সার চেনার উপায়</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>বালাইনাশকের অবশিষ্টাংশ দূরীকরণ</span> </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className=''>
                    <div>
                        <p className='font-semibold text-center'>কৃষি তথ্য</p>
                    </div> <br />
                    <div className='lg:flex justify-center'>
                        <div className='flex justify-center mb-3 lg:mb-0'>
                            <img src={krishitottho} className='w-40' alt="" />
                        </div>
                        <div>
                            <div className='flex justify-center'>

                                <div className='flex items-center justify-center'>
                                    <div className='grid grid-cols-1'>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                {/* <a href="/"> <span className='text-sm hover:font-bold'>ফসলের উৎপাদন প্রযুক্তি</span> </a> */}
                                                <div>
                                                    <Link to="/crop_production_tech"><span className='text-sm hover:font-bold'>ফসলের উৎপাদন প্রযুক্তি</span></Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>ছাদ কৃষি</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>প্রানিসম্পদ</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>মৎস্যসম্পদ</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>পোকামাকড় ও রোগবালাই</span> </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className=''>
                    <div>
                        <p className='font-semibold text-center'>অন্যান্য</p>
                    </div> <br />
                    <div className='lg:flex justify-center'>
                        <div className='flex justify-center mb-3 lg:mb-0'>
                            <img src={onnanno} className='w-40' alt="" />
                        </div>
                        <div>
                            <div className='flex justify-center'>

                                <div className='flex items-center justify-center'>
                                    <div className='grid grid-cols-1'>
                                        <br />
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>

                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>ইনোভেশন টিম</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>বার্ষিক উদ্ভাবন কর্মপরিকল্পনা</span> </a>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='flex items-center justify-center'>
                                                <BiRightArrow className='mx-3 text-green-600' size="0.9rem" />
                                            </div>
                                            <div>
                                                <a href="/"> <span className='text-sm hover:font-bold'>উদ্ভাবনী প্রকল্পসমূহ</span> </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* <div className='flex justify-center items-center mt-28'>
                <img src="https://i.postimg.cc/cH0BhdYM/amader-khamar-ads.png" alt="" />
            </div> */}

        </div>
    );
};

export default AgriInfo;
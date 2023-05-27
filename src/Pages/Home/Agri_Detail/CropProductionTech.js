import React from 'react';
import Footer from '../../Shared/Footer';
import { Link } from 'react-router-dom';

const CropProductionTech = () => {
    return (
        <div>
            <div className="overflow-x-auto lg:px-40 pt-10">
                <h2 className='text-2xl font-bold pb-10'>ফসলের উৎপাদন প্রযুক্তিঃ</h2>
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>ফসলের শ্রেণি</th>
                            <th>বিস্তারিত জানতে নিচের লিংকে ক্লিক করুন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>দানাদার জাতীয় (ধান, গম, ভুট্টা ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/danadar"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 2 */}
                        <tr className="active">
                            <th>2</th>
                            <td>সবজি (টমেটো, লাউ, ফুলকপি ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/sobji"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>তেল জাতীয় (সরিষা, সয়াবিন ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/tel"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 4 */}
                        <tr className="active">
                            <th>4</th>
                            <td>মসলা জাতীয় (পেঁয়াজ, রসুন, আদা ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/mosla"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>5</th>
                            <td>কন্দাল জাতীয় (আলু, কচু ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/kondal"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 6 */}
                        <tr className="active">
                            <th>6</th>
                            <td>ডাল জাতীয় (মুগ, মসুর, ছোলা ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/dal"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 7 */}
                        <tr>
                            <th>7</th>
                            <td>অর্থকরী ফসল (পাট, চা ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/orthokori"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 8 */}
                        <tr className="active">
                            <th>8</th>
                            <td>ফল ফসল (আম, কাঁঠাল, লিচু ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/fol"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 9 */}
                        <tr>
                            <th>9</th>
                            <td>ফুল (গোলাপ, রজনীগন্ধা ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/ful"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 10 */}
                        <tr className="active">
                            <th>10</th>
                            <td>অন্যান্য ফসল/প্রযুক্তি (পাহাড়ী কৃষি, মাশরুম ইত্যাদি)</td>
                            <td className='text-green-600'><Link to="/onnanno"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 11 */}
                        <tr>
                            <th>11</th>
                            <td>মৎস্য সম্পদ</td>
                            <td className='text-green-600'><Link to="/motsosompod"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                        {/* row 12 */}
                        <tr className="active">
                            <th>12</th>
                            <td>প্রাণিসম্পদ</td>
                            <td className='text-green-600'><Link to="/pranisompod"><span className='text-sm font-semibold hover:font-bold'>Click here</span></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CropProductionTech;
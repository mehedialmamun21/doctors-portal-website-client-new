import React from 'react';
import doctor_1 from '../../assets/images/doctor-1.jpg';
import doctor_2 from '../../assets/images/doctor-2.jpg';
import doctor_3 from '../../assets/images/doctor-3.jpg';
import doctor_4 from '../../assets/images/doctor-4.jpg';

const Contact = () => {
    return (
        <div class="overflow-x-auto w-full mt-10">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Education</th>
                        <th>Contact No.</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={doctor_1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Assoc. Prof. Dr. Aslam Almehdi</div>
                                    <div class="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Periodontal Plastic & Maxillofacial Surgeon
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs"> BDS (Dhaka Dental College)</button>
                        </th>
                        <td>01303-115678</td>
                    </tr>

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={doctor_2} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Prof. Dr. Sharifun Nahar</div>
                                    <div class="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Dental Implant, General dentistry
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs">BDS (Dhaka), MPH (BSMMU)</button>
                        </th>
                        <td>01543-767483</td>
                    </tr>

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={doctor_3} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">DR. MD. HAIDER ALI KHAN</div>
                                    <div class="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Orthodontic treatment, Dental Implant
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs">M.S. (Oral & Maxillofacial Surgery/Medicine)</button>
                        </th>
                        <td>01948-093456</td>
                    </tr>

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={doctor_4} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">DR. SK. NAZRUL ISLAM</div>
                                    <div class="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Specialized Dental Surgeon
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs">MSD ( South Kore), PhD (South Korea)</button>
                        </th>
                        <td>01521-234567</td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={doctor_1} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">DR. SK. Zakir Hossain</div>
                                    <div class="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Specialized Dental Surgeon
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs">BDS (Dhaka), MPH (BSMMU)</button>
                        </th>
                        <td>01421-274767</td>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={doctor_2} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">Associate Prof. Dr. Zohra Islam </div>
                                    <div class="text-sm opacity-50">Bangladesh</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Dental Implant, General dentistry
                        </td>
                        <th>
                            <button class="btn btn-ghost btn-xs">M.S. (Oral & Maxillofacial Surgery/Medicine)</button>
                        </th>
                        <td>01743-363473</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default Contact;
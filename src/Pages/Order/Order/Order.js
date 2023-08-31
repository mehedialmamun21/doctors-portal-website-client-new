import React, { useState } from 'react';
import Footer from '../../Shared/Footer';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MediCard from '../../../component/MediCard/MediCard';
import useMenu from '../../../hooks/useMenu';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const covid = menu.filter(item => item.category === 'covid');
    const wcare = menu.filter(item => item.category === 'wcare');
    const device = menu.filter(item => item.category === 'device');
    const herbalandhomeopathy = menu.filter(item => item.category === 'herbalandhomeopathy');
    const babyandmomcare = menu.filter(item => item.category === 'babyandmomcare');
    const personalcare = menu.filter(item => item.category === 'personalcare');
    const supplementandvitamin = menu.filter(item => item.category === 'supplementandvitamin');
    const dentcare = menu.filter(item => item.category === 'dentcare');
    return (
        <section className=''>

            <div className='pt-24 px-40 pb-20'>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Dental care</Tab>
                        <Tab>Covid-19 Special</Tab>
                        <Tab>Devices</Tab>
                        <Tab>Herbal & Homeopathy</Tab>
                        <Tab>Baby & Mom care</Tab>
                        <Tab>Personal care</Tab>
                        <Tab>Supplements & Vitamins</Tab>
                        <Tab>Women care</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                dentcare.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                covid.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                device.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                herbalandhomeopathy.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                babyandmomcare.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                personalcare.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                supplementandvitamin.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-3 gap-x-5 gap-y-10 mt-10'>
                            {
                                wcare.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>

            <Footer></Footer>

        </section>
    );
};

export default Order;
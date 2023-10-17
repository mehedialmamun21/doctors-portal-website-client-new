import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MediCard from '../../../component/MediCard/MediCard';
import useMenu from '../../../hooks/useMenu';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    const [menu] = useMenu();

    const Pediatric_Dentistry = menu.filter(item => item.category === 'Pediatric_Dentistry');
    const Periodontics = menu.filter(item => item.category === 'Periodontics');
    const Prosthodontics = menu.filter(item => item.category === 'Prosthodontics');
    const Restoratives = menu.filter(item => item.category === 'Restoratives');
    const Equipments = menu.filter(item => item.category === 'Equipments');
    const Endodontics = menu.filter(item => item.category === 'Endodontics');
    const General_Dentistry = menu.filter(item => item.category === 'General_Dentistry');
    const Dental_Implants = menu.filter(item => item.category === 'Dental_Implants');
    const Dental_Brackets = menu.filter(item => item.category === 'Dental_Brackets');


    const pageCount = Math.ceil(Pediatric_Dentistry.length / itemsPerPage);
    const handlePageClick = (selected) => {
        setCurrentPage(selected.selected);
    };

    const { data: item, isLoading } = useQuery('item', () => fetch('http://localhost:5000/menu', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='h-screen bg-white'>

            <div className='pt-24 px-40 pb-20'>

                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Pediatric_Dentistry</Tab>
                        <Tab>Periodontics</Tab>
                        <Tab>Prosthodontics</Tab>
                        <Tab>Restoratives</Tab>
                        <Tab>Equipments</Tab>
                        <Tab>Endodontics</Tab>
                        <Tab>General_Dentistry</Tab>
                        <Tab>Dental_Implants</Tab>
                        <Tab>Dental_Brackets</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-0 gap-y-10 mt-10'>
                            {
                                Pediatric_Dentistry.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item) => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {
                                Periodontics.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item) => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {
                                Prosthodontics.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {
                                Restoratives.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-0 gap-y-10 mt-10'>
                            {
                                Equipments.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item) => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {
                                Endodontics.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {
                                General_Dentistry.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {
                                Dental_Implants.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-4 gap-x-5 gap-y-10 mt-10'>
                            {
                                Dental_Brackets.map(item => <MediCard
                                    key={item._id}
                                    item={item}
                                ></MediCard>)
                            }
                        </div>
                        <div className="pagination-container font-semibold mt-8 border border-y-gray-300 border-l-white border-r-white">
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination flex items-center justify-center"
                                    subContainerClassName="pages pagination"
                                    activeClassName="bg-gray-200 text-blue-600"
                                    pageClassName="rounded-full mx-1 px-3 py-1 bg-gray-200 hover:bg-blue-200"
                                    previousClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    nextClassName="rounded-sm mx-3 px-3 py-1 bg-gray-400 hover:bg-blue-600 text-white"
                                    breakClassName="rounded-full mx-1 px-3 py-1 bg-gray-200"
                                />
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>
            </div>

        </section>
    );
};

export default Order;
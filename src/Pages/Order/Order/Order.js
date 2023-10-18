import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MediCard from '../../../component/MediCard/MediCard';
import useMenu from '../../../hooks/useMenu';
import ReactPaginate from 'react-paginate';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;
    const [searchQuery, setSearchQuery] = useState('');
    const [menu] = useMenu();

    const category = [
        'All category',
        'Pediatric_Dentistry',
        'Periodontics',
        'Prosthodontics',
        'Restoratives',
        'Equipments',
        'Endodontics',
        'General_Dentistry',
        'Dental_Implants',
        'Dental_Brackets',
    ];

    const handlePageClick = (selected) => {
        setCurrentPage(selected.selected);
    };

    const filteredItems = menu.filter((item) =>
        (tabIndex === 0 || item.category === category[tabIndex]) &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const { data: item, isLoading } = useQuery('item', () => fetch('http://localhost:5000/menu', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='bg-white'>
            <div className='pt-28 lg:px-40 pb-20'>
                <div className="search-bar mb-11">
                    <div className="search-input flex items-center justify-center">
                        <input
                            type='text'
                            placeholder='Search entire store here...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #808080',
                                borderRadius: '0px',
                                fontSize: '16px',
                                padding: '5px',
                                width: '280px',

                            }}
                        />
                        < span className="search-icon ml-2">
                            <BiSearchAlt2 size="1.6rem" />
                        </span>
                    </div>
                </div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='flex flex-wrap mx-1 lg:mx-0'>
                        {category.map((category, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer p-2 ${tabIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => setTabIndex(index)}
                                style={{
                                    border: '1px solid #808080',
                                    borderRadius: '5px',
                                    margin: '1px',
                                    flex: '1', // Use flex to distribute equal width on larger screens
                                    maxWidth: '150px', // Limit the maximum width for larger screens
                                }}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                    <TabPanel>
                        {searchQuery !== '' && filteredItems.length === 0 ? (
                            <div className='no-items-found-message text-center my-20 text-xl text-red-500'>Sorry, No Items Found</div>
                        ) : (
                            <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-0 gap-y-3 lg:gap-y-10 mt-10'>
                                {filteredItems
                                    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                                    .map((item) => (
                                        <MediCard key={item._id} item={item}></MediCard>
                                    ))}
                            </div>
                        )}
                        <div className='pagination-container font-semibold mt-10 lg:mt-8 border border-y-gray-300 border-l-white border-r-white'>
                            <div className='py-5'>
                                <ReactPaginate
                                    previousLabel='Previous'
                                    nextLabel='Next'
                                    breakLabel='...'
                                    pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName='pagination flex items-center justify-center'
                                    subContainerClassName='pages pagination'
                                    activeClassName='bg-gray-200 text-blue-600'
                                    pageClassName='rounded-full mx-1 px-2 lg:px-3 py-1 bg-gray-200 hover:bg-blue-200'
                                    previousClassName='rounded-sm mr-2 lg:mr-3 px-1 lg:px-3 py-1 bg-zinc-400 hover:bg-blue-600 text-white'
                                    nextClassName='rounded-sm ml-2 lg:ml-3 px-1 lg:px-3 py-1 bg-zinc-400 hover:bg-blue-600 text-white'
                                    breakClassName='rounded-full lg:mx-1 px-3 py-1 bg-gray-200'
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
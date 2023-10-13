import React from 'react';

const SearchField = () => {
    return (
        <div className='mt-5'>
            <div className='py-3 px-3 flex bg-white rounded shadow shadow-gray'>
                <input type="text" className=' px-3 py-1 outline-none w-full' placeholder='Search Books' />
                <button className='bg-primary text-white px-3 rounded'>Search</button>
            </div>
        </div>
    );
};

export default SearchField;
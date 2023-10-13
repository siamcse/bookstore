import React from 'react';

const SearchField = () => {
    return (
        <div className='mt-5'>
            <div className='py-3 px-3 flex bg-white rounded shadow-xl shadow-dark'>
                <input type="text" className=' px-3 py-1 outline-none w-full' placeholder='Search Books' />
                <button className='bg-primary px-3 rounded'>Search</button>
            </div>
        </div>
    );
};

export default SearchField;
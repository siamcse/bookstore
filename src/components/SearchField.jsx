import React from 'react';

const SearchField = () => {
    return (
        <div>
            <div className=''>
                <input type="text" className='border-none px-3 py-2' placeholder='Search Books' />
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchField;
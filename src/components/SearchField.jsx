import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchField = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }
    const redirectToSearchField = () => {
        navigate('/search', { state: searchValue });
    }
    return (
        <div className='mt-5'>
            <div className='py-3 px-3 flex bg-white rounded shadow shadow-gray'>
                <input onChange={handleSearch} type="text" className='px-3 py-1 outline-none w-full' placeholder='Search Books' />
                <button onClick={redirectToSearchField} className='bg-primary text-white px-3 rounded'>Search</button>
            </div>
        </div>
    );
};

export default SearchField;
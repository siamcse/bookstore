import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import SearchResultCard from '../../components/SearchResultCard';
import { BooksData } from '../../util/BooksData';

const SearchPage = () => {
    const { state } = useLocation();
    const [searchBooks, setSearchBooks] = useState([]);

    useEffect(() => {
        const results = BooksData.filter((book) => book.book_name.toLocaleLowerCase().includes(state?.toLocaleLowerCase()));
        setSearchBooks(results);
    }, [state])

    return (
        <div className='relative'>
            <Navbar darkTheme={true} />
            <div className='container mx-auto pt-32'>
                <h1 className='text-2xl font-bold'>Your Search Result</h1>
                <div>
                    {
                        searchBooks.map((book) => <SearchResultCard key={book.id} book={book} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
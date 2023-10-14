import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const SearchResultCard = ({ book }) => {
    const { book_name, book_url, author_name, price } = book;
    return (
        <div className='mt-10 border-2 border-gray rounded-lg py-6 px-8'>
            <div className='flex items-start gap-10'>
                <img className='w-24' src={book_url} alt="" />
                <div>
                    <h1 className='text-2xl font-bold mt-2'>{book_name}</h1>
                    <p className='pb-5'>{author_name}</p>
                    {/* <Link to={`/`} className='mt-5 py-3 px-8 bg-primary text-white'>Product Details</Link> */}
                    <Link to='/'><Button text={"Product Details"} /></Link>
                </div>
            </div>
        </div>
    );
};

export default SearchResultCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ book }) => {
    const { book_name, book_url, author_name, price, id } = book;
    return (
        <div>
            <div className='w-64 h-full border-2 border-gray rounded-lg'>
                <div className='px-8 py-6'>
                    <div className='h-64'>
                        <img src={book_url} alt="" className='rounded h-full' />
                    </div>
                    <div className='h-36'>
                        <h1 className='text-xl font-extrabold mt-5'>{book_name}</h1>
                        <p>{author_name}</p>
                        <h1 className='text-3xl text-primary my-3'>Tk. {price}</h1>
                    </div>
                    <Link to={`/book-details/${id}`} className='bg-primary text-white py-3 px-20 rounded'>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
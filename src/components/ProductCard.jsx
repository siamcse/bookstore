import React from 'react';

const ProductCard = ({ book }) => {
    const { book_name, book_url, author_name, price } = book;
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
                    <button className='bg-primary text-white py-3 w-full rounded bottom-0 right-0'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
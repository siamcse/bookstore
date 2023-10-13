import React from 'react';

import ProductCard from '../../../components/ProductCard';
import { BooksData } from '../../../util/BooksData';

const ProductList = () => {
    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-3xl font-bold'>Here are some <span className='text-primary'>books</span> that you might like</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20'>
                {
                    BooksData.slice(0,4).map(book => <ProductCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default ProductList;
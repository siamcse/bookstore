import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { BooksData } from '../../util/BooksData';

const BookDetails = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});

    const { book_name, book_url, price, book_description, print_length, language, author_name } = bookData;

    useEffect(() => {
        const book = BooksData.filter(book => book.id === parseInt(id));
        setBookData(book[0]);
    }, [id])

    return (
        <div className='relative'>
            <Navbar darkTheme={true} />
            <div className='container mx-auto pt-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-24'>
                    <div className='flex justify-center'>
                        <img src={book_url} alt="" className='h-3/4' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mb-3'>{book_name}</h1>
                        <p className='text-primary mb-4'>{author_name}</p>
                        <p className='font-medium mb-4'>{book_description}</p>
                        <p className='mb-4'><span className='font-semibold'>Language:</span> {language}</p>
                        <p className='mb-4'><span className='font-semibold'>Book Length :</span> {print_length}</p>
                        <p className='text-primary text-2xl '>Tk. {price}</p>
                        <button className='mt-4 py-3 px-6 bg-primary text-white text-lg'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookDetails;
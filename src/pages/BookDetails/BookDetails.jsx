import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { BooksData } from '../../util/BooksData';
import { AuthContext, CartContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookDetails = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});
    const { user } = useContext(AuthContext);
    const { cartItems, setCartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const { book_name, book_url, price, book_description, print_length, language, author_name } = bookData;

    useEffect(() => {
        window.scrollTo(0, 0);
        const book = BooksData.filter(book => book.id === parseInt(id));
        setBookData(book[0]);
    }, [id])

    const handleAddToCart = () => {
        if (user?.email) {
            setCartItems([...cartItems, bookData]);
            toast.success(`Your book '${book_name}' is added to cart`);
        }
        else {
            navigate('/login');
            toast("Login first");
        }
    }

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
                        <button onClick={handleAddToCart} className='mt-4 py-3 px-6 bg-primary text-white text-lg'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookDetails;
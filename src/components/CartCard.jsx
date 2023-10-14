import React, { useContext } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/AuthProvider';

const CartCard = ({ book }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const { book_name, book_url, price, author_name } = book;
    
    const handleRemoveCart = (id) => {
        const cart = cartItems.filter(item=> item.id !== id)
        setCartItems(cart);
    }
    return (
        <div className='mt-10 border-2 border-gray rounded-lg py-6 px-8'>
            <div className='flex items-start gap-10'>
                <img className='w-24' src={book_url} alt="" />
                <div>
                    <h1 className='text-2xl font-bold mt-2'>{book_name}</h1>
                    <p className=''>{author_name}</p>
                    <h2 className='text-xl font-bold text-primary pb-2'>Tk. {price}</h2>
                    <button onClick={()=>handleRemoveCart(book.id)} className='px-8 py-3 bg-black text-white'>Remove from Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
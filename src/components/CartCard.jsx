import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const CartCard = () => {
    return (
        <div className='mt-10 border-2 border-gray rounded-lg py-6 px-8'>
            <div className='flex items-start gap-10'>
                <img className='w-24' src={"https://m.media-amazon.com/images/I/51cCdjGzuVL._SX364_BO1,204,203,200_.jpg"} alt="" />
                <div>
                    <h1 className='text-2xl font-bold mt-2'>The Jungle Book</h1>
                    <p className=''>Abu Siam</p>
                    <h2 className='text-xl font-bold text-primary pb-2'>Tk. 390</h2>
                    <button className='px-8 py-3 bg-black text-white'>Remove from Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
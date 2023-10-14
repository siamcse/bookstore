import React from 'react';
import Navbar from '../../components/Navbar';
import CartCard from '../../components/CartCard';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const CartPage = () => {
    return (
        <div className='relative'>
            <Navbar darkTheme={true} />
            <div className='container mx-auto py-32'>
                <h1 className='text-2xl font-bold'>Cart</h1>
                <div>
                    <CartCard />
                </div>
                <h1 className='mt-10 text-2xl font-bold'>Total Amount = Tk. 390</h1>
                <button><Button text={"Proceed to Checkout"} /></button>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import CartCard from '../../components/CartCard';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { CartContext } from '../../contexts/AuthProvider';

const CartPage = () => {
    const { cartItems,totalAmount } = useContext(CartContext);
    console.log(cartItems);

    if (!totalAmount) {
        return (
            <div className='relative'>
                <Navbar darkTheme={true} />
                <h1 className='pt-20 min-h-screen flex items-center justify-center text-3xl font-bold'>Your Cart is Empty</h1>
                <Footer />
            </div>
        )
    }
    return (
        <div className='relative'>
            <Navbar darkTheme={true} />
            <div className='container mx-auto py-32'>
                <h1 className='text-2xl font-bold'>Cart</h1>
                <div>
                    {
                        cartItems.map((item, i) => <CartCard key={i} book={item} />)
                    }
                </div>
                <h1 className='mt-10 text-2xl font-bold'>Total Amount = Tk. {totalAmount}</h1>
                <button><Button text={"Proceed to Checkout"} /></button>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
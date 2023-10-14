import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
export const CartContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [cartItems, setCartItems] = useState([]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        login,
    }

    const cartInfo = {
        cartItems,
        setCartItems
    }
    return (
        <AuthContext.Provider value={authInfo}>
            <CartContext.Provider value={cartInfo}>
                {children}
            </CartContext.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
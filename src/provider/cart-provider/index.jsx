'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on initial render
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("glowique-cart"));
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    // Save cart to localStorage whenever it updates
    useEffect(() => {
        localStorage.setItem("glowique-cart", JSON.stringify(cart));
    }, [cart]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        const updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.productId === product.productId);

        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            updatedCart.push(product);
        }
        toast.success('Successfully Added!');
        setCart(updatedCart);
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
    };
    

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

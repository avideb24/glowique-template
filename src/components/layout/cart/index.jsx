"use client";

import { useCart } from '@/provider/cart-provider';
import { allProducts } from '@/utils/allProducts';
import Cookies from 'js-cookie';
import { ShoppingCartIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useMemo } from 'react';


const Cart = () => {

    const { cart } = useCart();
    const pathname = usePathname();
    const [openCart, setOpenCart] = useState(false);
    const cartRef = useRef(null);
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const allProductsList = useMemo(() => allProducts(), []);


    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setOpenCart(false);
            }
        }

        if (openCart) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openCart]);

    useEffect(() => {
        if (cart.length > 0) {
            const filteredProducts = allProductsList.filter(product =>
                cart.some(item => item.productId === product.id)
            );
            setProducts(filteredProducts);
        } else {
            setProducts([]);
        }
    }, [cart, allProductsList]);


    const handleCheckout = (cartItems) => {
        setOpenCart(false);
        if (cartItems.length === 0) return;
        Cookies.set("glowique-checkout", JSON.stringify(cartItems), { expires: 1 });
        router.push("/checkout");
    };

    return (
        <div>
            <button onClick={() => setOpenCart(true)} className={`${pathname.startsWith("/checkout") ? "md:hidden" : "hidden md:block"} fixed z-10 top-1/2 -translate-y-1/2 right-10 p-3 rounded-sm bg-primary`}>
                <div className='relative text-white'>
                    <ShoppingCartIcon size={28} />
                    <span className='absolute -top-2 -right-3 w-5 h-5 rounded-full bg-dark flex justify-center items-center text-white text-[12px]'>{cart.length}</span>
                </div>
            </button>

            <div ref={cartRef} className={`w-[400px] h-[70%] bg-light fixed z-40 top-1/2 -translate-y-1/2 ${openCart ? "right-0" : "-right-[1000px]"} duration-300 border-2 shadow-lg text-dark`}>
                <div className='relative w-full h-full flex flex-col'>
                    <div className='sticky top-0 left-0 flex justify-between items-center bg-primary text-light p-4'>
                        <h2 className='font-bold'>Added Items ({products.length})</h2>
                        <button onClick={() => setOpenCart(false)}><X /></button>
                    </div>
                    <div className="flex-1 overflow-y-scroll">
                        {products.length === 0 ? (
                            <div className='flex flex-col items-center py-6 gap-2'>
                                <p className='font-semibold'>No Items Added!</p>
                                <Link href="/collections" onClick={() => setOpenCart(false)} className='button'>Shop Now</Link>
                            </div>
                        ) : (
                            products.map(product => (
                                <div key={product.id} className="flex items-center gap-4 border-b px-2">
                                    <Image src={product.image} alt={product.title} width={70} height={70} className="rounded-sm" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm">{product.title}</h3>
                                        <p className="text-xs text-gray-500">৳{product.price} x {cart.find(item => item.productId === product.id)?.quantity}</p>
                                    </div>
                                    <p className="font-semibold">৳{(Number(product.price) * (cart.find(item => item.productId === product.id)?.quantity || 1)).toFixed(2)}</p>
                                </div>
                            ))
                        )}
                    </div>
                    <div className='absolute bottom-0 left-0 w-full grid grid-cols-2 bg-light shadow-md'>
                        <h3 className='bg-slate-200 py-2 text-center font-semibold'>Total: ৳{products.reduce((sum, product) => sum + (Number(product.price) * (cart.find(item => item.productId === product.id)?.quantity || 1)), 0).toFixed(2)}</h3>
                        <button onClick={() => handleCheckout(cart)} className='bg-primary py-2 text-center text-light'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

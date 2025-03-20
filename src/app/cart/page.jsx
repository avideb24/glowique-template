"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const CartPage = () => {

    const router = useRouter();

    const products = [
        {
            id: 1,
            quantity: 2,
            title: "Pure Genius Peel Stick",
            price: "59.99",
            image: "https://i.ibb.co.com/GvJ0xvLS/p45.webp"
        },
        {
            id: 2,
            quantity: 2,
            title: "Pure Genius Peel Stick",
            price: "59.99",
            image: "https://i.ibb.co.com/GvJ0xvLS/p45.webp"
        },
        {
            id: 3,
            quantity: 2,
            title: "Pure Genius Peel Stick",
            price: "59.99",
            image: "https://i.ibb.co.com/GvJ0xvLS/p45.webp"
        },
    ];

    const cartItems = [
        {
            id: 1,
            quantity: 2,
        },
        {
            id: 2,
            quantity: 2,
        },
        {
            id: 3,
            quantity: 2,
        },
    ];


    // chechout fn
        const handleCheckout = (cartItems) => {
    
            if (cartItems.length === 0) return;
        
            Cookies.set("glowique-checkout", JSON.stringify(cartItems), { expires: 1 });
            router.push("/checkout");
        };
    


    return (
        <div className="pt-3 md:pt-10">
            <div className="container">
                <div className='relative w-full h-full px-2'>

                    <h2 className='font-bold pb-2'>Cart Items 2</h2>

                    {/* product list */}
                    <div>
                        {
                            products?.length == 0 ?
                                <div className='flex flex-col items-center py-6 gap-2'>
                                    <p className='font-semibold'>No Items Added!</p>
                                    <Link href={"/collections"} className='button'>shop now</Link>
                                </div>
                                :
                                <>
                                    {
                                        products?.map(product =>
                                            <div key={product.id} className="flex items-center gap-4 border-b px-2">
                                                <Image
                                                    src={product?.image}
                                                    alt={product?.title}
                                                    width={70}
                                                    height={70}
                                                    className="rounded-sm"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-sm">{product.title}</h3>
                                                    <p className="text-xs text-gray-500">৳{product.price} x {product.quantity}</p>
                                                </div>
                                                <p className="font-semibold">৳{(Number(product.price) * product.quantity).toFixed(2)}</p>
                                            </div>
                                        )
                                    }
                                </>
                        }
                    </div>
                </div>
                {/* buttons */}
                <div className='w-full grid grid-cols-2 mb-10 mt-5'>
                    <h3 className='bg-slate-200 py-2 text-center font-semibold'>Total: ৳100</h3>
                    <button onClick={()=> handleCheckout(cartItems)} className='bg-primary py-2 text-center text-light'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
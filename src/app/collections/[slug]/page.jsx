"use client";

import Actions from '@/components/page-comp/product-details/actions';
import ImageGallery from '@/components/page-comp/product-details/image-gallery';
import RelatedProducts from '@/components/page-comp/product-details/related-products';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { allProducts } from '@/utils/allProducts';


const ProductDetails = () => {
    const { slug } = useParams();
    const [productURL, setProductURL] = useState('');
    const products = allProducts();
    const product = products?.find(product => product?.id == slug);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setProductURL(window.location.href);
        }
    }, []);

    const message = encodeURIComponent("Check out this product!");

    const stock = true;
    const { price, discountPrice, title } = product || {};
    const discountPercentage = discountPrice ? Math.round(((parseInt(price) - parseInt(discountPrice)) / parseInt(price)) * 100) : null;

    return (
        <div className="bg-light py-10 mx-auto">
            <div className="container">
                <nav className="text-sm text-gray-500 mb-4">
                    Home &gt; Collection &gt; <span className="text-gray-800">{title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ImageGallery product={product} />

                    <div className="space-y-4 md:space-y-6">
                        <div className={`w-fit text-white text-xs md:text-sm px-4 py-1 rounded-full border ${stock ? "bg-green-600" : "bg-red-500"}`}>
                            {stock ? "In Stock" : "Stock Out"}
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold text-gray-800 capitalize">{title}</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-lg md:text-2xl font-semibold text-gray-900">৳{price}</span>
                            {discountPrice && (
                                <>
                                    <span className="text-base md:text-lg line-through text-gray-500">৳{discountPrice}</span>
                                    <span className="text-green-500 text-xs md:text-sm">({discountPercentage}% Off)</span>
                                </>
                            )}
                        </div>
                        <div className='space-y-2 font-semibold'>
                            <p>Size: 100ML</p>
                            <p>Brand: Unilever</p>
                        </div>

                        <Actions productId={product?.id} />

                        <div>
                            <p>SKU: Y455AY</p>
                            <h3 className="text-lg font-semibold text-gray-800 pt-4">Product Details</h3>
                            <ul className="list-disc ml-6 text-gray-600">
                                <li>Light Gray solid top with a boat neck and 3/4 sleeves</li>
                                <li>Material: 100% Cotton</li>
                                <li>Care: Machine-wash</li>
                            </ul>
                            <div className='flex items-center gap-2 pt-4'>
                                <h5>Share</h5>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${productURL}`} target="_blank" rel="noopener noreferrer" className='text-lg' title="Share on Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href={`https://api.whatsapp.com/send?text=${message}%20${productURL}`} target="_blank" rel="noopener noreferrer" className='text-lg' title="Share on WhatsApp">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='text-lg' title="Share on Instagram">
                                    <FaInstagram />
                                </a>
                                <a href={`https://twitter.com/intent/tweet?text=${message}&url=${productURL}`} target="_blank" rel="noopener noreferrer" className='text-lg' title="Share on X">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts />
            </div>
        </div>
    );
};

export default ProductDetails;
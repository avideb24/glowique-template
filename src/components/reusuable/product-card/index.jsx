import Link from 'next/link';
import React from 'react';
import ActionButtons from './actions';

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-60 relative group bg-white/90 backdrop-blur-md rounded-sm overflow-hidden py-3 px-1 md:p-4 border hover:border-primary duration-300">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-sm w-full max-h-52 md:max-h-60">
                <img
                    src={product?.image}
                    alt={product?.title || "Product image"}
                    className="w-full h-full object-cover rounded-sm duration-500 group-hover:scale-110"
                />
              <ActionButtons productId={product?.id} />
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center z-10">
                <Link href={`/collections/${product?.id}`}>
                    <h2 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-all duration-300 z-10 relative">
                        {product?.title}
                    </h2>
                </Link>
                <p>৳{product?.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

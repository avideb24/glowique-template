"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/provider/cart-provider";

const ActionButtons = ({ productId }) => {

    const { addToCart } = useCart();
    const router = useRouter();

    // Add to cart using provider function
    const handleCartToCart = (productId) => {
        addToCart({ productId, quantity: 1 });
    };

    // Buy Now function
    const handleBuyNow = (productId) => {
        const products = [{ id: productId, quantity: 1 }];
        localStorage.setItem("glowique-checkout", JSON.stringify(products));
        router.push("/checkout");
    };

    return (
        <div className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 duration-500 opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 z-10 flex justify-center items-center gap-1">
            <button
                onClick={() => handleCartToCart(productId)}
                className="bg-primary text-white px-2 py-1 md:px-5 md:py-2 rounded-sm font-semibold text-xs"
            >
                Add to Cart
            </button>
            <button
                onClick={() => handleBuyNow(productId)}
                className="bg-primary text-white px-2 py-1 md:px-5 md:py-2 rounded-sm font-semibold text-xs"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ActionButtons;

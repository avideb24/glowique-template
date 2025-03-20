"use client";

import { useCart } from "@/provider/cart-provider";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Actions = ({ productId }) => {

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();

    // quantity fn
    const handleQuantity = (type) => {
        if (type == "increase") {
            setQuantity(quantity + 1);
        }
        else {
            if (quantity > 1) setQuantity(quantity - 1);
        }
    };


    // add to cart fn
    const handleAddToCart = (productId) => {
        addToCart({ productId, quantity: quantity });
    };

    // buy now fn
    const handleBuyNow = (productId) => {
        const checkoutProducts = [{ id: productId, quantity: 1 }];

        Cookies.set("glowique-checkout", JSON.stringify(checkoutProducts), { expires: 1 });
        router.push("/checkout");
    };


    return (
        <div>

            {/* quantity selector */}
            <div className="flex items-center space-x-4 mt-5">
                <h3 className="text-lg font-semibold text-gray-800">Quantity</h3>
                <div className="flex items-center border rounded-full">
                    <button onClick={() => handleQuantity("decrease")} className="w-10 h-10 flex items-center justify-center text-lg border-r" >
                        -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button onClick={() => handleQuantity("increase")} className="w-10 h-10 flex items-center justify-center text-lg border-l" >
                        +
                    </button>
                </div>
            </div>


            {/* action buttons */}
            <div className="grid grid-cols-2 gap-4 font-semibold mt-5">
                <button onClick={() =>handleAddToCart(productId)} className="!w-full button">Add To Cart</button>
                <button onClick={() => handleBuyNow(productId)} className="!w-full button !bg-white !text-dark border border-dark">Buy Now</button>
            </div>
        </div>
    );
};

export default Actions;
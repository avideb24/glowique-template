"use client";

import InfoForm from "@/components/page-comp/checkout/info-form";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const CheckoutPage = () => {

    const [checkoutProducts, setCheckoutProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const router = useRouter();


    // load checkout products
    useEffect(() => {
        setLoading(true);
        const storedProducts = Cookies.get("glowique-checkout");
        if (storedProducts) {
            setCheckoutProducts(JSON.parse(storedProducts));
        }
        setLoading(false);
    }, []);


    // user info fn
    const handleFormSubmit = (data) => {
        setUserInfo(data);
        console.log("User Info Submitted:", data);

        setLoading(false);
        router.push("/checkout/success")
    };

    console.log(checkoutProducts);


    return (
        <div className="pt-5 md:pt-10 pb-10 md:pb-24">
            <div className="container">
                <h1 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                    Checkout
                </h1>

                {
                    loading ?
                        <div>loading</div>
                        :
                        <>
                            {
                                checkoutProducts?.length == 0 ?
                                    <div>
                                        <h3>No Products Added!</h3>
                                        <Link href={"/collections"}>Shop Now</Link>
                                    </div>
                                    :
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* User Info Form */}
                                        <InfoForm onSubmit={handleFormSubmit} />

                                        {/* Order Summary */}
                                        <div className="bg-white dark:bg-gray-900 shadow-md rounded-sm p-6 border border-gray-200 dark:border-gray-700">
                                            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                                Order Summary
                                            </h2>
                                            <ul className="divide-y divide-gray-300 dark:divide-gray-700">
                                                <li className="py-3 flex justify-between">
                                                    <span>Infinite Illumination Cream (x2)</span>
                                                    <span className="font-bold">৳ 119.98</span>
                                                </li>
                                                <li className="py-3 flex justify-between">
                                                    <span>Delivery Fee</span>
                                                    <span className="font-bold">৳ 100.00</span>
                                                </li>
                                                <li className="py-3 flex justify-between text-lg font-semibold">
                                                    <span>Total</span>
                                                    <span>৳ 339.96</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default CheckoutPage;

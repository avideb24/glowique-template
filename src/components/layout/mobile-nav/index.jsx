"use client";

import { useCart } from "@/provider/cart-provider";
import Link from "next/link";
import { CiBoxes, CiHome, CiShoppingCart } from "react-icons/ci";


const MobileNav = () => {

    const {cart} = useCart();

    const navItems = [
        { id: 1, title: "Home", href: "/", icon: <CiHome />, },
        { id: 2, title: "Collections", href: "/collections", icon: <CiBoxes />, },
        { id: 3, title: "Cart", href: "/cart", icon: <CiShoppingCart />, },
    ]

    return (
        <div className="fixed z-50 left-0 bottom-0 w-full bg-light border-t border-t-slate-100 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-3 items-center">
                {
                    navItems?.map(item =>
                        <Link key={item?.id} href={item?.href || ""} className={` py-4 flex justify-center items-center gap-1 uppercase`}>
                            {item?.icon}
                            <div className="relative text-xs">
                                <h2>{item?.title}</h2>
                                {/* cart product count */}
                                {
                                    item?.title == "Cart" &&
                                    <p className="absolute -top-1 -right-[18px] w-[15px] h-[15px] bg-dark rounded-full text-[9px] text-light flex justify-center">{cart?.length || 0}</p>
                                }
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default MobileNav;
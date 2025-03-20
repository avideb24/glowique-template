"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const MobileMenu = ({ navItems, logoImg, isNavOpen, setIsNavOpen }) => {

    return (
        <div className={`w-80 h-screen bg-primary fixed z-[100] top-0 ${isNavOpen ? 'left-0' : '-left-[500px]'} duration-300 p-5`}>
            <div className='flex justify-between items-center'>
                <Image src={logoImg} width={100} height={100} className="pl-5" alt='Logo' />
                <button onClick={() => setIsNavOpen(false)} className='p-1 rounded-full bg-dark text-white'>
                    <X />
                </button>
            </div>
            <nav className='px-6 pt-6 space-y-2'>
                {
                    navItems?.map(item =>
                        <div key={item?.id} className='block text-white pb-2 border-b border-b-white'>
                            <Link href={item?.href} onClick={() => setIsNavOpen(false)} >
                                {item?.title}
                            </Link>
                        </div>
                    )
                }
            </nav>
        </div>
    );
};

export default MobileMenu;

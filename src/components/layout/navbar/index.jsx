'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logoImg from '@/assets/images/logo.png';
import { AlignRight } from 'lucide-react';
import { CiMenuFries, CiSearch } from "react-icons/ci";
import MobileMenu from './mobile-menu';
import { usePathname } from 'next/navigation';
import TopNotice from '../top-notice';
import SearchBar from './search-bar';
import InfoBar from './info-bar';


const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileMenuRef = useRef(null);
    const pathname = usePathname();


    const navItems = [
        { id: 1, title: 'Home', href: '/' },
        { id: 2, title: 'Collections', href: '/collections' },
        { id: 3, title: 'About', href: '/about' },
        { id: 4, title: 'Contact', href: '/contact' },
        { id: 5, title: 'Terms & Conditions', href: '/terms-and-conditions' },
        { id: 6, title: 'Privacy Policy', href: '/privacy-policy' },
    ];


    // close mobile menu when clicking outside
    useEffect(() => {
        function handleClickOutsideMobileMenu(event) {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.md\\:hidden')) {
                setIsNavOpen(false);
            }
        }

        if (isNavOpen) {
            document.addEventListener("mousedown", handleClickOutsideMobileMenu);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideMobileMenu);
        };
    }, [isNavOpen]);

    // stick navbar when scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // prevent scrolling
    useEffect(() => {
        if (isNavOpen || isDropdownOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isNavOpen, isDropdownOpen]);

    return (
        <>
            <div className={`fixed top-0 w-full z-50 pb-3 transition-all bg-light ${isScrolled ? 'shadow-md' : ''}`}>
                <TopNotice />
                <div className='container'>

                    <div className='grid grid-cols-3 lg:grid-cols-3 items-center pt-3'>

                        {/* mobile menu btn */}
                        <button onClick={() => setIsNavOpen(true)} className='w-fit lg:hidden mb-1 text-2xl rotate-180'>
                            <CiMenuFries />
                        </button>

                        <div className='hidden lg:flex items-center gap-4 md:gap-10'>
                            {/* nav items */}
                            <nav className='flex items-center gap-5'>
                                {
                                    navItems?.slice(0, 4)?.map(item =>
                                        <Link href={item?.href} key={item?.id} className={`${pathname == item?.href && "underline"} py-2 hover:text-primary`}>
                                            {item?.title}
                                        </Link>
                                    )
                                }
                            </nav>
                        </div>

                        {/* logo */}
                        <Link href={'/'} className='w-fit mx-auto'>
                            <Image src={logoImg} className='w-20 md:w-28' width={100} height={100} alt='logo' />
                        </Link>

                        <div className='flex justify-end items-center gap-3'>
                            <SearchBar />
                            <InfoBar />
                        </div>
                    </div>
                    {/* <div className="relative w-full md:hidden mt-1">
                        <input
                            type="text"
                            placeholder="Search product..."
                            className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-sm focus:outline-none text-xs"
                        />
                        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div> */}
                </div>
                {/* mobile menu */}
                <div ref={mobileMenuRef}>
                    <MobileMenu navItems={navItems} logoImg={logoImg} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
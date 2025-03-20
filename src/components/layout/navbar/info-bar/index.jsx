"use client";

import React, { useState } from 'react';
import { CiMenuBurger, CiFacebook, CiInstagram,CiMail  } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { Drawer } from 'antd';
import Image from "next/image";
import logoImg from "@/assets/images/logo.png";
import Link from 'next/link';


const InfoBar = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <div className='hidden lg:block'>
            <button onClick={showDrawer}>
                <CiMenuBurger className="text-2xl" />
            </button>
            <>
                <Drawer onClose={onClose} open={open}>
                    <div className="flex flex-col items-center gap-5">
                        <Image src={logoImg} width={100} height={100} alt="logo" />
                        <p>The skin has needs that go far beyond the bounds of simply feeding it products and ingredients. At Lisén, we want your skin to find all that it seeks and more</p>
                        <div>
                            <Link href={'tel:+0178548745'} className='flex justify-center items-center gap-2'>
                                <IoCallOutline />
                                +0178548745
                            </Link>
                            <Link href={"mailTo:cosmetics.vida@gmail.com"} className='flex justify-center items-center gap-2'>
                                <CiMail  />
                                cosmetics.vida@gmail.com
                            </Link>
                        </div>
                        <div className="flex justify-center items-center gap-2 py-3 text-2xl">
                            <Link href={"/"}>
                                <CiFacebook />
                            </Link>
                            <Link href={"/"}>
                                <CiInstagram />
                            </Link>
                            <Link href={"/"}>
                                <PiWhatsappLogoThin />
                            </Link>
                            <Link href={"/"}>
                                <RiTwitterXFill />
                            </Link>
                        </div>
                    </div>
                </Drawer>
            </>

        </div>
    );
};

export default InfoBar;
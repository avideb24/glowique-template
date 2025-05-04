import logoImg from "@/assets/images/logo.png";
import { allCategories } from "@/utils/allCategories";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {

    const categories = allCategories();

    const usefulLinks = [
        { id: 1, title: 'About Us', href: '/about' },
        { id: 2, title: 'Contact Us', href: '/contact' },
        { id: 3, title: 'Terms & Conditions', href: '/terms-and-conditions' },
        { id: 4, title: 'Privacy Policy', href: '/privacy-policy' },
    ];

    const socialLinks = [
        { id: 1, name: "Facebook", icon: <FaSquareFacebook />, },
        { id: 2, name: "Whatsapp", icon: <FaSquareInstagram />, },
        { id: 3, name: "X", icon: <FaSquareXTwitter />, },
    ];

    return (
        <footer className="hidden md:block">
            <div className='bg-dark text-white py-8 md:py-16 dark:border-t-2 dark:border-t-slate-500'>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {/* company info */}
                        <div>
                            <Image src={logoImg} width={100} height={100} alt="Logo" />
                            <address className="not-italic pl-3 pt-3 sm:max-w-64">
                                236/5/A, Paurashava Mor, Dinajpur, Bangladesh
                            </address>
                            <div className="flex items-center text-2xl gap-2 pt-5 pl-3">
                                {
                                    socialLinks?.map(item =>
                                        <Link href={item?.href || '/'} key={item?.id} className="w-fit overflow-hidden">
                                            {item?.icon}
                                        </Link>
                                    )
                                }
                            </div>
                        </div>

                        {/* collections */}
                        <div>
                            <h2 className="text-base md:text-lg font-semibold mb-6 mt-5 sm:mt-0">Collections</h2>
                            <div className="flex flex-col gap-2 opacity-80">
                                {
                                    categories?.map(item =>
                                        <Link href={'/collections'} key={item?.id} className="w-fit overflow-hidden">
                                            <p>{item?.title}</p>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>

                        {/* useful links */}
                        <div className="hidden lg:block">
                            <h2 className="text-base md:text-lg font-semibold mb-6 mt-5 sm:mt-0">Useful Links</h2>
                            <div className="flex flex-col gap-2 opacity-80">
                                {
                                    usefulLinks?.map(item =>
                                        <Link href={item?.href || "/"} key={item?.id} className="w-fit overflow-hidden">
                                            <p>{item?.title}</p>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>

                        {/* support */}
                        <div>
                            <h2 className="text-base md:text-lg font-semibold mb-6 mt-5 sm:mt-0">Support</h2>
                            <div className="flex flex-col gap-2 opacity-80">
                                <Link href={'tel:+8801723622125'} className="flex items-center gap-2 hover:underline">
                                    <Phone />
                                    +8801723622125
                                </Link>
                                <Link href={'mailTo:devavi24bd@gmail.com'} className="flex items-center gap-2 hover:underline">
                                    <Mail />
                                    devavi24bd@gmail.com
                                </Link>
                                <Link href={'mailTo:support@vida.com.bd'} className="flex items-center gap-2 hover:underline">
                                    <Mail />
                                    support-demo@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* copyright section */}
                    <div className="text-xs md:text-sm text-center pt-10 mt-10 border-t border-t-slate-400">
                        <p> © 2025 - Designed By
                            <Link href={'https://avi-debnath.surge.sh/'} className="ml-2">Avi Debnath</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
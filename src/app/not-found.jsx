import React from 'react';
import img404 from '@/assets/images/404-img.webp'
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="-mt-20">
                <Image src={img404} className="mx-auto" alt="404 Image" />
                <h1 className="text-2xl font-bold mt-2 mb-6">Your requested page was not found!</h1>
                <Link href={'/'} className="block text-center">
                    <button className='button'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
"use client";

import { useState } from 'react';
import ProductCard from '../product-card';
import Filter from './filter';
import Link from 'next/link';


const tabItems = ["extra care", "acne care", "basic care"];


const Collections = ({ title, products, filter = false, button = false }) => {

    const [selectedTab, setSelectedTab] = useState(tabItems[0] || "");

    return (
        <div className='container'>
            <h2 className={`${filter && "text-center"} section-heading`}>{title}</h2>
            {
                filter &&
                <div>
                    <Filter selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabItems={tabItems} />
                </div>
            }
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {
                    products?.map(product =>
                        <ProductCard key={product?.id} product={product} />
                    )
                }
            </div>
            {
                button &&
                <div className='text-center pt-8'>
                    <Link href={"/collections"} className='button'>View All</Link>
                </div>
            }
        </div>
    );
};

export default Collections;
"use client";

import Filter from '@/components/page-comp/collections/filter';
import ProductCard from '@/components/reusuable/product-card';
import { allProducts } from '@/utils/allProducts';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const CollectionsPage = () => {

    const searchParams = useSearchParams();
    const query = searchParams.get('query');


    const [selectedCategory, setSelectedCategory] = useState(query || "");


    const products = allProducts();
    

    return (
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-5 pt-4 pb-10 lg:py-16'>
                
                {/* -------- filter -------- */}
                <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                {/* ------- products -------- */}
                <div className='lg:col-span-4'>
                    {
                        products?.length == 0 ?
                            <div></div>
                            :
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                                {
                                    [...products,...products,...products,...products]?.map((product,idx) =>
                                        <ProductCard key={idx} product={product} />
                                    )
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CollectionsPage;
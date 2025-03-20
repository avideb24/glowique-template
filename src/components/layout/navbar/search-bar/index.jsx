'use client';

import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react';
import { Drawer } from 'antd';
import { allProducts } from "@/utils/allProducts";
import Link from "next/link";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
    const products = allProducts();

    const showDrawer = () => setOpen(true);
    const onClose = () => {
        setOpen(false);
        setSearchTerm(''); // Clear search on close
    };

    // Only filter when there's a valid search term
    const filteredProducts = searchTerm
        ? products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div>
            <button onClick={showDrawer}>
                <CiSearch className="text-2xl" />
            </button>
            <Drawer title="Search Here..." onClose={onClose} open={open}>
                <div>
                    <input
                        type="text"
                        className="input input-bordered w-full mb-4"
                        placeholder="Ex. Lipstick"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Link href={`/collections/${product?.id}`} onClick={() => setOpen(false)} key={product?.id} className="flex items-center gap-4 mb-3">
                                <img src={product?.image} alt={product?.title} className="w-12 h-12 object-cover rounded-md" />
                                <div>
                                    <h4 className="text-sm font-semibold">{product?.title}</h4>
                                    <p className="text-gray-500">৳{product?.price}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            {searchTerm ? "No products found" : "Type to search..."}
                        </p>
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default SearchBar;

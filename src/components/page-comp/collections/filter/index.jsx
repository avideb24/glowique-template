"use client";

import { Select } from 'antd';
import "./index.css";

const Filter = ({ selectedCategory, setSelectedCategory }) => {


    const categoryOptions = [
        { label: "All", value: "" },
        { label: "Men", value: "men" },
        { label: "Woman", value: "woman" },
    ];
    const pricingOptions = [
        { label: "Low To High", value: "lowToHigh" },
        { label: "High To Low", value: "highToLow" },
    ]

    return (
        <div className='lg:pr-6'>
            <h2 className='text-sm md:text-lg font-semibold pb-4'>Filter Collections</h2>

            <div className='grid grid-cols-2 gap-5 lg:block'>
                <div>
                    <h3 className='font-semibold'>Category</h3>
                    <Select onChange={(value) => setSelectedCategory(value)} className='w-full border border-slate-300 rounded-sm  mt-1 mb-4' options={categoryOptions} defaultValue={selectedCategory} placeholder={"Select One"} ></Select>
                </div>

                <div>
                    <h3 className='font-semibold'>Pricing</h3>
                    <Select className='w-full border border-slate-300 rounded-sm mt-1 mb-4' options={pricingOptions} placeholder={"Select One"} ></Select>
                </div>
            </div>

        </div>
    );
};

export default Filter;
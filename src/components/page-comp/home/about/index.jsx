"use client";

import { FaLeaf, FaHeart } from "react-icons/fa";
import { TbArrowsCross, TbHexagon } from "react-icons/tb";

export default function About() {
    return (
        <div className="bg-slate-100 py-10 md:py-24">
            <div className="container">
                <div className="text-center">
                    <h4 className="text-gray-500 tracking-widest text-xs uppercase">What We Believe</h4>
                    <h2 className="text-xl md:text-4xl font-semibold text-gray-900 mt-2">
                        IT’S ABOUT YOUR SKIN, BUT IT’S <br /> ALSO ABOUT YOU.
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        While we believe in the power of science and the role it has in determining how one’s skin looks and feels, we
                        also acknowledge that skincare is as much an emotional journey as it is a physical one.
                    </p>

                    <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 justify-center gap-3 mt-12 text-4xl">
                        <Feature icon={<TbArrowsCross />} text="FOR ALL SKIN TYPES" />
                        <Feature icon={<FaHeart />} text="NOT TESTED ON ANIMALS" />
                        <Feature icon={<FaLeaf />} text="HYPOALLERGENIC" />
                        <Feature icon={<TbHexagon />} text="FREE FROM PARABENS" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Feature({ icon, text }) {
    return (
        <div>
            <div className="flex flex-col items-center text-gray-900">
                <div className="w-20 h-20 flex items-center justify-center border border-gray-900 rounded-full">
                    {icon}
                </div>
                <p className="mt-4 text-xs md:text-sm font-semibold">{text}</p>
            </div>
        </div>
    );
}

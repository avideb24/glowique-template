"use client";

import bgImage from "@/assets/images/deals-banner.jpg";
import { useEffect, useState } from "react";


const Deals = () => {

    const [timeLeft, setTimeLeft] = useState(null);
    
        useEffect(() => {
            const calculateTimeLeft = () => {
                const targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + 73);
                targetDate.setHours(0, 0, 0, 0);
    
                const difference = targetDate - new Date();
                if (difference > 0) {
                    return {
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / (1000 * 60)) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                    };
                }
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            };
    
            setTimeLeft(calculateTimeLeft()); // Set initial value after mount
    
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
    
            return () => clearInterval(timer);
        }, []);
    
        if (!timeLeft) return null; // Prevent rendering mismatched HTML

    return (
        <div className='container'>
            <div className="py-10 md:py-28 bg-cover bg-center pr-4 md:pr-10 rounded-md relative overflow-hidden"
                style={{ backgroundImage: `url(${bgImage.src})` }}>

                {/* overlay */}
                <div className="w-full h-full absolute z-0 left-0 top-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-50"></div>

                <div className='relative z-10 flex flex-col items-end gap-5 text-white'>
                    <h2 className="text-xl md:text-4xl font-bold">Deal Of This Week</h2>
                    <p className="md:text-lg">Offering hot deal for this Eid festival</p>
                    <div className="flex justify-end gap-2">
                        {[`${timeLeft.days} DAYS`, `${timeLeft.hours} HOURS`, `${timeLeft.minutes} MINS`, `${timeLeft.seconds} SECS`].map((time, idx) => (
                            <div key={idx} className="bg-yellow-400 text-black p-2 md:p-4 text-xs md:text-lg font-bold">
                                {time}
                            </div>
                        ))}
                    </div>
                    <button className="button">
                        Explore Now →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Deals;